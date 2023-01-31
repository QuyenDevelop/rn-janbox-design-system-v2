import * as React from "react";
import type { ButtonProps } from "./types";
import { TouchableOpacity, Text, View, Image } from "react-native";
import { StyleSheet } from "react-native";
import { Color, StylesConstant, TextStyles } from "../Themes";
import { Images } from "../assets/Images";

export const Button: React.FunctionComponent<ButtonProps> = ({
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
    buttonSize === "smallSpecial" || buttonSize === "small"
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
          borderRadius: StylesConstant.borderRadiusPrimary,
          width: StylesConstant.iconSizeSpecial,
          height: StylesConstant.iconSizeSpecial,
        }
      : {
          ...styles.ButtonLeftStyles,
          backgroundColor: isDisabled ? Color.black5s : getButtonRightBGColor,
          borderRadius: StylesConstant.borderRadiusPrimary,
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
            }
          : {
              ...styles.enableStyle,
              maxHeight: getSize,
              backgroundColor: getBackgroundColor,
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
    paddingHorizontal: StylesConstant.spacingPrimary,
    borderRadius: StylesConstant.borderRadiusPrimary,
    backgroundColor: Color.black3s,
  },
  enableStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    paddingHorizontal: StylesConstant.spacingPrimary,
    borderRadius: StylesConstant.borderRadiusPrimary,
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
    marginHorizontal: StylesConstant.spacingPrimary,
  },
  textStyle: {
    textAlign: "center",
  },
});
