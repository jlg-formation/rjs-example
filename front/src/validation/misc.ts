export const required = (value: unknown): string => {
  if (value === '' || value === undefined || value === null) {
    return 'champ requis'
  }
  return ''
}

export const first = (...str: string[]): string => {
  for (const s of str) {
    if (s !== '') {
      return s
    }
  }
  return ''
}

export const maxLength = (value: string, maxLength = 10): string => {
  if (value.length > maxLength) {
    return `champ trop long (${value.length}>${maxLength})`
  }
  return ''
}

export const minLength = (value: string, minLength = 4): string => {
  if (value.length < minLength) {
    return `champ trop court (${value.length}<${minLength})`
  }
  return ''
}

export const cleanError = (errors: { [key: string]: string }): object => {
  for (const [key, value] of Object.entries(errors)) {
    if (value === '') {
      delete errors[key]
    }
  }
  return errors
}

export const isFormInvalid = (errors: { [key: string]: string }) => {
  return Object.keys(errors).length > 0
}
