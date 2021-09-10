import * as React from "react";
import * as Types from "./types";
import classnames from "classnames";

export type StateProps = {
  dimensions?: Types.Dimensions | null | undefined;
  hidden?: boolean;
  dragging?: boolean;
};

export type Props = StateProps & {
  variant: "copied" | "selected";
};

const FloatingRect: React.FC<Props> = ({
  dimensions,
  dragging,
  hidden,
  variant,
}) => {
  const { width, height, top, left } = dimensions || {};
  return (
    <div
      className={classnames("Spreadsheet__floating-rect", {
        [`Spreadsheet__floating-rect--${variant}`]: variant,
        "Spreadsheet__floating-rect--dragging": dragging,
        "Spreadsheet__floating-rect--hidden": hidden,
      })}
      style={{ width, height, top, left }}
    />
  );
};

export default FloatingRect;