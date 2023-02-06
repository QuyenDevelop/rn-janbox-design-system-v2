import React, { FunctionComponent } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";
import { Color, StylesConstant } from "../Themes";

export declare type SnackBarStyle = "info" | "error" | "success";
export declare type SnackBarPosition = "top" | "bottom";

export interface SnackBarProps {
  message: string;
  type?: SnackBarStyle;
  position?: SnackBarPosition;
  visible?: boolean;
  duration?: number;
}

export const SnackBar: FunctionComponent<SnackBarProps> = ({
  message,
  type = "info",
  position = "bottom",
  duration,
}) => {
  const animatedValue = React.useRef(new Animated.Value(0));
  const snackBarBG =
    type === "info"
      ? Color.black6s
      : type === "error"
      ? Color.red6s
      : Color.green6s;

  const showSnackBar = () => {
    Animated.timing(animatedValue.current, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const hideSnackBar = () => {
    Animated.timing(animatedValue.current, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  React.useEffect(() => {
    showSnackBar();
    setInterval(() => {
      hideSnackBar();
    }, duration || 5000);
  }, [duration, message]);

  return (
    <Animated.View
      style={[
        styles.snackBar,
        {
          [position]: animatedValue.current.interpolate({
            inputRange: [0, 1],
            outputRange: [-100, 50],
          }),
        },
      ]}
    >
      <View style={{ ...styles.snackBarContent, backgroundColor: snackBarBG }}>
        <Text>{message}</Text>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  snackBar: {
    width: "100%",
    minHeight: StylesConstant.sizeLarge,
    position: "absolute",
  },
  snackBarContent: {
    flex: 1,
    paddingHorizontal: StylesConstant.spacing16,
    borderRadius: StylesConstant.borderRadius8,
    marginHorizontal: StylesConstant.spacing16,
    justifyContent: "center",
  },
});
