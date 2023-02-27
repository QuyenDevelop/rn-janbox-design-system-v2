import React, { FunctionComponent } from "react";
import {
  Image,
  ImageBackground,
  ImageSourcePropType,
  KeyboardAvoidingView,
  Text,
  View,
  ViewStyle,
} from "react-native";
import Modal from "react-native-modal";
import { Button, ButtonTypes, IconButton } from "../Button";
import { ISpacingHorizontal } from "../Components";
import { Color, ConstantStyles, ScreenUtils } from "../Themes";
import { styles } from "./styles";

export interface PopupProps {
  /** property using show/hide dialog (required) */
  isVisible: boolean;
  /** property using close dialog (required) */
  onClose: (() => void) | undefined;
  /** property is the value of title dialog (required) */
  title?: string;
  /** property is the description dialog (required) */
  message?: string;
  /** property using custom styles of content */
  containerStyle?: ViewStyle;
  /** property is the name button cancel  */
  buttonCancelName?: string;
  /** property is Event when onPress button cancel  */
  onPressCancel?: () => void;
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
  /** property custom Opacity of DIM */
  image?: ImageSourcePropType;
  /** property custom Opacity of DIM */
  imageBackground?: ImageSourcePropType;
}

export const BasePopup: FunctionComponent<PopupProps> = ({
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
  image,
  imageBackground,
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
          {imageBackground ? (
            <ImageBackground
              source={imageBackground}
              resizeMode="cover"
              style={styles.imageBackground}
            >
              <View style={styles.icCloseButton}>
                <IconButton onPress={onClose} />
              </View>
              <View style={styles.imageBackgroundAction}>
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
            </ImageBackground>
          ) : (
            <>
              <View style={styles.icCloseButton}>
                <IconButton onPress={onClose} />
              </View>
              {image && (
                <Image
                  source={image}
                  resizeMode="cover"
                  style={{
                    width: ConstantStyles.dialogWidthPrimary,
                    height: ScreenUtils.scale(166),
                  }}
                />
              )}
              <View style={styles.content}>
                <Text style={styles.title} numberOfLines={1}>
                  {title}
                </Text>
                <Text style={styles.message} numberOfLines={4}>
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
            </>
          )}
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};