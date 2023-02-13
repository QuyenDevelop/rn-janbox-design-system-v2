import { action } from "@storybook/addon-actions";
import { text } from "@storybook/addon-knobs";
import React, { FunctionComponent, useState } from "react";
import { BasePopup, Button } from "rn-janbox-design-system-v2";
import ContainerView from "./ContainerView";

export const PopupPrimary: FunctionComponent = () => {
  const [show, setShow] = useState(false);
  return (
    <ContainerView>
      <Button name="Click me to show Popup" onPress={() => setShow(true)} />

      <BasePopup
        isVisible={show}
        onClose={() => setShow(false)}
        title={text("Popup Title", "Title hãy viết 1 dòng thôi nhé")}
        message={text(
          "Popup message",
          "Phần nội dung bạn hãy viết vào đây nhé, nhưng đừng viết dài quá nhé, viết tối đa tầm 4 dòng đủ hiểu để đọc thôi nhé"
        )}
        buttonCancelName={text("Button Cancel Name", "Từ chối")}
        onPressCancel={action("Handle Cancel", {
          allowFunction: true,
        })}
        buttonAcceptName={text("Button Accept Name", "Đồng ý")}
        onPressAccept={action("Handle Accept", {
          allowFunction: true,
        })}
        image={{
          uri: text(
            "Image Url",
            "https://bedental.vn/wp-content/uploads/2022/11/nguoi-mau-Shin-Jae-Eun.jpg"
          ),
        }}
      />
    </ContainerView>
  );
};

export const PopupSecondary: FunctionComponent = () => {
  const [show, setShow] = useState(false);
  return (
    <ContainerView>
      <Button name="Click me to Entertainment" onPress={() => setShow(true)} />
      <BasePopup
        isVisible={show}
        onClose={() => setShow(false)}
        imageBackground={{
          uri: text(
            "Image Url",
            "https://bedental.vn/wp-content/uploads/2022/11/nguoi-mau-Shin-Jae-Eun.jpg"
          ),
        }}
        buttonAcceptName={text("Button Accept Name", "Đồng ý")}
        onPressAccept={action("Handle Accept", {
          allowFunction: true,
        })}
      />
    </ContainerView>
  );
};
