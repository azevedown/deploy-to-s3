import { lighten } from "polished";
import { Row } from "react-bootstrap";
import styled, { css } from "styled-components";

interface IProps {
  active: boolean;
  confirm?: boolean;
}

const disabledStyle = (active: boolean) => {
  if (!active)
    return css`
      filter: grayscale(1);
      opacity: 0.5;
    `;
};

const WrapperAdInfo = styled.div`
  background: ${(props) => props.theme.colors.Grey30};
  display: grid;
  height: 100%;
`;
const LabelDaysAd = styled.div<IProps>`
  background: ${(props) =>
    props.confirm ? props.theme.colors.Confirm : props.theme.colors.Auth};
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
  ${(props) => disabledStyle(props.active)}
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

const StatusLabel = styled.div<IProps>`
  background: ${(props) =>
    !props.confirm ? props.theme.colors.Error : props.theme.colors.Confirm};
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
  ${(props) => disabledStyle(props.active)}
  div {
    cursor: pointer;
    display: flex;
    align-items: center;
    svg {
      margin-left: 4px;
      circle {
        fill: ${(props) => props.theme.colors.white};;
      }
      path {
        fill: ${(props) => props.theme.colors.DarkBlue};
      }
    }
  }
`;
const WrapperLabels = styled.div<IProps>`
  height: 100%;
  display: grid;
  ${(props) => disabledStyle(props.active)}
`;

const ActionButtonsWrapper = styled(Row)`
  height: 52px;
  margin-top: auto !important;
`;

const ButtonsActions = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  cursor: pointer;
`;

const Refused = styled(ButtonsActions)`
  background: ${(props) => props.theme.colors.ManheimYellow};
  color: ${(props) => props.theme.colors.DarkBlue};
  :hover {
    background: ${(props) => lighten(0.1, props.theme.colors.ManheimYellow)};
  }
`;
const Accept = styled(ButtonsActions)`
  background: ${(props) => props.theme.colors.DarkBlue};
  color: ${(props) => props.theme.colors.white};
  :hover {
    background: ${(props) => lighten(0.1, props.theme.colors.DarkBlue)};
  }
`;

export {
  Accept,
  ActionButtonsWrapper,
  LabelDaysAd,
  LabelOfferInfo,
  LabelOffers,
  OfferValue,
  Refused,
  StatusLabel,
  StatusOffer,
  WrapperAdInfo,
  WrapperLabels,
};
