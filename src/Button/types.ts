import type React from "react";
import type { TouchableOpacityProps } from "react-native";
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
export declare type IconColorType = "LIGHT" | "DARK";
export enum IconColor {
  LIGHT = "LIGHT",
  DARK = "DARK",
}

export interface ButtonProps extends TouchableOpacityProps {
  buttonStyle?: ButtonStyle;
  buttonSize?: ButtonSize;
  width?: number;
  isLoading?: boolean;
  isDisabled?: boolean;
  name?: string;
  contentStyles?: TextStyle;
  containerStyle?: ViewStyle;
  children?: React.ReactNode;
  buttonLeftView?: React.ReactNode;
  buttonRightView?: React.ReactNode;
  iconColor?: IconColorType;

  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  onFocus?: ((e: NativeSyntheticEvent<TargetedEvent>) => void) | undefined;
  onBlur?: ((e: NativeSyntheticEvent<TargetedEvent>) => void) | undefined;
}
