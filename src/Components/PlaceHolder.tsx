import React, { FunctionComponent } from "react";
import { Image, StyleSheet, View } from "react-native";
import { Color, StylesConstant } from "../Themes";
import { Images } from "../assets";
import type { PlaceHolderProps } from "./types";

const PlaceHolder: FunctionComponent<PlaceHolderProps> = ({
  backgroundColor,
  renderIcon,
  holderSize,
}) => {
  const getImageSize =
    holderSize > StylesConstant.sizeLarge
      ? StylesConstant.iconSizeLarge
      : StylesConstant.iconSizeSpecial;

  return (
    <View
      style={{
        ...styles.imageContainer,
        width: holderSize,
        height: holderSize,
        backgroundColor: backgroundColor || Color.black1s,
      }}
    >
      {renderIcon ? (
        renderIcon
      ) : (
        <Image
          source={Images.icHolder}
          style={{
            width: getImageSize,
            height: getImageSize,
          }}
          resizeMode="cover"
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PlaceHolder;
