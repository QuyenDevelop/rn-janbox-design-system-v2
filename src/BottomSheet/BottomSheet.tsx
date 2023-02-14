import React, { forwardRef, ForwardRefRenderFunction, useRef } from "react";
import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Modal from "react-native-modal";
import { Color, ScreenUtils, StylesConstant, TextStyles } from "../Themes";
import type { BottomSheetProps, BottomSheetRef } from "./types";
import { Images } from "../assets";

export const BaseBottomSheetRef: ForwardRefRenderFunction<
  BottomSheetRef,
  BottomSheetProps
> = (props, _ref) => {
  const {
    isVisible,
    onCloseModal,
    containerStyle,
    children,
    headerLeftView,
    headerLeftOnPress,
    headerTitle,
    headerRightView,
    headerRightOnPress,
    disableBackdrop = false,
    disableSwipeComplete = false,
    backdropOpacity,
    height,
  } = props;
  const scrollRef = useRef<ScrollView>(null);
  const MAX_HEIGHT =
    height ||
    ScreenUtils.HEIGHT_SCREEN -
      ScreenUtils.getStatusBarHeight() -
      ScreenUtils.scale(24);
  const containerViewStyle = [
    { ...styles.contentContainer, height: height },
    containerStyle,
  ];
  return (
    <Modal
      useNativeDriver
      useNativeDriverForBackdrop
      statusBarTranslucent
      propagateSwipe={true}
      hardwareAccelerated={false}
      onBackdropPress={disableBackdrop ? undefined : onCloseModal}
      onBackButtonPress={onCloseModal}
      onSwipeComplete={disableSwipeComplete ? undefined : onCloseModal}
      backdropColor={Color.black5}
      onModalHide={onCloseModal}
      swipeDirection="down"
      style={styles.modalContainer}
      isVisible={isVisible}
      backdropOpacity={backdropOpacity || 0.5}
      hideModalContentWhileAnimating={true}
      backdropTransitionOutTiming={0}
    >
      <KeyboardAvoidingView behavior="position" enabled>
        <View style={{ maxHeight: MAX_HEIGHT, height: height }}>
          <View style={containerViewStyle}>
            <View style={styles.headerView}>
              <View>
                <TouchableOpacity
                  style={{
                    ...styles.headerChildStyle,
                    width: StylesConstant.sizeLarge,
                  }}
                  onPress={headerLeftOnPress || onCloseModal}
                >
                  {headerLeftView ? (
                    headerLeftView
                  ) : (
                    <View style={styles.view24}>
                      <Image
                        source={Images.icClose}
                        style={styles.iconCloseStyle}
                        resizeMode="center"
                      />
                    </View>
                  )}
                </TouchableOpacity>
              </View>
              <Text style={styles.headerTitle}>{headerTitle}</Text>
              <TouchableOpacity
                style={{
                  ...styles.headerChildStyle,
                  width: StylesConstant.sizeLarge,
                }}
                onPress={headerRightOnPress}
              >
                {headerRightView ? (
                  headerRightView
                ) : (
                  <View style={styles.view24} />
                )}
              </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} ref={scrollRef}>
              {children}
            </ScrollView>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    margin: 0,
    justifyContent: "flex-end",
  },
  contentContainer: {
    borderTopLeftRadius: StylesConstant.borderRadius16,
    borderTopRightRadius: StylesConstant.borderRadius16,
    backgroundColor: Color.white6,
    paddingBottom: StylesConstant.spacing16,
  },
  headerView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: StylesConstant.spacing4,
    paddingHorizontal: StylesConstant.spacing8,
    borderBottomWidth: 2 * StyleSheet.hairlineWidth,
    borderBottomColor: Color.black1s,
  },
  headerTitle: {
    flex: 1,
    textAlign: "center",
    ...TextStyles.text16,
    fontWeight: "500",
    color: Color.black6s,
  },
  headerChildStyle: {
    height: StylesConstant.sizeLarge,
    alignItems: "center",
    justifyContent: "center",
  },
  view24: {
    width: StylesConstant.iconSizeMedium,
    height: StylesConstant.iconSizeMedium,
    alignItems: "center",
    justifyContent: "center",
  },
  iconCloseStyle: {
    width: StylesConstant.iconSizeMedium,
    height: StylesConstant.iconSizeMedium,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
});

export const BaseBottomSheet = forwardRef(BaseBottomSheetRef);
