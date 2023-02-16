# rn-janbox-design-system-v2

janbox test design system project

## Installation

```sh
npm install rn-janbox-design-system-v2

or

yarn add rn-janbox-design-system-v2
```

## Usage

```js
// ---- using Button Component ------
import { Button } from "rn-janbox-design-system-v2";

// ...

<Button
  buttonSize="medium"
  buttonStyle="primary"
  onPress={() => setButtonDisable(true)}
  isLoading={buttonDisable}
  isDisabled={buttonDisable}
  name="Click me"
/>;
```

```js
// ---- using Tab Component ------
import {
  ITabView,
  ITabBarItem,
  ITabItemProps,
  TabModel,
} from "rn-janbox-design-system-v2";

// ...
const App = (second) => {
  const [index, setIndex] = React.useState < number > 0;
  const routes: Array<TabModel> = [];

  const renderTabIcon = (props: ITabItemProps) => {
    return <ITabBarItem {...props} />;
  };

  const renderScene = React.useCallback(({ tab }: { tab: TabModel }) => {
    switch (tab.key) {
      case "Button":
        return <ButtonTab />;
      default:
        return <></>;
    }
  }, []);

  return (
    <ITabView
      onIndexChange={setIndex}
      renderScene={renderScene}
      navigationState={{ index, routes }}
      renderTabIcon={renderTabIcon} // ---- custom ItemTabbar
      // disableSwipe       // ----- disable Swipe tab
      isFixed // ----- styles Fixed tabbar
    />
  );
};
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## Developer Guide

See the [develop guide](DEP_GUIDER.md) to learn how to setup repository and the development workflow for ichiba Mobile Developer.

## Template Use

- [React-native-cli](https://reactnative.dev/docs/environment-setup)
- Template [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
- Manager/Testing template [Storybook for React Native](https://github.com/storybookjs/react-native)
