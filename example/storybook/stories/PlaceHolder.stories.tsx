import { number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import React from "react";
import { IPlaceHolder } from "rn-janbox-design-system-v2";
import { ContainerView } from "../components";

storiesOf("Place Holder", module)
  .addDecorator((getStory) => {
    return <ContainerView>{getStory()}</ContainerView>;
  })
  .add("Default", () => (
    <IPlaceHolder holderSize={number("Size of place holder", 100)} />
  ));
