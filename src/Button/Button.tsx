import * as React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Color, StylesConstant, TextStyles } from "../Themes";
import { Images } from "../assets/Images";
import type { ButtonProps } from "./types";

export const Button: React.FunctionComponent<ButtonProps> = ({
  width,
  isLoading,
  isDisabled,
  content,
  contentStyles,
  containerStyle,
  children,
  ButtonLeftView,
  ButtonRightView,
  onPress,
  onBlur,
  onFocus,
  buttonStyle = "primary",
  buttonSize = "large",
}) => {
  /** get Button Height size */
  const getSize =
    buttonSize === "smallSpecial" ||
    buttonSize === "small" ||
    width === StylesConstant.sizeSmall
      ? StylesConstant.sizeSmall
      : buttonSize === "medium"
      ? StylesConstant.sizeMedium
      : StylesConstant.sizeLarge;

  /** get Button background color */
  const getBackgroundColor =
    buttonStyle === "secondaryOne"
      ? Color.primary1s
      : buttonStyle === "secondaryTwo"
      ? Color.red1s
      : Color.primary6s;

  /** get Button icon background color */
  const getButtonRightBGColor =
    buttonStyle === "secondaryOne"
      ? Color.primary6s
      : buttonStyle === "secondaryTwo"
      ? Color.red6s
      : Color.white6;

  /** get Button icon styles */
  const getButtonRightStyle =
    buttonSize === "smallSpecial"
      ? {
          ...styles.ButtonLeftStyles,
          backgroundColor: isDisabled ? Color.black5s : getButtonRightBGColor,
          borderRadius: StylesConstant.borderRadius4,
          width: StylesConstant.iconSizeSpecial,
          height: StylesConstant.iconSizeSpecial,
        }
      : {
          ...styles.ButtonLeftStyles,
          backgroundColor: isDisabled ? Color.black5s : getButtonRightBGColor,
          borderRadius: StylesConstant.borderRadius8,
          width: StylesConstant.iconSizeMedium,
          height: StylesConstant.iconSizeMedium,
        };

  /** get Button Loading styles */
  const getButtonLoadingStyle =
    buttonSize === "smallSpecial"
      ? {
          ...styles.ButtonLeftStyles,
          width: StylesConstant.iconSizeSpecial,
          height: StylesConstant.iconSizeSpecial,
        }
      : {
          ...styles.ButtonLeftStyles,
          width: StylesConstant.iconSizeMedium,
          height: StylesConstant.iconSizeMedium,
        };

  /** get Button Content Text styles */
  const getButtonContentStyle =
    buttonSize === "smallSpecial"
      ? {
          ...styles.textStyle,
          ...TextStyles.text14,
          color: isDisabled ? Color.black5s : getButtonRightBGColor,
        }
      : {
          ...styles.textStyle,
          ...TextStyles.text16,
          color: isDisabled ? Color.black5s : getButtonRightBGColor,
        };

  return (
    <TouchableOpacity
      style={
        isDisabled
          ? {
              ...styles.disableStyle,
              maxHeight: getSize,
              height: getSize,
              minHeight: getSize,
              minWidth: getSize,
              width: width,
              maxWidth: width,
            }
          : {
              ...styles.enableStyle,
              maxHeight: getSize,
              height: getSize,
              minHeight: getSize,
              backgroundColor: getBackgroundColor,
              minWidth: getSize,
              width: width,
              maxWidth: width,
            }
      }
      activeOpacity={1}
      onPress={onPress}
      disabled={isDisabled}
      onBlur={onBlur}
      onFocus={onFocus}
    >
      {children ? (
        children
      ) : (
        <View style={[styles.contentStyle, containerStyle]}>
          {ButtonLeftView && !isLoading && (
            <View style={getButtonRightStyle}>{ButtonLeftView}</View>
          )}
          {isLoading && (
            <Image
              source={Images.loading}
              style={getButtonLoadingStyle}
              resizeMode="cover"
            />
          )}
          {content && (
            <Text style={[getButtonContentStyle, contentStyles]}>
              {content}
            </Text>
          )}
          {ButtonRightView && (
            <View style={getButtonRightStyle}>{ButtonRightView}</View>
          )}
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  disableStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    paddingHorizontal: StylesConstant.spacing8,
    borderRadius: StylesConstant.borderRadius8,
    backgroundColor: Color.black3s,
  },
  enableStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    paddingHorizontal: StylesConstant.spacing8,
    borderRadius: StylesConstant.borderRadius8,
  },
  contentStyle: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  ButtonLeftStyles: {
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: StylesConstant.spacing8,
  },
  textStyle: {
    textAlign: "center",
  },
});
