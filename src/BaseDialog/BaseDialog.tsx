import React, { FunctionComponent } from "react";
import type { ViewStyle } from "react-native";
import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import Modal from "react-native-modal";
import { Button, ButtonTypes } from "../Button";
import { ISpacingHorizontal } from "../Components";
import { Color, ConstantStyles, ShadowStyles, TextStyles } from "../Themes";

/*
  Why use bottom sheet:
  Grab user attention
  Simplify UI and save screen real estate
  Allow user easily access different subtask or view more
*/

export interface DialogProps {
  /** property using show/hide dialog (required) */
  isVisible: boolean;
  /** property using close dialog (required) */
  onClose: (() => void) | undefined;
  /** property is the value of title dialog (required) */
  title: string;
  /** property is the description dialog (required) */
  message: string;
  /** property using custom styles of content */
  containerStyle?: ViewStyle;
  /** property using show/hide button cancel  */
  isHideCancelButton?: boolean;
  /** property is the name button cancel  */
  buttonCancelName?: string;
  /** property is Event when onPress button cancel  */
  onPressCancel?: () => void;
  /** property using show/hide button accept  */
  isHideAcceptButton?: boolean;
  /** property is the name of button accept  */
  buttonAcceptName?: string;
  /** property is Event when onPress button accept  */
  onPressAccept?: () => void;
  /** property using hide Dialog when onPress outside Dialog */
  disableBackdrop?: boolean;
  /** property using hide Dialog when Scroll Down Dialog */
  disableSwipeComplete?: boolean;
  /** property custom Opacity of DIM */
  backdropOpacity?: number;
}

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