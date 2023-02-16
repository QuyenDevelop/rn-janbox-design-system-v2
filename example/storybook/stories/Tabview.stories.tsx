import { storiesOf } from "@storybook/react-native";
import React from "react";
import { TabBarItemPrimary, TabViewPrimary } from "../components";

storiesOf("Tab view", module)
  .add("Primary", () => <TabViewPrimary />)
  .add("Tab Item", () => <TabBarItemPrimary />);
