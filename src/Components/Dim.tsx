import React, { FunctionComponent } from "react";
import { StyleSheet, View } from "react-native";
import { Color, ScreenUtils } from "../Themes";

const ComponentDIM: FunctionComponent = () => {
  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    width: ScreenUtils.WIDTH_SCREEN,
    height: ScreenUtils.HEIGHT_SCREEN,
    backgroundColor: Color.black5,
  },
});

export default ComponentDIM;
