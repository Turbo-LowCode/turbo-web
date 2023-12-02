export interface CustomFormItemFieldProps<T = unknown> {
  id?: string
  value?: T
  onChange?: (val: T) => void
}
