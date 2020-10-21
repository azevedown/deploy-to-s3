import styled from "styled-components";

const WrapperAdInfo = styled.div`
  background: ${(props) => props.theme.colors.Grey30};
  display: grid;
  height: 100%;
`;

const LabelOffers = styled.div`
  width: 98px;
  height: 30px;
  background: ${(props) => props.theme.colors.DarkBlueDisabled};
  border-radius: 4px;
  font-weight: bold;
  font-size: 12px;
  line-height: 30px;
  vertical-align: middle;
  text-align: center;
  color: ${(props) => props.theme.colors.white};
  margin: 0 auto;
`;

const LabelOfferInfo = styled.div`
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  color: ${(props) => props.theme.colors.Confirm};
`;

const OfferValue = styled.div`
  font-weight: bold;
  font-size: 32px;
  line-height: 40px;
  text-align: center;
  letter-spacing: -1px;
  color: ${(props) => props.theme.colors.DarkBlue};
`;
const StatusOffer = styled.div`
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  color: ${(props) => props.theme.colors.Auth};
  text-transform: uppercase;
`;

const WrapperLabels = styled.div`
  height: 100%;
  display: grid;
`;

export {
  LabelOfferInfo,
  LabelOffers,
  OfferValue,
  StatusOffer,
  WrapperAdInfo,
  WrapperLabels,
};
