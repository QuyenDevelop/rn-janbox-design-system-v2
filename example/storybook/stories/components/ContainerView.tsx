import React, { FunctionComponent } from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, ViewProps } from "react-native";

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: "center",
  },
});

export interface ContainerViewProps extends ViewProps {}

export const ContainerView: FunctionComponent<ContainerViewProps> = ({
  children,
}) => {
  return <View style={styles.main}>{children}</View>;
};

ContainerView.defaultProps = {
  children: null,
};

ContainerView.propTypes = {
  children: PropTypes.node,
};
