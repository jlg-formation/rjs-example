import { ChangeEvent, FocusEvent, useRef, useState } from 'react'
import {
  FormError,
  FormState,
  FormTouched,
} from '../stock/interfaces/FormState'
import { debounce } from '../misc'

export class Form<T extends object> {
  constructor(public formState: FormState<T>) {}
  getClassnames(key: keyof T) {
    const touched = this.formState.touched[key] ? 'touched' : ''
    const invalid = this.getError(key) !== '' ? 'invalid' : ''
    return [touched, invalid].join(' ')
  }

  getValue(key: keyof T) {
    return this.formState.value[key]
  }

  getError(key: keyof T) {
    if (this.formState.touched[key] === false) {
      return this.formState.asyncError[key]
    }
    const error = this.formState.error[key]
    if (error === '') {
      return this.formState.asyncError[key]
    }
    return error
  }

  isInvalid() {
    for (const value of Object.values(this.formState.error)) {
      if (value !== '') {
        return true
      }
    }
    for (const value of Object.values(this.formState.asyncError)) {
      if (value !== '') {
        return true
      }
    }
    return false
  }
}

export const getInitialForm = <T extends object>(
  initialValue: T,
): FormState<T> => {
  const error = Object.fromEntries(
    Object.keys(initialValue).map((k) => [k, '']),
  ) as FormError<T>
  const asyncError = Object.fromEntries(
    Object.keys(initialValue).map((k) => [k, '']),
  ) as FormError<T>
  const touched = Object.fromEntries(
    Object.keys(initialValue).map((k) => [k, false]),
  ) as FormTouched<T>

  return {
    value: initialValue,
    error,
    asyncError,
    touched,
  }
}

export const useForm = <T extends object>(
  initialValues: T,
  validate: (values: T) => FormError<T>,
  asyncValidate?: (values: T) => Promise<FormError<T>>,
) => {
  const [formState, _setFormState] = useState(getInitialForm<T>(initialValues))
  const formStateRef = useRef(formState)
  const setFormState = (newFormState: FormState<T>) => {
    _setFormState(newFormState)
    formStateRef.current = newFormState
  }

  const handleBlur = (event: FocusEvent<HTMLInputElement, Element>) => {
    const name = event.target.name
    const newForm: FormState<T> = { ...formState }
    newForm.touched = { ...formState.touched, [name]: true }
    setFormState(newForm)
  }

  const handleChange =
    (isNumber = false) =>
    (event: ChangeEvent<HTMLInputElement>) => {
      const name = event.target.name as keyof T
      const newForm: FormState<T> = { ...formState }
      newForm.value = {
        ...formState.value,
        [name]: isNumber ? +event.target.value : event.target.value,
      }
      newForm.error = validate(newForm.value)

      if (asyncValidate) {
        newForm.asyncError[name] = ''
        debounce(() => {
          asyncValidate(newForm.value).then((asyncError) => {
            console.log('async validate finished.')
            const newForm: FormState<T> = {
              ...formStateRef.current,
              asyncError,
            }
            setFormState(newForm)
          })
        })()
      }
      setFormState(newForm)
    }

  const form = new Form<T>(formState)
  return { form, handleBlur, handleChange }
}
