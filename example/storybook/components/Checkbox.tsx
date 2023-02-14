import { action } from "@storybook/addon-actions";
import { boolean, text } from "@storybook/addon-knobs";
import React, { FunctionComponent } from "react";
import { CheckBox, RadioCheckBox } from "rn-janbox-design-system-v2";
import { ContainerView } from ".";

export const CheckboxDefault: FunctionComponent = () => {
  return (
    <ContainerView>
      <CheckBox
        content={text("Content", "Check Box")}
        isChecked={boolean("is Checked", false)}
        isDisabled={boolean("is Disabled", false)}
        handleCheck={action("Checked")}
      />
    </ContainerView>
  );
};

export const RadioCheckDefault: FunctionComponent = () => {
  return (
    <ContainerView>
      <RadioCheckBox
        content={text("Content", "Radio Check Box")}
        isChecked={boolean("is Checked", false)}
        isDisabled={boolean("is Disabled", false)}
        handleCheck={action("Checked")}
      />
    </ContainerView>
  );
};
