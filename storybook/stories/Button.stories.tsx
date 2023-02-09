// stories/MyButton.stories.tsx
import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";

import { Button } from "rn-janbox-design-system-v2";
// import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

// export type ButtonProps = {
//   onPress: () => void;
//   name: string;
//   color?: string;
//   textColor?: string;
// };

// const styles = StyleSheet.create({
//   button: {
//     paddingVertical: 8,
//     paddingHorizontal: 16,
//     borderRadius: 4,
//     alignSelf: "flex-start",
//     flexGrow: 0,
//     backgroundColor: "purple",
//   },
//   buttonText: {
//     color: "white",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   buttonContainer: {
//     alignItems: "flex-start",
//     flex: 1,
//   },
// });

// export const Button = ({ name, onPress, color, textColor }: ButtonProps) => (
//   <View style={styles.buttonContainer}>
//     <TouchableOpacity
//       style={[styles.button, !!color && { backgroundColor: color }]}
//       onPress={onPress}
//       activeOpacity={0.8}
//     >
//       <Text style={[styles.buttonText, !!textColor && { color: textColor }]}>
//         {name}
//       </Text>
//     </TouchableOpacity>
//   </View>
// );

export default {
  title: "components/MyButton",
  component: Button,
} as ComponentMeta<typeof Button>;

export const Basic: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
);

Basic.args = {
  name: "Help me",
};
