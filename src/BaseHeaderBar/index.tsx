import React, { FunctionComponent } from "react";
import {
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { Color, ScreenUtils, ConstantStyles, TextStyles } from "../Themes";
import { Images } from "../assets";

/** Thanh điều hướng ở trên cùng của app để điều hướng người dùng và có các nút điều khiển */

export type HeaderType = "LIGHT" | "DARK";
export enum HeaderTypes {
  LIGHT = "LIGHT",
  DARK = "DARK",
}

export interface HeaderBarProps {
  /** Property is Header types (value: "LIGHT" | "DARK") */
  headerType?: HeaderType;
  /** Property is used customize style of header container */
  containerStyle?: ViewStyle;
  /** Property is used setup background color of Header */
  headerColor?: string;
  /** Property is used render icon Left and action Left */
  renderIconLeft?: React.ReactNode;
  /** Property is Event when click icon Left */
  onPressGoBack?: () => void;
  /** Property is used render list icons right | action right (maximum 2 icon) */
  renderIconRight?: React.ReactNode;
  /** property is header title show */
  title: string;
  /** Property is used customize style of header title */
  headerTextStyle?: TextStyle;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: ScreenUtils.getStatusBarHeight(),
    borderBottomWidth: 2 * StyleSheet.hairlineWidth,
    borderBottomColor: Color.black1s,
  },
  contentContainer: {
    flex: 1,
    width: "100%",
    height: ConstantStyles.headerHeight,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: ConstantStyles.spacing8,
  },
  iconLeft: {
    minWidth: ScreenUtils.scale(40),
    maxWidth: ScreenUtils.scale(84),
    alignItems: "center",
    justifyContent: "center",
  },
  iconBackPress: {
    width: ScreenUtils.scale(40),
    height: ScreenUtils.scale(40),
    alignItems: "center",
    justifyContent: "center",
  },
  headerTextStyle: {
    flex: 1,
    textAlign: "center",
    marginLeft: ConstantStyles.spacing4,
    ...TextStyles.text16,
    fontWeight: "500",
  },
});

export const BaseHeaderBar: FunctionComponent<HeaderBarProps> = ({
  headerType = HeaderTypes.DARK,
  containerStyle,
  headerColor,
  renderIconLeft,
  renderIconRight,
  title,
  headerTextStyle,
  onPressGoBack,
}) => {
  React.useEffect(() => {
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("transparent");
      StatusBar.setTranslucent(true);
    }
    StatusBar.setBarStyle(
      headerType === HeaderTypes.DARK ? "dark-content" : "light-content"
    );
  }, [headerType]);

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: headerColor,
      }}
    >
      <View style={[styles.contentContainer, containerStyle]}>
        <View
          style={{ ...styles.iconLeft, marginLeft: ConstantStyles.spacing4 }}
        >
          <TouchableOpacity
            style={styles.iconBackPress}
            onPress={onPressGoBack}
          >
            {renderIconLeft ? (
              renderIconLeft
            ) : (
              <Image
                source={
                  headerType === HeaderTypes.DARK
                    ? Images.icBack
                    : Images.icBackWhite
                }
              />
            )}
          </TouchableOpacity>
        </View>
        <Text
          style={[
            {
              ...styles.headerTextStyle,
              color:
                headerType === HeaderTypes.DARK ? Color.black6s : Color.white6,
            },
            headerTextStyle,
          ]}
          numberOfLines={1}
        >
          {title}
        </Text>
        <View style={styles.iconLeft}>{renderIconRight}</View>
      </View>
    </View>
  );
};
