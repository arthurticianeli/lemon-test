import styled from "styled-components";

export const ButtonWrapper = styled.div`
  background: ${(props) =>
    (props.color === "primary" && "#026C00") ||
    (props.color === "secondary" && "#F7C346")};

  color: ${(props) =>
    (props.color === "primary" && "white") ||
    (props.color === "secondary" && "black")};

  &:hover {
    background: ${(props) =>
      (props.color === "primary" && "#079504") ||
      (props.color === "secondary" && "#FFDF77")};
  }

  &:disabled {
    background: ${(props) =>
      (props.color === "primary" && "#B7D0B6") ||
      (props.color === "secondary" && "#F7C346")};
  }

  &:active {
    background: ${(props) =>
      (props.color === "primary" && "#013C00") ||
      (props.color === "secondary" && "#DCAC0D")};
  }

  width: 100%;
  min-width: 311px;
  height: 56px;

  padding: 20px 16px 20px 16px;

  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background 0.5s ease-out;

  cursor: pointer;
`;

export const Text = styled.span`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.icon ? "space-between" : "center")};

  width: 279px;
  height: 17px;

  font-family: Inter;
  font-size: 16px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  box-sizing: border-box;
`;

export const ButtonDisabled = styled(ButtonWrapper)`
  background: ${(props) =>
    (props.color === "primary" && "#B7D0B6") ||
    (props.color === "secondary" && "#FFE58D")};

  color: ${(props) => props.color === "secondary" && "white"};

  &:hover {
    background: ${(props) =>
      (props.color === "primary" && "#B7D0B6") ||
      (props.color === "secondary" && "#FFE58D")};
  }
  cursor: default;
`;
