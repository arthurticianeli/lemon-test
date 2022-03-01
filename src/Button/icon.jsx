import React from "react";

import { ReactComponent as CheckMark } from "../assets/check.svg";
import { ReactComponent as Arrow } from "../assets/arrow.svg";
import { ReactComponent as Refresh } from "../assets/refresh.svg";

function Icon({ icon, color, disabled }) {
  switch (icon) {
    case "check":
      return (
        <CheckMark
          data-testid="check-icon"
          w="20px"
          fill={
            !!disabled ? "white" : color === "secondary" ? "black" : "white"
          }
        />
      );

    case "refresh":
      return (
        <Refresh
          data-testid="refresh-icon"
          fill={
            !!disabled ? "white" : color === "secondary" ? "black" : "white"
          }
        />
      );

    default:
      return (
        <Arrow
          data-testid="arrow-icon"
          fill={
            !!disabled ? "white" : color === "secondary" ? "black" : "white"
          }
        />
      );
  }
}

export default Icon;
