import * as React from "react";

import { StyleSheet, Text, View } from "react-native";
import {
  BaseBottomSheet,
  BaseDialog,
  BaseHeaderBar,
  BaseLabel,
  Button,
  SnackBar,
  Themes,
} from "rn-janbox-design-system-v2";

export default function App() {
  const [buttonDisable, setButtonDisable] = React.useState<boolean>(false);
  const [showModal, setShowModal] = React.useState<boolean>(false);
  // const [value, setValue] = React.useState<string>("Typing here ...");
  const [showDialog, setShowDialog] = React.useState<boolean>(false);
  const [showSnackBar, setShowSnackBar] = React.useState<string>("abc");

  React.useEffect(() => {
    if (buttonDisable) {
      setTimeout(() => {
        setButtonDisable(false);
      }, 3000);
    }
  }, [buttonDisable]);

  return (
    <View style={{ flex: 1 }}>
      <BaseHeaderBar
        renderIconLeft={<View />}
        title={"Title tối đa 1 dòng nhiều"}
      />
      <View style={styles.container}>
        <View style={styles.boxButton}>
          <Button
            onPress={() => setButtonDisable(true)}
            isLoading={buttonDisable}
            isDisabled={buttonDisable}
            // buttonSize={"small"}
            // buttonStyle="ButtonTypes.SECONDARY_ONE"
            // width={Themes.ScreenUtils.scale(32)}
            name="Test Button"
            ButtonLeftView={<Text>x</Text>}
          />
          <View
            style={{
              width: Themes.StylesConstant.spacing16,
            }}
          />
          <Button onPress={() => setShowSnackBar("xyzzcz")} name="SnackBar" />
          {/* <Button onPress={() => setShowModal(true)} name="Modal" /> */}
        </View>
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
            {/* <Dot /> */}
            {/* <Badge content={99} /> */}
            <BaseLabel content="Content label" />
            <Text>Swap area</Text>
            <Text>Hãy tạo component vào kéo vào đây thay thế nhé</Text>
            {/* <BaseTextInput
              // editable={false}
              label="Label"
              value={value}
              onChangeText={setValue}
              onClearInput={() => setValue("")}
              errorMessage="error Message baksbkabvasbviaubvkxzjbviaujkzbciaubcias baucbiasbicba"
              placeholder="Placeholder ..."
              // noteMessage="note Message"
              // height={100}
            /> */}
            {/* <Textarea
              // editable={false}
              label="Label"
              value={value}
              onChangeText={setValue}
              onClearInput={() => setValue("")}
              // errorMessage="error Message baksbkabvasbviaubvkxzjbviaujkzbciaubcias baucbiasbicba"
              placeholder="Placeholder ..."
              // isFocus
              noteMessage="note Message"
              height={100}
            /> */}
          </View>
        </View>
      </BaseBottomSheet>
      <BaseDialog
        isVisible={showDialog}
        onClose={() => setShowDialog(false)}
        title={"Đây là title nhé, tối đa 2 dòng"}
        message={"Đây là description nhé,  tối đa 2 dòng thôi nhé"}
        buttonCancelName={"Từ chối"}
        onPressCancel={() => setShowDialog(false)}
        buttonAcceptName={"Đồng ý"}
        onPressAccept={() => console.log("Đồng ý")}
      />
      <SnackBar message={showSnackBar} buttonName="Button" />
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
