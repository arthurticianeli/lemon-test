import React from "react";

import { ReactComponent as CheckMark } from "../assets/check.svg";
import { ReactComponent as Arrow } from "../assets/arrow.svg";
import { ReactComponent as Refresh } from "../assets/refresh.svg";

function Icon({ icon, color, disabled }) {
  switch (icon) {
    case "check":
      return (
        <>
          <CheckMark
            fill={
              color === "secondary" && !!disabled === false ? "black" : "white"
            }
          />
        </>
      );

    case "refresh":
      return (
        <>
          <Refresh
            fill={
              color === "secondary" && !!disabled === false ? "black" : "white"
            }
          />
        </>
      );

    default:
      return (
        <>
          <Arrow
            fill={
              color === "secondary" && !!disabled === false ? "black" : "white"
            }
          />
        </>
      );
  }
}

export default Icon;
