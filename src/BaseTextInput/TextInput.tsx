import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import {
  TextInput as Input,
  StyleProp,
  Text,
  TextInputProps,
  View,
  ViewStyle,
} from "react-native";
import { IconButtonClear } from "../Button";
import { Color, ConstantStyles, ScreenUtils } from "../Themes";
import { styles } from "./styles";

export declare interface ITextInputProps extends TextInputProps {
  label?: string;
  noteMessage?: string;
  errorMessage?: string;
  height?: number;
  containerStyle?: StyleProp<ViewStyle>;
  onClearInput: () => void;
  inputStyle?: StyleProp<ViewStyle>;
  isRequired?: boolean;
  isFocus?: boolean;
  textRightComponent?: React.ReactNode;
  textLeftComponent?: React.ReactNode;
}

export const BaseTextInput: FunctionComponent<ITextInputProps> = ({
  label,
  noteMessage,
  errorMessage,
  value,
  height,
  onChangeText,
  onClearInput,
  containerStyle,
  keyboardType,
  secureTextEntry,
  inputStyle,
  isRequired,
  textRightComponent,
  textLeftComponent,
  editable = true,
  isFocus,
  ...props
}) => {
  const [focus, setFocus] = useState<boolean>(false);

  const inputRef = useRef<Input>(null);
  const getInputStyle = errorMessage
    ? styles.inputErrorContainer
    : focus
    ? styles.inputFocusContainer
    : styles.inputDefaultContainer;

  useEffect(() => {
    if (isFocus) {
      inputRef.current?.focus;
      setFocus(editable ? isFocus : false);
    }
  }, [isFocus, editable]);

  const handleFocus = () => {
    props?.onFocus;
    setFocus(true);
  };
  const handleBlur = () => {
    props?.onBlur;
    setFocus(false);
  };

  return (
    <View style={[styles.container, containerStyle]}>
      {label && (
        <Text style={styles.label}>
          {label}
          <Text style={styles.required}>{isRequired ? " *" : ""}</Text>
        </Text>
      )}
      <View
        style={
          editable ? [getInputStyle, inputStyle] : styles.inputDisableContainer
        }
      >
        {/* {textLeftComponent && !chooseCountry ? textLeftComponent : null}
        {chooseCountry && (
          <View
            style={{
              marginTop: errorMessage
                ? ScreenUtils.scale(-2)
                : ScreenUtils.scale(-10),
            }}
          >
            <CountryPicker
              countryCode={countryCode!}
              theme={{
                fontSize: 16,
                ...Themes.font.regular,
              }}
              withFilter
              withFlagButton
              withCountryNameButton={false}
              withCallingCodeButton
              withEmoji
              onSelect={onSelectCountry}
              translation="common"
              containerButtonStyle={{
                paddingTop: ScreenUtils.scale(9),
              }}
            />
          </View>
        )} */}
        {textLeftComponent}
        <Input
          ref={inputRef}
          allowFontScaling={false}
          editable={editable}
          autoFocus={focus}
          onChangeText={onChangeText}
          value={value}
          keyboardType={keyboardType || "default"}
          secureTextEntry={secureTextEntry}
          placeholderTextColor={Color.black4s}
          style={{ ...styles.input, height: height || ScreenUtils.scale(40) }}
          onFocus={handleFocus}
          onBlur={handleBlur}
          multiline={false}
          {...props}
        />
        {value && editable && <IconButtonClear onPress={onClearInput} />}
        {textRightComponent}
      </View>
      {errorMessage ? (
        editable && (
          <View
            style={{
              marginTop: ConstantStyles.spacing4,
            }}
          >
            <Text style={styles.errorMessage} numberOfLines={2}>
              {errorMessage}
            </Text>
          </View>
        )
      ) : noteMessage ? (
        <View
          style={{
            marginTop: ConstantStyles.spacing4,
          }}
        >
          <Text style={styles.noteMessage} numberOfLines={2}>
            {noteMessage}
          </Text>
        </View>
      ) : null}
    </View>
  );
};