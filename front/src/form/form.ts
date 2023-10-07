import { useState, FocusEvent, ChangeEvent } from 'react'
import {
  FormError,
  FormState,
  FormTouched,
} from '../stock/interfaces/FormState'

export const getFormClass = <T extends object>(
  form: FormState<T>,
  key: keyof T,
): string => {
  const touched = form.touched[key] ? 'touched' : ''
  const invalid = form.error[key] !== '' ? 'invalid' : ''
  return [touched, invalid].join(' ')
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
  const [form, setForm] = useState(getInitialForm<T>(initialValues))

  const handleBlur = (event: FocusEvent<HTMLInputElement, Element>) => {
    const name = event.target.name
    const newForm: FormState<T> = { ...form }
    newForm.touched = { ...form.touched, [name]: true }
    setForm(newForm)
  }

  const handleChange =
    (isNumber = false) =>
    (event: ChangeEvent<HTMLInputElement>) => {
      const name = event.target.name
      const newForm: FormState<T> = { ...form }
      newForm.value = {
        ...form.value,
        [name]: isNumber ? +event.target.value : event.target.value,
      }
      newForm.error = validate(newForm.value)
      setForm(newForm)
    }
  return { form, setForm, handleBlur, handleChange }
}
