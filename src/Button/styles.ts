import { StyleSheet } from "react-native";
import { Color, StylesConstant } from "../Themes";

export const styles = StyleSheet.create({
  disableStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    borderRadius: StylesConstant.borderRadius8,
    backgroundColor: Color.black3s,
  },
  enableStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    borderRadius: StylesConstant.borderRadius8,
  },
  contentStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    marginHorizontal: StylesConstant.spacing16,
  },
  ButtonLeftStyles: {
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: StylesConstant.spacing8,
  },
  textStyle: {
    textAlign: "center",
    fontWeight: "500",
  },
  iconButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.black3s,
  },
  closestText: {
    fontSize: 14,
    fontWeight: "bold",
    color: Color.white6,
  },
});
