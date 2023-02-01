import React, { FunctionComponent } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { Color, ScreenUtils, StylesConstant } from "../Themes";
import type { EmptyStateProps } from "./types";
import { Images } from "../assets";
import { Button } from "../Button";

/**
  Empty States can be used in:
  - System causes (like Connection error or API error)
  - User haven't used the function yet.
  - User finds no content from Search or Filter.
*/

const EmptyState: FunctionComponent<EmptyStateProps> = ({
  imgSource,
  title,
  message,
  buttonTitle,
  buttonHandler,
  backgroundColor,
}) => {
  return (
    <View style={styles.container}>
      <Image
        source={imgSource || Images.empty}
        style={{
          ...styles.imageStyle,
          backgroundColor: backgroundColor || Color.white6,
        }}
        resizeMode="center"
      />
      <View style={styles.emptyContentStyle}>
        {title && (
          <Text numberOfLines={2} style={styles.titleStyle}>
            {title}
          </Text>
        )}
        <Text numberOfLines={3} style={styles.messageStyle}>
          {message}
        </Text>
        {buttonTitle && buttonHandler && (
          <Button
            width={ScreenUtils.scale(248)}
            content={buttonTitle}
            onPress={buttonHandler}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: StylesConstant.spacing16,
  },
  imageStyle: {
    width: ScreenUtils.scale(200),
    height: ScreenUtils.scale(200),
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  emptyContentStyle: {
    flex: 1,
    marginTop: StylesConstant.spacing40,
    marginBottom: StylesConstant.spacing8,
    alignItems: "center",
    justifyContent: "center",
  },
  titleStyle: {
    marginBottom: StylesConstant.spacing8,
  },
  messageStyle: {
    marginBottom: StylesConstant.spacing24,
  },
});

export default EmptyState;
