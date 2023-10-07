import { useState, FocusEvent, ChangeEvent } from 'react'
import {
  FormError,
  FormState,
  FormTouched,
} from '../stock/interfaces/FormState'

export class Form<T extends object> {
  constructor(public formState: FormState<T>) {}
  getClassnames(key: keyof T) {
    const touched = this.formState.touched[key] ? 'touched' : ''
    const invalid = this.formState.error[key] !== '' ? 'invalid' : ''
    return [touched, invalid].join(' ')
  }

  getValue(key: keyof T) {
    return this.formState.value[key]
  }

  getError(key: keyof T) {
    return this.formState.touched[key] && this.formState.error[key]
  }

  isInvalid() {
    for (const value of Object.values(this.formState.error)) {
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
  const touched = Object.fromEntries(
    Object.keys(initialValue).map((k) => [k, false]),
  ) as FormTouched<T>

  return {
    value: initialValue,
    error,
    touched,
  }
}

export const useForm = <T extends object>(
  initialValues: T,
  validate: (values: T) => FormError<T>,
) => {
  const [formState, setFormState] = useState(getInitialForm<T>(initialValues))

  const handleBlur = (event: FocusEvent<HTMLInputElement, Element>) => {
    const name = event.target.name
    const newForm: FormState<T> = { ...formState }
    newForm.touched = { ...formState.touched, [name]: true }
    setFormState(newForm)
  }

  const handleChange =
    (isNumber = false) =>
    (event: ChangeEvent<HTMLInputElement>) => {
      const name = event.target.name
      const newForm: FormState<T> = { ...formState }
      newForm.value = {
        ...formState.value,
        [name]: isNumber ? +event.target.value : event.target.value,
      }
      newForm.error = validate(newForm.value)
      setFormState(newForm)
    }

  const form = new Form<T>(formState)
  return { form, handleBlur, handleChange }
}
