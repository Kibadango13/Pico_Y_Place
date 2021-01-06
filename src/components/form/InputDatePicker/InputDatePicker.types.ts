// Interfaces and types from component InputDatePicker

// Component Props
export interface InputDatePickerProps {
  labelText: string;
  error: string;
  value: string;
  onChange: (value: string) => void;
}

// Styled Component Props
export interface InputDatePickerStyledProps {
  className: string;
}
