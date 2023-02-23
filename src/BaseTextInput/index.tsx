import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import { TextInput as Input, Text, View } from "react-native";
import { IconButtonClear } from "../Button";
import { Color, ScreenUtils, ConstantStyles } from "../Themes";
import { InputProps, TextareaProps, styles } from "./types";

export const BaseTextInput: FunctionComponent<InputProps> = ({
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

export const Textarea: FunctionComponent<TextareaProps> = ({
  label,
  containerStyle,
  editable = true,
  errorMessage,
  noteMessage,
  value,
  height,
  onChangeText,
  isFocus,
  limited = 24,
  ...props
}) => {
  const inputRef = useRef<Input>(null);
  const [focus, setFocus] = useState<boolean>(false);
  const counter = value ? `${value.length}/${limited}` : `0/${limited}`;

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

  const getInputStyle = errorMessage
    ? styles.inputErrorContainer
    : focus
    ? styles.inputFocusContainer
    : styles.inputDefaultContainer;

  return (
    <View style={[styles.container, containerStyle]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={editable ? getInputStyle : styles.inputDisableContainer}>
        <Input
          ref={inputRef}
          autoFocus={focus}
          allowFontScaling={true}
          editable={editable}
          onChangeText={onChangeText}
          value={value}
          placeholderTextColor={Color.black4s}
          style={{ ...styles.input, height: height || ScreenUtils.scale(56) }}
          onFocus={handleFocus}
          maxLength={limited}
          onBlur={handleBlur}
          multiline
          {...props}
        />
      </View>
      <View style={styles.noteView}>
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            flex: 0.9,
          }}
        >
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
        <Text style={styles.counter}>{counter}</Text>
      </View>
    </View>
  );
};
