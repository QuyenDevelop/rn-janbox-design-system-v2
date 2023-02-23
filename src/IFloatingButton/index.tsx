import type { ImageSourcePropType } from "react-native";
import { IFloatingButton } from "./FloatingButton";

export interface Support {
  key: number;
  title: string;
  image: string;
  onPress: () => void;
}

export interface FloatingButtonProps {
  ListSupport: Array<Support>;
  floatingImage: ImageSourcePropType;
}

export { IFloatingButton };
