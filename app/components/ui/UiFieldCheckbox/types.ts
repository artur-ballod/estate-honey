export type UiFieldCheckboxVariant = 'default' | 'policy' | 'card'

export interface UiFieldCheckboxProps {
  modelValue?: boolean
  id?: string
  name?: string
  label?: string
  disabled?: boolean
  required?: boolean
  error?: string
  variant?: UiFieldCheckboxVariant
}