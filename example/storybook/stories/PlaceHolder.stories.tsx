import { number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import React from "react";
import { PlaceHolder } from "rn-janbox-design-system-v2";
import { ContainerView } from "../components";

storiesOf("Place Holder", module)
  .addDecorator((getStory) => {
    return <ContainerView>{getStory()}</ContainerView>;
  })
  .add("Default", () => (
    <PlaceHolder holderSize={number("Size of place holder", 100)} />
  ));
