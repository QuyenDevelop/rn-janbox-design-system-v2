import React, { FunctionComponent } from "react";
import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import Modal from "react-native-modal";
import { Button, ButtonTypes } from "../Button";
import { Color, ShadowStyles, ConstantStyles, TextStyles } from "../Themes";
import type { DialogProps } from "./types";
import { ISpacingHorizontal } from "../Components";

export const BaseDialog: FunctionComponent<DialogProps> = ({
  isVisible,
  onClose,
  containerStyle,
  // children,
  title,
  message,
  disableBackdrop = false,
  disableSwipeComplete = false,
  backdropOpacity,
  buttonCancelName,
  onPressCancel,
  buttonAcceptName,
  onPressAccept,
}) => {
  return (
    <Modal
      useNativeDriver
      useNativeDriverForBackdrop
      statusBarTranslucent
      propagateSwipe={true}
      hardwareAccelerated={false}
      onBackdropPress={disableBackdrop ? undefined : onClose}
      onBackButtonPress={onClose}
      onSwipeComplete={disableSwipeComplete ? undefined : onClose}
      backdropColor={Color.black5}
      onModalHide={onClose}
      style={styles.modalContainer}
      isVisible={isVisible}
      animationOut={"fadeOut"}
      animationIn={"fadeIn"}
      backdropOpacity={backdropOpacity || 0.5}
      hideModalContentWhileAnimating={true}
    >
      <KeyboardAvoidingView behavior="position" enabled>
        <View style={[styles.contentContainer, containerStyle]}>
          <Text style={styles.title} numberOfLines={2}>
            {title}
          </Text>
          <Text style={styles.message} numberOfLines={2}>
            {message}
          </Text>
          <View style={styles.buttonBox}>
            {buttonCancelName && (
              <Button
                buttonStyle={ButtonTypes.SECONDARY_ONE}
                name={buttonCancelName}
                onPress={onPressCancel || onClose}
              />
            )}
            {buttonCancelName && (
              <ISpacingHorizontal size={ConstantStyles.spacing8} />
            )}
            {buttonAcceptName && onPressAccept && (
              <Button
                buttonStyle={ButtonTypes.PRIMARY}
                name={buttonAcceptName}
                onPress={onPressAccept}
              />
            )}
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
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    ...ShadowStyles.secondary,
    backgroundColor: Color.white6,
    padding: ConstantStyles.spacing24,
    borderRadius: ConstantStyles.borderRadius8,
    width: ConstantStyles.dialogWidthPrimary,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    ...TextStyles.text16,
    color: Color.black6s,
  },
  message: {
    textAlign: "center",
    ...TextStyles.text14,
    color: Color.black5s,
    marginTop: ConstantStyles.spacing8,
  },
  buttonBox: {
    flexDirection: "row",
    marginTop: ConstantStyles.spacing24,
  },
});
