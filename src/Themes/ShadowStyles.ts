import { StyleSheet } from "react-native";
import Color from "./Color";

const ShadowStyles = StyleSheet.create({
  primary: {
    shadowColor: Color.shadowColor1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 6,
    // shadowRadius: 4.65,
  },
  secondary: {
    shadowColor: Color.shadowColor1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 8,
    // shadowRadius: 4.65,
  },
  revert: {
    shadowColor: Color.shadowColor1,
    shadowOffset: {
      width: 0,
      height: -4,
    },
    elevation: 8,
    // shadowRadius: 4.65,
  },
});

export default ShadowStyles;
