// Interfaces and types from component InputTimePicker

// Component Props
export interface InputTimePickerProps {
  labelText?: string;
  value: string;
  onChange: (value: string) => void;
  error: string;
  placeholder: string;
}

// Styled Component Props
export interface InputTimePickerStyledProps {
  className: string;
}
