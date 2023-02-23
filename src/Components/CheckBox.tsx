import React, { FunctionComponent } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import { Color, ScreenUtils, ConstantStyles, TextStyles } from "../Themes";
import { Images } from "../assets";

export interface CheckBoxProps {
  isChecked?: boolean;
  isDisabled?: boolean;
  content?: string;
  handleCheck?: () => void;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkBoxStyle: {
    width: ConstantStyles.iconSizeMedium,
    height: ConstantStyles.iconSizeMedium,
    borderRadius: ConstantStyles.borderRadius16,
    justifyContent: "center",
    alignItems: "center",
    marginRight: ConstantStyles.spacing8,
    borderWidth: 2 * StyleSheet.hairlineWidth,
  },
  radioContainer: {
    width: ConstantStyles.iconSizeMedium,
    height: ConstantStyles.iconSizeMedium,
    borderRadius: ConstantStyles.borderRadius4,
    justifyContent: "center",
    alignItems: "center",
    marginRight: ConstantStyles.spacing8,
    borderWidth: 2 * StyleSheet.hairlineWidth,
  },
  checkedStyle: {
    width: ScreenUtils.scale(12),
    height: ScreenUtils.scale(12),
    borderRadius: ScreenUtils.scale(6),
  },
  iconCloseStyle: {
    width: ScreenUtils.scale(12),
    height: ScreenUtils.scale(12),
  },
});

export const ICheckBox: FunctionComponent<CheckBoxProps> = ({
  isChecked,
  isDisabled,
  handleCheck,
  content,
}) => {
  const getColor = isDisabled ? Color.black3s : Color.primary6s;

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={!isDisabled ? handleCheck : undefined}
    >
      <View
        style={{
          ...styles.checkBoxStyle,
          borderColor: getColor,
        }}
      >
        {isChecked && (
          <View
            style={{
              ...styles.checkedStyle,
              backgroundColor: getColor,
            }}
          />
        )}
      </View>
      {content && (
        <Text
          style={{
            ...TextStyles.text14,
            color: isDisabled ? Color.black3s : Color.black6s,
          }}
        >
          {content}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export const IRadioCheckBox: FunctionComponent<CheckBoxProps> = ({
  isChecked,
  isDisabled,
  handleCheck,
  content,
}) => {
  const getColor = isDisabled ? Color.black3s : Color.primary6s;
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={!isDisabled ? handleCheck : undefined}
    >
      <View
        style={{
          ...styles.radioContainer,
          borderColor: getColor,
          backgroundColor:
            isDisabled && isChecked
              ? Color.black3s
              : isChecked
              ? Color.primary6s
              : Color.white6,
        }}
      >
        {isChecked && (
          <Image
            source={Images.icCheck}
            style={styles.iconCloseStyle}
            resizeMode="contain"
          />
        )}
      </View>
      {content && (
        <Text
          style={{
            ...TextStyles.text14,
            color: isDisabled ? Color.black3s : Color.black6s,
          }}
        >
          {content}
        </Text>
      )}
    </TouchableOpacity>
  );
};
