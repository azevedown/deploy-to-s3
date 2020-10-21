import styled from "styled-components";

const PaymentCrediCardButton = styled.div`
  width: 176px;
  height: 60px;
  background: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.DarkGrayOpacity};
  box-sizing: border-box;
  border-radius: 4px;
  font-weight: bold;
  font-size: 12px;
  line-height: 20px;
  color: ${(props) => props.theme.colors.BlueManhein};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  svg {
    margin-right: 3px;
  }
`;

export { PaymentCrediCardButton };
