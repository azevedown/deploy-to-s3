import styled from "styled-components";

const WrapperStatusDeliveryPayment = styled.div`
  border: 1px solid ${(props) => props.theme.colors.DarkGrayOpacity};
  box-sizing: border-box;
  border-radius: 10px;
`;
const AdvicePayment = styled.div`
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.colors.DarkBlue};
  text-align: center;
`;

export { WrapperStatusDeliveryPayment, AdvicePayment };
