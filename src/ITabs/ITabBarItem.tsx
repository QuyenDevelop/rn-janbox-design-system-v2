import { Text } from "@rneui/themed";
import React, { FunctionComponent } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { TabModel } from ".";
import { Badge, Dot } from "../Components";
import { Color, ScreenUtils, StylesConstant, TextStyles } from "../Themes";

export interface ITabItemProps {
  tab: TabModel;
  index: number;
  isFocused: boolean;
  onChangeTab: (index: number) => void;
  renderTabIcon?: React.ReactNode;
  isShowRedDot?: boolean;
  isShowBadge?: boolean;
  itemWidth?: number;
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  tabContainer: {
    height: StylesConstant.sizeMedium,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingHorizontal: StylesConstant.spacing8,
    backgroundColor: Color.white6,
  },
  tabIcon: {
    width: StylesConstant.iconSizeMedium,
    height: StylesConstant.iconSizeMedium,
    alignItems: "center",
    justifyContent: "center",
    marginRight: StylesConstant.spacing4,
    overflow: "hidden",
  },
  contentStyle: {
    ...TextStyles.text14,
    fontWeight: "400",
    color: Color.black6s,
  },
  view24: {
    width: StylesConstant.iconSizeMedium,
    marginLeft: StylesConstant.spacing4,
  },
  relativeView: {
    position: "relative",
    top: -StylesConstant.spacing4,
  },
});

export const ITabBarItem: FunctionComponent<ITabItemProps> = ({
  tab,
  index,
  isFocused,
  onChangeTab,
  renderTabIcon,
  itemWidth,
  isShowRedDot,
  isShowBadge,
}) => {
  return (
    <TouchableOpacity
      onPress={() => onChangeTab(index)}
      style={styles.container}
    >
      <View
        style={{
          ...styles.tabContainer,
          width: itemWidth,
        }}
      >
        {renderTabIcon && <View style={styles.tabIcon}>{renderTabIcon}</View>}
        <Text style={styles.contentStyle}>{tab.title}</Text>
        {isShowRedDot ? (
          <View style={styles.view24}>
            <View style={styles.relativeView}>
              <Dot />
            </View>
          </View>
        ) : isShowBadge && tab.badgeNumber && tab.badgeNumber > 0 ? (
          <View style={styles.view24}>
            <View style={styles.relativeView}>
              <Badge content={tab.badgeNumber} />
            </View>
          </View>
        ) : null}
      </View>
      <View
        style={{
          width: ScreenUtils.scale(36),
          height: ScreenUtils.scale(2),
          borderRadius: ScreenUtils.scale(2),
          backgroundColor: isFocused ? Color.brandA : Color.white6,
        }}
      />
    </TouchableOpacity>
  );
};
