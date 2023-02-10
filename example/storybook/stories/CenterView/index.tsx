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

export interface CenterViewProps extends ViewProps {}

const CenterView: FunctionComponent<CenterViewProps> = ({ children }) => {
  return <View style={styles.main}>{children}</View>;
};

CenterView.defaultProps = {
  children: null,
};

CenterView.propTypes = {
  children: PropTypes.node,
};

export default CenterView;
