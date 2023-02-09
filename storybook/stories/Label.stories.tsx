import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";

import { BaseLabel, LabelTypes } from "rn-janbox-design-system-v2";

export default {
  title: "components/Label",
  component: BaseLabel,
} as ComponentMeta<typeof BaseLabel>;

export const Basic: ComponentStory<typeof BaseLabel> = (args) => (
  <BaseLabel {...args} />
);

Basic.args = {
  content: "Help me",
  labelType: LabelTypes.INFO,
};
