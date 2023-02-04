import React, { FunctionComponent } from "react";
import { View, StyleSheet } from "react-native";
import { Color, StylesConstant } from "../Themes";
import type { DotProps } from "./types";

export const SpacingVertical: FunctionComponent<DotProps> = ({
  size = StylesConstant.spacing4,
  color = Color.black3s,
}) => {
  return (
    <View
      style={{
        ...styles.horizontalSpacing,
        height: size,
        backgroundColor: color,
      }}
    />
  );
};

export const SpacingHorizontal: FunctionComponent<DotProps> = ({
  size = StylesConstant.spacing4,
  color,
}) => {
  return (
    <View
      style={{
        ...styles.horizontalSpacing,
        width: size,
        backgroundColor: color,
      }}
    />
  );
};

const styles = StyleSheet.create({
  verticalSpacing: {
    height: "100%",
  },
  horizontalSpacing: {
    width: "100%",
  },
});
