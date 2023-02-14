import { action } from "@storybook/addon-actions";
import { number, select, text } from "@storybook/addon-knobs";
import React, { FunctionComponent } from "react";
import { SnackBar, SnackBarTypes } from "rn-janbox-design-system-v2";
import { ContainerView } from ".";

export const SnackBarPrimary: FunctionComponent = () => {
  return (
    <ContainerView>
      <SnackBar
        message={text("Nội dung thông báo", "Thông báo")}
        buttonName={text("Button Name", "Button")}
        snackBarAction={action("snackBarAction")}
        type={select("Snack bar type", SnackBarTypes, SnackBarTypes.INFO)}
        duration={number("Timing", 5000)}
      />
    </ContainerView>
  );
};
