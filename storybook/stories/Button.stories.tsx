// stories/MyButton.stories.tsx
import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";

import { Button, ButtonTypes } from "rn-janbox-design-system-v2";
// const pak = require("../../package.json");
// const { Button, ButtonTypes } = pak.source;

export default {
  /**
   * Component
   */
  title: "components/MyButton",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: "Help me",
  buttonStyle: ButtonTypes.PRIMARY,
};

export const SecondaryOne = Template.bind({});
SecondaryOne.args = {
  name: "Help me",
  buttonStyle: ButtonTypes.SECONDARY_ONE,
};
