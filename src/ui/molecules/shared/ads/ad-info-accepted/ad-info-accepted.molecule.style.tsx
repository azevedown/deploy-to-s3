import styled from "styled-components";

const WrapperAdInfoAccepted = styled.div`
  background: ${(props) => props.theme.colors.Grey30};
  display: grid;
  height: 100%;
`;
const LabelDaysAd = styled.div`
  background: ${(props) => props.theme.colors.Confirm};
  color: ${(props) => props.theme.colors.white};
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  margin: 0 auto;
  border-radius: 0px 0px 4px 4px;
  max-width: 216px;
  height: 34px;
  width: 80%;
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

const StatusLabel = styled.div`
  background: ${(props) => props.theme.colors.Confirm};
  border-radius: 0px 0px 10px 0px;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.white};
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto 0 0 0;
`;
const WrapperLabels = styled.div`
  height: 100%;
  display: grid;
`;

export {
  LabelDaysAd,
  LabelOfferInfo,
  LabelOffers,
  OfferValue,
  StatusLabel,
  StatusOffer,
  WrapperAdInfoAccepted,
  WrapperLabels,
};
