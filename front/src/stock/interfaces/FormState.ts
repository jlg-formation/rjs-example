export interface FormState<T extends object> {
  value: T
  error: FormError<T>
}

export type FormError<T extends object> = Record<keyof T, string>
