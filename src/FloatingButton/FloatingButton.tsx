import React, { FunctionComponent, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  Image,
  PanResponder,
  TouchableOpacity,
} from "react-native";
import { FloatingButtonProps } from ".";
import { ScreenUtils } from "../Themes";
import { ContentModal } from "./ContentModal";
import { styles } from "./styles";

export const FloatingButton: FunctionComponent<FloatingButtonProps> = ({
  ListSupport,
  floatingImage,
}) => {
  const [isShowAction, showAction] = useState(false);
  const opacity = 0.8;
  const pan = useRef<any>(new Animated.ValueXY()).current;

  const panResponder = React.useRef(
    PanResponder.create({
      onStartShouldSetPanResponderCapture: () => false,
      onMoveShouldSetPanResponderCapture: () => false,
      onMoveShouldSetPanResponder: (_, gesture) => {
        if (
          gesture?.moveX > gesture?.moveY ||
          gesture.dx > -0.005 ||
          gesture.dx === 0 ||
          gesture.dy === 0
        ) {
          return false;
        } else {
          return true;
        }
      },
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value,
        });
        pan.setValue({
          x: ScreenUtils.scale(16),
          y: ScreenUtils.scale(16),
        });
      },
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: () => {
        pan.flattenOffset();
        Animated.spring(pan, {
          toValue: {
            x: ScreenUtils.scale(16),
            y:
              pan.y._value < -(Dimensions.get("screen").height * 2) / 3 ||
              pan.y._value > Dimensions.get("screen").height / 12
                ? ScreenUtils.scale(16)
                : pan.y._value,
          },
          useNativeDriver: false,
        }).start();
      },
      onPanResponderEnd: () => {
        return false;
      },
    })
  ).current;

  return (
    <>
      <Animated.View
        style={[
          {
            ...styles.imgSupport,
            left: ScreenUtils.WIDTH_SCREEN - ScreenUtils.scale(96),
            bottom: ScreenUtils.scale(90),
            transform: [{ translateX: pan.x }, { translateY: pan.y }],
          },
        ]}
        {...panResponder.panHandlers}
      >
        {!isShowAction && (
          <TouchableOpacity onPress={() => showAction(true)}>
            <Image
              source={floatingImage}
              resizeMode={"cover"}
              style={[styles.imgSupport, { opacity: opacity }]}
            />
          </TouchableOpacity>
        )}
      </Animated.View>
      <ContentModal
        isShowContent={isShowAction}
        onCloseContent={() => showAction(false)}
        ListSupport={ListSupport}
      />
    </>
  );
};
