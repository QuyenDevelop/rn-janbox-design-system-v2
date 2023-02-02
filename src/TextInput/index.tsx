import React, { FunctionComponent, useEffect, useRef } from "react";
import { TextInput as Input, Text, View } from "react-native";
import { IconButton } from "../Button";
import { Color, ScreenUtils, StylesConstant } from "../Themes";
import { InputProps, styles } from "./types";

export const TextInput: FunctionComponent<InputProps> = ({
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
  numberOfLines = 1,
  ...props
}) => {
  const inputRef = useRef<Input>(null);
  const getInputStyle = errorMessage
    ? styles.inputErrorContainer
    : styles.inputDefaultContainer;

  useEffect(() => {
    inputRef?.current?.setNativeProps({
      style: {
        // fontFamily: FontFamily.medium,
        height: height || ScreenUtils.scale(40),
      },
    });
  }, [height]);

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
        {/* {textLeftComponent && !choosenCountry ? textLeftComponent : null}
        {choosenCountry && (
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
          onChangeText={onChangeText}
          value={value}
          keyboardType={keyboardType || "default"}
          secureTextEntry={secureTextEntry}
          placeholderTextColor={Color.black4s}
          style={{ ...styles.input }}
          numberOfLines={numberOfLines}
          multiline={numberOfLines > 1 ? true : false}
          textAlignVertical="center"
          {...props}
        />
        {value && editable && (
          <IconButton
            width={StylesConstant.iconSizeSmall}
            onPress={onClearInput}
          />
        )}
        {textRightComponent}
      </View>
      {errorMessage ? (
        editable && (
          <Text style={styles.errorMessage} numberOfLines={2}>
            {errorMessage}
          </Text>
        )
      ) : noteMessage ? (
        <Text style={styles.noteMessage} numberOfLines={2}>
          {noteMessage}
        </Text>
      ) : null}
    </View>
  );
};
