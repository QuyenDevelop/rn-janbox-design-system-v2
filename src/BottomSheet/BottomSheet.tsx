import React, { forwardRef, ForwardRefRenderFunction, useRef } from "react";
import {
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
  } = props;
  const scrollRef = useRef<ScrollView>(null);
  const MAX_HEIGHT =
    ScreenUtils.HEIGHT_SCREEN -
    ScreenUtils.getStatusBarHeight() -
    ScreenUtils.scale(24);

  return (
    <Modal
      useNativeDriver
      useNativeDriverForBackdrop
      statusBarTranslucent
      propagateSwipe={true}
      hardwareAccelerated={false}
      onBackdropPress={onCloseModal}
      onBackButtonPress={onCloseModal}
      onSwipeComplete={onCloseModal}
      onModalHide={onCloseModal}
      swipeDirection="down"
      style={styles.modalContainer}
      isVisible={isVisible}
      hideModalContentWhileAnimating={true}
      backdropTransitionOutTiming={0}
    >
      <KeyboardAvoidingView behavior="position" enabled>
        <View style={{ maxHeight: MAX_HEIGHT }}>
          <View style={[styles.contentContainer, containerStyle]}>
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
                      <Text style={TextStyles.text18}>X</Text>
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
    borderBottomWidth: 1 * StyleSheet.hairlineWidth,
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
});

export const BaseBottomSheet = forwardRef(BaseBottomSheetRef);
