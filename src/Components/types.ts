import type { GestureResponderEvent, ImageSourcePropType } from "react-native";

export interface EmptyStateProps {
  backgroundColor?: string;
  imgSource?: ImageSourcePropType;
  title?: string;
  message: string;
  buttonTitle?: string;
  buttonHandler?: ((event: GestureResponderEvent) => void) | undefined;
}
