import type React from "react";
import type {
  GestureResponderEvent,
  NativeSyntheticEvent,
  TargetedEvent,
  TextStyle,
  ViewStyle,
} from "react-native";

export declare type ButtonStyle = "primary" | "secondaryOne" | "secondaryTwo";
export declare const buttonStyle: {
  readonly primary: "primary";
  readonly secondaryOne: "secondaryOne";
  readonly secondaryTwo: "secondaryTwo";
};
export declare type ButtonSize = "small" | "smallSpecial" | "medium" | "large";
export declare const buttonSize: {
  readonly small: "small";
  readonly smallSpecial: "smallSpecial";
  readonly medium: "medium";
  readonly large: "large";
};

export interface ButtonProps {
  buttonStyle?: ButtonStyle;
  buttonSize?: ButtonSize;
  width?: number;
  isLoading?: boolean;
  isDisabled?: boolean;
  content?: string;
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
