export type UiFieldRadioValue = string | number | boolean;
export type UiFieldRadioVariant = "default" | "card";

export interface UiFieldRadioProps {
  modelValue?: UiFieldRadioValue;
  id?: string;
  name?: string;
  value: UiFieldRadioValue;
  label?: string;
  disabled?: boolean;
  variant?: UiFieldRadioVariant;
}
