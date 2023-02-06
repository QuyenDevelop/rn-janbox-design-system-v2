import type React from "react";
import type {
  GestureResponderEvent,
  NativeSyntheticEvent,
  TargetedEvent,
  TextStyle,
  ViewStyle,
} from "react-native";

export declare type ButtonStyle = "PRIMARY" | "SECONDARY_ONE" | "SECONDARY_TWO";
export enum ButtonTypes {
  PRIMARY = "PRIMARY",
  SECONDARY_ONE = "SECONDARY_ONE",
  SECONDARY_TWO = "SECONDARY_TWO",
}
export declare type ButtonSize = "SMALL" | "SMALL_SPECIAL" | "MEDIUM" | "LARGE";
export enum ButtonSizes {
  SMALL = "SMALL",
  SMALL_SPECIAL = "SMALL_SPECIAL",
  MEDIUM = "MEDIUM",
  LARGE = "LARGE",
}

export interface ButtonProps {
  buttonStyle?: ButtonStyle;
  buttonSize?: ButtonSize;
  width?: number;
  isLoading?: boolean;
  isDisabled?: boolean;
  name?: string;
  contentStyles?: TextStyle;
  containerStyle?: ViewStyle;
  children?: React.ReactNode | JSX.Element | null | undefined;
  ButtonLeftView?:
    | React.ComponentType<any>
    | React.ReactElement
    | null
    | undefined;
  ButtonRightView?:
    | React.ComponentType<any>
    | React.ReactElement
    | null
    | undefined;

  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  onFocus?: ((e: NativeSyntheticEvent<TargetedEvent>) => void) | undefined;
  onBlur?: ((e: NativeSyntheticEvent<TargetedEvent>) => void) | undefined;
}
