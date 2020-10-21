import styled from "styled-components";

const ContentPaymentStatus = styled.div`
  margin-top: 55px;
`;
const TitleStepDelivery = styled.div`
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.colors.DarkBlue};
  margin-bottom: 12px;
`;
const DescriptionStepDelivery = styled.div`
  color: ${(props) => props.theme.colors.MediumGray};
  margin-bottom: 30px;
`;
const DivButtonAdvance = styled.div`
  margin: 20px 0;
`;

export {
  ContentPaymentStatus,
  DescriptionStepDelivery,
  DivButtonAdvance,
  TitleStepDelivery,
};
