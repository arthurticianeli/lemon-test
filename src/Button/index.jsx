import React from "react";
import Icon from "./icon";
import { ButtonDisabled, ButtonWrapper } from "./style";

function Button({ children, color, disabled, icon, onClick }) {
  return (
    <>
      {disabled ? (
        <ButtonDisabled color={color} icon={!!icon} onClick={onClick}>
          <span>{children}</span> {icon && <Icon icon={icon}>{icon}</Icon>}
        </ButtonDisabled>
      ) : (
        <ButtonWrapper color={color} icon={!!icon} onClick={onClick}>
          <span>{children}</span> {icon && <Icon icon={icon}>{icon}</Icon>}
        </ButtonWrapper>
      )}
    </>
  );
}

export default Button;
