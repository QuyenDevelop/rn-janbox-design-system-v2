import React, { FunctionComponent } from "react";
import {
  Fade,
  Placeholder,
  PlaceholderLine,
  PlaceholderMedia,
} from "rn-placeholder";
import { Color, StylesConstant } from "../Themes";

export interface ISkeletonProps {
  width: number;
  height?: number;
  cornerRadius?: number;
}

export const ILineSkeleton: FunctionComponent<ISkeletonProps> = ({
  width,
  height = StylesConstant.spacing8,
  cornerRadius = StylesConstant.borderRadius8,
}) => {
  return (
    <Placeholder
      Animation={Fade}
      style={{
        width: width,
        height: height,
        margin: StylesConstant.spacing4,
      }}
    >
      <PlaceholderLine
        style={{
          width: width,
          height: height,
          borderRadius: cornerRadius,
        }}
        color={Color.black1s}
      />
    </Placeholder>
  );
};

export interface ISquareSkeletonProps {
  size: number;
  isCircle?: boolean;
  cornerRadius?: number;
}

export const ISquareSkeleton: FunctionComponent<ISquareSkeletonProps> = ({
  size = StylesConstant.sizeLarge,
  cornerRadius = StylesConstant.borderRadius8,
  isCircle = false,
}) => {
  return (
    <Placeholder
      Animation={Fade}
      style={{
        margin: StylesConstant.spacing4,
        width: size,
        height: size,
      }}
    >
      <PlaceholderMedia
        style={{
          width: size,
          height: size,
          borderRadius: isCircle ? size / 2 : cornerRadius,
        }}
        isRound={isCircle}
        color={Color.black1s}
      />
    </Placeholder>
  );
};
