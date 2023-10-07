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