import * as React from "react";

import { StyleSheet, Text, View } from "react-native";
import {
  Badge,
  BaseBottomSheet,
  Button,
  Dot,
  Themes,
} from "rn-janbox-design-system-v2";

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
      <View style={styles.boxButton}>
        <Button
          onPress={() => setButtonDisable(true)}
          isLoading={buttonDisable}
          isDisabled={buttonDisable}
          // buttonSize={"small"}
          // buttonStyle="secondaryOne"
          // width={Themes.ScreenUtils.scale(32)}
          content="Test Button"
          ButtonLeftView={<Text>x</Text>}
        />
        <View
          style={{
            width: Themes.StylesConstant.spacing16,
          }}
        />
        <Button onPress={() => setShowModal(true)} content="B" />
      </View>

      <BaseBottomSheet
        isVisible={showModal}
        onCloseModal={() => setShowModal(false)}
        headerTitle={"Title"}
        // headerRightView={<Text>Hai</Text>}
        // disableBackdrop
        // isSwipeComplete
      >
        <View style={styles.contentContainer}>
          {/* <PlaceHolder holderSize={48} /> */}
          {/* <EmptyState
            title={"Title"}
            message={"Message"}
            // buttonTitle={"Button"}
            // buttonHandler={() => setShowModal(false)}
          /> */}
          <View style={styles.content}>
            <Dot />
            <Badge content={99} />
            <Text>Swap area</Text>
            <Text>Hãy tạo component vào kéo vào đây thay thế nhé</Text>
          </View>
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
  boxButton: {
    paddingHorizontal: Themes.StylesConstant.spacing16,
    marginTop: 20,
    flexDirection: "row",
  },
  contentContainer: {
    flex: 1,
    padding: 16,
  },
  content: {
    backgroundColor: Themes.Color.black1s,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
});
