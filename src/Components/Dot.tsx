import React, { FunctionComponent } from "react";
import { View } from "react-native";
import { Color, StylesConstant } from "../Themes";
import type { DotProps } from "./types";

const Dot: FunctionComponent<DotProps> = ({
  size = StylesConstant.iconSizeSmallSmall,
  color = Color.red6s,
}) => {
  const cornerRadius = size / 2;
  return (
    <View
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        borderRadius: cornerRadius,
      }}
    />
  );
};

export default Dot;
