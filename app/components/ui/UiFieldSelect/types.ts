export interface UiFieldSelectOption {
  value: string;
  label: string;
}

export interface UiFieldSelectProps {
  modelValue?: string;
  name?: string;
  placeholder?: string;
  options: UiFieldSelectOption[];
  disabled?: boolean;
  error?: boolean;
}
