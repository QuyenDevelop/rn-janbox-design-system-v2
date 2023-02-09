import * as React from "react";
import {
  Animated,
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewProps,
} from "react-native";
import { Color, StylesConstant, TextStyles } from "../Themes";

export declare type SnackBarType = "INFO" | "ERROR" | "SUCCESS";
export enum SnackBarTypes {
  INFO = "INFO",
  ERROR = "ERROR",
  SUCCESS = "SUCCESS",
}
export declare type SnackBarPositionType = "top" | "bottom";
export enum SnackBarPosition {
  TOP = "top",
  BOTTOM = "bottom",
}

export interface SnackRef {}
export interface SnackBarProperties {
  message: string;
  type?: SnackBarType;
  position?: SnackBarPositionType;
  visible?: boolean;
  duration?: number;
  snackBarIcon?: React.ReactNode;
  buttonName?: string;
  snackBarAction?: ((event: GestureResponderEvent) => void) | undefined;
}

export interface SnackBarProps extends ViewProps, SnackBarProperties {}

// export const updateSnackBarProps = (props: SnackBarProperties) => {
//   SnackBar.prototype({
//     message: props.message,
//     type: props.type,
//     position: props.position,
//     visible: props.visible,
//     duration: props.duration,
//     snackBarIcon: props.snackBarIcon,
//     buttonName: props.buttonName,
//     snackBarAction: props.snackBarAction,
//   });
// };

const styles = StyleSheet.create({
  snackBar: {
    flex: 1,
    width: "100%",
    minHeight: StylesConstant.sizeLarge,
    position: "absolute",
  },
  snackBarContent: {
    flex: 1,
    paddingHorizontal: StylesConstant.spacing16,
    paddingVertical: StylesConstant.spacing8,
    borderRadius: StylesConstant.borderRadius8,
    marginHorizontal: StylesConstant.spacing16,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  contentStyle: {
    flex: 1,
    ...TextStyles.text14,
    color: Color.white6,
  },
  iconView: {
    width: StylesConstant.iconSizeMedium,
    alignItems: "center",
    justifyContent: "center",
    marginRight: StylesConstant.spacing8,
  },
  flexRow: { flex: 1, flexDirection: "row" },
  buttonName: {
    ...TextStyles.text14,
    color: Color.white6,
    fontWeight: "500",
  },
});

export const SnackBar = React.forwardRef<SnackRef, SnackBarProps>(
  (
    {
      message,
      type = SnackBarTypes.SUCCESS,
      position = SnackBarPosition.BOTTOM,
      duration = 5000,
      snackBarIcon,
      buttonName,
      snackBarAction,
      ...props
    },
    SnackRef
  ) => {
    const animatedValue = React.useRef(new Animated.Value(0));

    const snackBarBG =
      type === SnackBarTypes.INFO
        ? Color.black6s
        : type === SnackBarTypes.ERROR
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
      }, duration);
    }, [duration, message]);

    return (
      <Animated.View
        style={[
          styles.snackBar,
          {
            [position]: animatedValue.current.interpolate({
              inputRange: [0, 1],
              outputRange: [-300, 50],
            }),
          },
        ]}
        ref={SnackRef}
        {...props}
      >
        <TouchableOpacity
          style={{ ...styles.snackBarContent, backgroundColor: snackBarBG }}
          onPress={snackBarAction || undefined}
        >
          <View style={styles.flexRow}>
            {snackBarIcon && (
              <View style={styles.iconView}>{snackBarIcon}</View>
            )}
            <Text style={styles.contentStyle} numberOfLines={3}>
              {message}
            </Text>
          </View>
          {buttonName && (
            <View
              style={{
                marginLeft: StylesConstant.spacing16,
              }}
            >
              <TouchableOpacity
                style={{
                  paddingLeft: StylesConstant.spacing16,
                  borderLeftWidth: 2 * StyleSheet.hairlineWidth,
                  borderLeftColor: Color.white6,
                }}
                onPress={snackBarAction}
              >
                <Text style={styles.buttonName}>{buttonName}</Text>
              </TouchableOpacity>
            </View>
          )}
        </TouchableOpacity>
      </Animated.View>
    );
  }
);
