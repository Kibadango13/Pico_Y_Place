// Interfaces and types from component InputForm

// Component Props
export interface InputFormProps {
  className?: string;
  type?: string;
  name?: string;
  value?: string;
  onChange?: any;
  placeholder?: string;
  error?: string;
  mask?: any;
  readonly?: boolean;
  disabled?: boolean;
  labelText?: string;
}

// Styled Component Props
export interface InputFormStyledProps {
  className: string;
}
