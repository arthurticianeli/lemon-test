import React from "react";

import { FaArrowRight, FaCheck } from "react-icons/fa";

function Icon({ icon }) {
  console.log(icon);
  switch (icon) {
    case "check":
      <>
        <FaCheck />
      </>;
      break;
    case "refresh":
      <>
        <i className="ion-refresh" />
      </>;
      break;
    default:
      <>
        <FaArrowRight />
      </>;
  }
  return (
    <>
      <FaArrowRight />
    </>
  );
}

export default Icon;
