import * as React from "react";

import { StyleSheet, Text, View } from "react-native";
import { BaseBottomSheet, Button, Themes } from "rn-janbox-design-system-v2";

export default function App() {
  const [buttonDisable, setButtonDisable] = React.useState<boolean>(false);
  const [showModal, setShowModal] = React.useState<boolean>(false);

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
        onPress={() => setShowModal(true)}
        isLoading={buttonDisable}
        isDisabled={buttonDisable}
        content="Click me"
      />
      {/* <View
        style={{
          width: "70%",
          paddingHorizontal: Themes.StylesConstant.spacing16,
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
      <BaseBottomSheet
        isVisible={showModal}
        onCloseModal={() => setShowModal(false)}
        headerTitle={"Title"}
        // headerRightView={<Text>Hai</Text>}
      >
        <View>
          <Text>abc</Text>
          <Text>abc</Text>
          <Text>abc</Text>
          <Text>abc</Text>
          <Text>abc</Text>
          <Text>abc</Text>
          <Text>abc</Text>
          <Text>abc</Text>
          <Text>abc</Text>
          <Text>abc</Text>
          <Text>abc</Text>
        </View>
      </BaseBottomSheet>
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
