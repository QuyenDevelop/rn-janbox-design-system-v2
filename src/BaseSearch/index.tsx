import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import {
  Image,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from "react-native";
import { IconButtonClear, IconColor } from "../Button";
import { Color, ScreenUtils, StylesConstant, TextStyles } from "../Themes";
import { Images } from "../assets";

export interface SearchProps extends TextInputProps {
  placeHolder?: string;
  editable?: boolean;
  isFocus?: boolean;
  onClearInput?: () => void;
  containerStyle?: ViewStyle;
  clearTextIcon?: React.ReactNode;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  inputDefaultContainer: {
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    borderRadius: StylesConstant.borderRadius8,
    borderWidth: 2 * StyleSheet.hairlineWidth,
    borderColor: Color.black2s,
    paddingHorizontal: StylesConstant.spacing12,
  },
  inputFocusContainer: {
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    borderRadius: StylesConstant.borderRadius8,
    borderWidth: 2 * StyleSheet.hairlineWidth,
    borderColor: Color.blue6s,
    paddingHorizontal: StylesConstant.spacing12,
  },
  input: {
    flex: 1,
    ...TextStyles.text14,
    fontWeight: "400",
    color: Color.black6s,
    height: ScreenUtils.scale(36),
    textAlignVertical: "center",
  },
  iconClearView: {
    width: StylesConstant.iconSizeMedium,
    height: StylesConstant.iconSizeMedium,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: StylesConstant.spacing8,
  },
});

export const BaseSearch: FunctionComponent<SearchProps> = ({
  placeHolder,
  isFocus,
  editable,
  onClearInput,
  containerStyle,
  clearTextIcon,
  ...props
}) => {
  const [focus, setFocus] = useState<boolean>(false);
  const inputRef = useRef<TextInput>(null);

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

  const getInputStyle = focus
    ? styles.inputFocusContainer
    : styles.inputDefaultContainer;

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={getInputStyle}>
        <Image
          source={Images.icSearch}
          style={{
            width: StylesConstant.iconSizeMedium,
            height: StylesConstant.iconSizeMedium,
            marginRight: StylesConstant.spacing8,
          }}
          resizeMode="cover"
        />
        <TextInput
          ref={inputRef}
          allowFontScaling={false}
          autoFocus={focus}
          onChangeText={props.onChangeText}
          value={props.value}
          placeholder={placeHolder}
          keyboardType={props.keyboardType || "default"}
          secureTextEntry={props.secureTextEntry}
          placeholderTextColor={Color.black4s}
          style={{ ...styles.input }}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />
        {props.value && onClearInput && (
          <View style={styles.iconClearView}>
            {clearTextIcon ? (
              clearTextIcon
            ) : (
              <IconButtonClear
                onPress={onClearInput}
                iconColor={IconColor.DARK}
              />
            )}
          </View>
        )}
      </View>
    </View>
  );
};
