import React, { FunctionComponent } from "react";
import { View } from "react-native";
import { Color, ScreenUtils } from "../Themes";

const PlaceHolder: FunctionComponent = () => {
  return (
    <View
      style={{
        width: ScreenUtils.WIDTH_SCREEN,
        height: ScreenUtils.HEIGHT_SCREEN,
        backgroundColor: Color.black5,
      }}
    />
  );
};

export default PlaceHolder;
