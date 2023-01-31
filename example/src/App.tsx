import * as React from "react";

import { StyleSheet, View } from "react-native";
import { Button, Themes } from "rn-janbox-design-system-v2";

export default function App() {
  const [buttonDisable, setButtonDisable] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (buttonDisable) {
      setTimeout(() => {
        setButtonDisable(false);
      }, 3000);
    }
  }, [buttonDisable]);

  return (
    <View style={styles.container}>
      <Button
        buttonSize="large"
        onPress={() => setButtonDisable(true)}
        isLoading={buttonDisable}
        isDisabled={buttonDisable}
        content="Hải Óc Chó"
      />
      {/* <View
        style={{
          width: "100%",
          height: Themes.StylesConstant.sizeLarge,
          paddingHorizontal: Themes.StylesConstant.spacingNormal,
          marginTop: 20,
        }}
      >
        <Button
          onPress={() => setButtonDisable(true)}
          // isLoading={buttonDisable}
          isDisabled={buttonDisable}
          // buttonSize="smallSpecial"
          // buttonStyle="secondaryOne"
          content="xyz"
          ButtonLeftView={<Text>x</Text>}
        />
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    height: 60,
    marginVertical: 20,
  },
  text: {
    color: Themes.Color.orange6s,
    fontSize: 16,
  },
});
