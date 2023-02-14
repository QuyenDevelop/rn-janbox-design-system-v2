import { ImageSourcePropType } from "react-native";
import { FloatingButton } from "./FloatingButton";

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

export { FloatingButton };
