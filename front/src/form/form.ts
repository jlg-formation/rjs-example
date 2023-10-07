import { useState } from 'react'
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

export const useForm = <T extends object>(initialValues: T) => {
  const [form, setForm] = useState(getInitialForm<T>(initialValues))
  return [form, setForm]
}
