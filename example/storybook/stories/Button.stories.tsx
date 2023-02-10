import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react-native";
import React, { FunctionComponent, useState } from "react";
import CenterView from "./CenterView";
import { Button, ButtonProps } from "rn-janbox-design-system-v2";

const ButtonLoading: FunctionComponent<ButtonProps> = (props) => {
  const [isLoading, setLoading] = useState(false);
  return (
    <Button
      isLoading={isLoading}
      onPress={() => setLoading(true)}
      isDisabled={isLoading}
      {...props}
    />
  );
};

storiesOf("Button", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("Button Loading", () => {
    return <ButtonLoading name="Click me" />;
  })
  .add("with some emoji", () => <Button onPress={action("clicked-emoji")} />);

// 😀 😎 👍 💯
