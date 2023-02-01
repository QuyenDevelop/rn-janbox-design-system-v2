import type { GestureResponderEvent, ImageSourcePropType } from "react-native";

export declare interface EmptyStateProps {
  backgroundColor?: string;
  imgSource?: ImageSourcePropType;
  title?: string;
  message: string;
  buttonTitle?: string;
  buttonHandler?: ((event: GestureResponderEvent) => void) | undefined;
}

export declare interface PlaceHolderProps {
  holderSize: number;
  renderIcon?: React.ReactNode | JSX.Element | null | undefined;
  backgroundColor?: string;
}
