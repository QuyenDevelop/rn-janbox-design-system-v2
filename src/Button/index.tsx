import * as React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Color, StylesConstant, TextStyles } from "../Themes";
import { Images } from "../assets/Images";
import { ButtonProps, ButtonSizes, ButtonTypes } from "./types";

const Button: React.FunctionComponent<ButtonProps> = ({
  width,
  isLoading,
  isDisabled,
  name,
  contentStyles,
  containerStyle,
  children,
  ButtonLeftView,
  ButtonRightView,
  onPress,
  onBlur,
  onFocus,
  buttonStyle = ButtonTypes.PRIMARY,
  buttonSize = ButtonSizes.LARGE,
}) => {
  /** get Button Height size */
  const getSize =
    buttonSize === ButtonSizes.SMALL_SPECIAL ||
    buttonSize === ButtonSizes.SMALL ||
    width === StylesConstant.sizeSmall
      ? StylesConstant.sizeSmall
      : buttonSize === ButtonSizes.MEDIUM
      ? StylesConstant.sizeMedium
      : StylesConstant.sizeLarge;

  /** get Button background color */
  const getBackgroundColor =
    buttonStyle === ButtonTypes.SECONDARY_ONE
      ? Color.primary1s
      : buttonStyle === ButtonTypes.SECONDARY_TWO
      ? Color.red1s
      : Color.primary6s;

  /** get Button icon background color */
  const getButtonRightBGColor =
    buttonStyle === ButtonTypes.SECONDARY_ONE
      ? Color.primary6s
      : buttonStyle === ButtonTypes.SECONDARY_TWO
      ? Color.red6s
      : Color.white6;

  /** get Button icon styles */
  const getButtonRightStyle =
    buttonSize === ButtonSizes.SMALL_SPECIAL
      ? {
          ...styles.ButtonLeftStyles,
          backgroundColor: isDisabled ? Color.black5s : getButtonRightBGColor,
          borderRadius: StylesConstant.borderRadius4,
          width: StylesConstant.iconSizeSmall,
          height: StylesConstant.iconSizeSmall,
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
    buttonSize === ButtonSizes.SMALL_SPECIAL
      ? {
          ...styles.ButtonLeftStyles,
          width: StylesConstant.iconSizeSmall,
          height: StylesConstant.iconSizeSmall,
        }
      : {
          ...styles.ButtonLeftStyles,
          width: StylesConstant.iconSizeMedium,
          height: StylesConstant.iconSizeMedium,
        };

  /** get Button Content Text styles */
  const getButtonContentStyle =
    buttonSize === ButtonSizes.SMALL_SPECIAL
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
          {name && (
            <Text style={[getButtonContentStyle, contentStyles]}>{name}</Text>
          )}
          {ButtonRightView && (
            <View style={getButtonRightStyle}>{ButtonRightView}</View>
          )}
        </View>
      )}
    </TouchableOpacity>
  );
};

const IconButton: React.FunctionComponent<ButtonProps> = ({
  children,
  onPress,
  width = StylesConstant.iconSizeLarge,
}) => {
  const iconSize =
    width > StylesConstant.iconSizeLarge
      ? StylesConstant.iconSizeMedium
      : StylesConstant.iconSizeSmall;

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onPress}
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        width: width,
        height: width,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: width / 2,
        backgroundColor: Color.black3s,
        overflow: "hidden",
      }}
    >
      {children ? (
        children
      ) : (
        <View
          style={{
            ...styles.iconButton,
            width: iconSize,
            height: iconSize,
          }}
        >
          <Text style={styles.closestText}>x</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export { Button, IconButton, ButtonTypes, ButtonSizes };

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
    fontWeight: "500",
  },
  iconButton: {
    alignItems: "center",
    justifyContent: "center",
  },
  closestText: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
