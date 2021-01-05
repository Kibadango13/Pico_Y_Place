// Interfaces and types from component InputForm

// Component Props
export interface InputFormProps {
  className?: string;
  type?: string;
  name?: string;
  value?: string;
  onChange?: () => void;
  placeholder?: string;
  error?: string;
  mask?: any;
  readonly?: boolean;
  disabled?: boolean;
}

// Styled Component Props
export interface InputFormStyledProps {
  className: string;
}
