import type { ViewStyle } from "react-native";

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
