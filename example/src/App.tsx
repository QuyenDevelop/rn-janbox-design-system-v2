import * as React from "react";

import { View } from "react-native";
import {
  BaseHeaderBar,
  IFloatingButton,
  ITabBarItem,
  ITabItemProps,
  ITabView,
  TabModel,
} from "rn-janbox-design-system-v2";
import BottomSheetTab from "./BottomSheet";
import ButtonTab from "./ButtonTab";
import EmptyStateTab from "./EmptyState";

export default function App() {
  const [index, setIndex] = React.useState<number>(0);
  const routes: Array<TabModel> = [
    {
      key: "Button",
      title: "Button",
    },
    {
      key: "BottomSheet",
      title: "BottomSheet",
    },
    {
      key: "Empty",
      title: "Empty",
    },
  ];

  const renderScene = React.useCallback(({ tab }: { tab: TabModel }) => {
    switch (tab.key) {
      case "Button":
        return <ButtonTab />;
      case "BottomSheet":
        return <BottomSheetTab />;
      case "Empty":
        return <EmptyStateTab />;
      default:
        return <></>;
    }
  }, []);

  const renderTabIcon = (props: ITabItemProps) => {
    return <ITabBarItem {...props} />;
  };

  return (
    <View style={{ flex: 1 }}>
      <BaseHeaderBar title={"Title tối đa 1 dòng nhiều"} />
      <ITabView
        onIndexChange={setIndex}
        renderScene={renderScene}
        navigationState={{ index, routes }}
        renderTabIcon={renderTabIcon}
        // disableSwipe
        isFixed
      />
      <IFloatingButton
        ListSupport={[
          {
            key: 1,
            title: "Estimated Price",
            image:
              "https://cdn.pixabay.com/photo/2012/04/26/19/43/profile-42914__340.png",
            onPress: () => {},
          },
          {
            key: 2,
            title: "Messenger",
            image:
              "https://cdn.pixabay.com/photo/2012/04/26/19/43/profile-42914__340.png",
            onPress: () => {},
          },
        ]}
        floatingImage={{
          uri: "https://cdn.pixabay.com/photo/2012/04/26/19/43/profile-42914__340.png",
        }}
      />
    </View>
  );
}
