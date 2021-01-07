// Interfaces and types from component Button
import { ReactElement } from "react";

// Component Props
export interface ButtonProps {
  className?: string;
  text: string;
  textAlign?: string;
  onClick?: () => void;
  icon?: ReactElement;
  iconPosition?: string;
  google?: boolean;
  loading?: boolean;
  loader?: any;
  testID?: string;
}

// Styled Component Props
export interface ButtonStyledProps {
  loader: any;
  className: string;
}
