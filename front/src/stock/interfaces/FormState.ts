export interface FormState<T extends object> {
  value: T
  error: FormError<T>
  touched: FormTouched<T>
}

export type FormError<T extends object> = Record<keyof T, string>
export type FormTouched<T extends object> = Record<keyof T, boolean>
