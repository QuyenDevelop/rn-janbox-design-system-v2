import {
  requireNativeComponent,
  UIManager,
  Platform,
  ViewStyle,
} from 'react-native';

const LINKING_ERROR =
  `The package 'rn-janbox-design-system-v2' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

type RnJanboxDesignSystemV2Props = {
  color: string;
  style: ViewStyle;
};

const ComponentName = 'RnJanboxDesignSystemV2View';

export const RnJanboxDesignSystemV2View =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<RnJanboxDesignSystemV2Props>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };
