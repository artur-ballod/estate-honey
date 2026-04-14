export type UiFieldInputType = "text" | "tel" | "email" | "password";

export type UiFieldInputMode =
  | "text"
  | "tel"
  | "email"
  | "numeric"
  | "search"
  | "url";

export type UiFieldInputMask = "phone" | null;

export interface UiFieldInputProps {
  modelValue?: string;
  id?: string;
  name?: string;
  type?: UiFieldInputType;
  placeholder?: string;
  autocomplete?: string;
  inputmode?: UiFieldInputMode;
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  error?: string;
  mask?: UiFieldInputMask;
}
