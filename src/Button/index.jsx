import Icon from "./icon";
import { StyledButton } from "./styled";
import PropTypes from "prop-types";

Button.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  onClick: PropTypes.func,
};

function Button({ children, color, disabled, icon, onClick }) {
  return (
    <StyledButton
      color={color}
      icon={!!icon}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
      {!!icon && !!children && (
        <Icon icon={icon} color={color} disabled={disabled} />
      )}
    </StyledButton>
  );
}

export default Button;
