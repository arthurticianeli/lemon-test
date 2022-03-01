import styled from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.icon ? "space-between" : "center")};

  width: 100%;
  min-width: 311px;
  height: 56px;

  border: none;

  padding: 20px 16px 20px 16px;

  box-sizing: border-box;

  transition: background 0.5s ease-out;

  cursor: pointer;

  font-family: Inter;
  font-size: 16px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  box-sizing: border-box;

  text-align: ${(props) => (props.icon ? "left" : "center")};

  background: ${(props) =>
    props.color === "secondary" ? "#F7C346" : "#026C00"};

  color: ${(props) =>
    props.disabled ? "white" : props.color === "secondary" ? "black" : "white"};

  opacity: ${(props) => (props.disabled ? 0.5 : 1)};

  &:hover {
    background: ${(props) =>
      props.color === "secondary" ? "#FFDF77" : "#079504"};
  }

  &:active {
    background: ${(props) =>
      props.color === "secondary" ? "#DCAC0D" : "#013C00"};
  }
`;
