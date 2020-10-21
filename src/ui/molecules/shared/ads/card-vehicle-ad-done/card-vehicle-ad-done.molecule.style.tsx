import styled from "styled-components";

const minHeight = "264px";

const BoxVehicleDetail = styled.div`
  width: 100%;
  min-height: ${minHeight};
  border: 1px solid ${(props) => props.theme.colors.Platinum};
  box-sizing: border-box;
  border-radius: 10px;
  overflow: hidden;
  .o-hidden {
    overflow: hidden;
  }
`;

const WrapperVechicleDetails = styled.div`
  padding: 5px 0;
  max-width: 400px;
  margin: auto;
  position: relative;
`;

const BoxImg = styled.div`
  text-align: center;
  max-width: 286px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  min-height: ${minHeight};
  img {
    max-height: ${minHeight};
    width: 100%;
  }
  .spinner-div {
    height: ${minHeight};
    width: auto;
  }
`;

const VehicleName = styled.div`
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.colors.DarkBlue};
  margin: 0 0 23px 0;
`;

const VehiclePlate = styled(VehicleName)`
  margin: 0 0 23px 0;
`;

const LabelPlate = styled.div`
  font-size: 14px;
  line-height: 22px;
  color: ${(props) => props.theme.colors.MediumGray};
`;

const WrapperBoxPrice = styled.div`
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.colors.white};
  padding: 30px 10px;
  text-align: center;
  display: grid;
  align-items: center;
  img {
    margin-left: auto;
  }
`;

const GroupLabelInfo = styled.div`
  text-align: left;
`;

const TitleInfo = styled.div`
  color: ${(props) => props.theme.colors.Grey74};
`;
const DescriptionInfo = styled.div`
  font-weight: bold;
  color: ${(props) => props.theme.colors.DarkBlue};
`;

const StatusFlyer = styled.div`
  width: 256px;
  height: 40px;
  background: ${(props) => props.theme.colors.Confirm};
  position: absolute;
  top: 154px;
  right: -24px;
  color: ${(props) => props.theme.colors.white};
  padding: 11px 18px;
  z-index: 1;
  b {
    text-transform: uppercase;
  }
  svg {
    width: 16px;
  }
  span {
    margin: 0 4px;
  }
  div {
    margin: 1px 0 0 226px;
  }
  @media (max-width: 1200px) {
    width: 233px;
    div {
      margin: 1px 0 0 203px;
    }
  }

  @media (max-width: 992px) {
    width: auto;
    position: initial;
    display: flex;
    align-items: center;
    div {
      display: none;
    }
  }
`;

export {
  BoxImg,
  BoxVehicleDetail,
  DescriptionInfo,
  GroupLabelInfo,
  LabelPlate,
  TitleInfo,
  VehicleName,
  VehiclePlate,
  WrapperBoxPrice,
  WrapperVechicleDetails,
  StatusFlyer,
};
