import { StyleProp, StyleSheet, TextInputProps, ViewStyle } from "react-native";
import { Color, StylesConstant, TextStyles } from "../Themes";

export declare interface InputProps extends TextInputProps {
  label?: string;
  noteMessage?: string;
  errorMessage?: string;
  height?: number;
  containerStyle?: StyleProp<ViewStyle>;
  onClearInput: () => void;
  inputStyle?: StyleProp<ViewStyle>;
  isRequired?: boolean;
  textRightComponent?: React.ReactNode;
  textLeftComponent?: React.ReactNode;
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  label: {
    ...TextStyles.text16,
    color: Color.black5s,
    marginBottom: StylesConstant.spacing8,
  },
  required: {
    color: Color.red6s,
  },
  inputDefaultContainer: {
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    borderRadius: StylesConstant.borderRadius8,
    borderWidth: 2 * StyleSheet.hairlineWidth,
    borderColor: Color.black2s,
    paddingHorizontal: StylesConstant.spacing16,
  },
  inputErrorContainer: {
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    borderRadius: StylesConstant.borderRadius8,
    borderWidth: 2 * StyleSheet.hairlineWidth,
    borderColor: Color.red6s,
    paddingHorizontal: StylesConstant.spacing16,
  },
  inputDisableContainer: {
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    borderRadius: StylesConstant.borderRadius8,
    borderWidth: 2 * StyleSheet.hairlineWidth,
    borderColor: Color.black2s,
    backgroundColor: Color.black2s,
    paddingHorizontal: StylesConstant.spacing16,
  },
  input: {
    flex: 1,
    ...TextStyles.text16,
    color: Color.black6s,
  },
  errorMessage: {
    ...TextStyles.text14,
    color: Color.red6s,
    marginLeft: StylesConstant.spacing16,
    marginTop: StylesConstant.spacing4,
  },
  noteMessage: {
    ...TextStyles.text14,
    color: Color.black5s,
    marginLeft: StylesConstant.spacing16,
    marginTop: StylesConstant.spacing4,
  },
});
