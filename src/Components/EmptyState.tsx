import React, { FunctionComponent } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { Color, ScreenUtils, StylesConstant, TextStyles } from "../Themes";
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
    <View
      style={{
        ...styles.container,
        backgroundColor: backgroundColor || Color.white6,
      }}
    >
      <Image
        source={imgSource || Images.empty}
        style={styles.imageStyle}
        resizeMode="cover"
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
            name={buttonTitle}
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
    paddingHorizontal: StylesConstant.spacing16,
  },
  imageStyle: {
    width: ScreenUtils.scale(200),
    height: ScreenUtils.scale(200),
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  emptyContentStyle: {
    marginTop: StylesConstant.spacing40,
    marginBottom: StylesConstant.spacing8,
    alignItems: "center",
    justifyContent: "center",
  },
  titleStyle: {
    ...TextStyles.text16,
    fontWeight: "500",
    marginBottom: StylesConstant.spacing8,
    textAlign: "center",
  },
  messageStyle: {
    ...TextStyles.text14,
    fontWeight: "400",
    marginBottom: StylesConstant.spacing24,
    textAlign: "center",
  },
});

export default EmptyState;
