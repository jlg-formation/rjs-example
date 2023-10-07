import { FormState } from '../stock/interfaces/FormState'

export const required = (value: string) => {
  return value === '' ? 'Champ Requis' : ''
}

export const firstError = (...errors: string[]) => {
  for (const error of errors) {
    if (error !== '') {
      return error
    }
  }
  return ''
}

export const tooLong = (value: string, maxLength = 10) => {
  return value.length > maxLength
    ? `Trop long (${value.length}>${maxLength})`
    : ''
}

export const positive = (value: number) => {
  return value < 0 ? 'Must be positive' : ''
}

export const isInvalid = <T extends object>(formState: FormState<T>) => {
  for (const value of Object.values(formState.error)) {
    if (value !== '') {
      return true
    }
  }
  return false
}

export const getError = <T extends object>(
  form: FormState<T>,
  key: keyof T,
) => {
  return form.touched[key] && form.error[key]
}
