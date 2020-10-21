import styled from "styled-components";

const minHeight = '264px';

const BoxVehicleDetail = styled.div`
  width: 100%;
  min-height: ${minHeight};
  border: 1px solid ${props => props.theme.colors.Platinum};
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
  color: ${props => props.theme.colors.DarkBlue};
  margin: 0 0 23px 0;
`;

const VehiclePlate = styled(VehicleName)`
  margin: 0 0 23px 0;
`;

const LabelPlate = styled.div`
  font-size: 14px;
  line-height: 22px;
  color: ${props => props.theme.colors.MediumGray};
`;

const WrapperBoxPrice = styled.div`
  width: 100%;
  height: 100%;
  background: ${props => props.theme.colors.white};
  padding: 0 10px 20px 10px;
  text-align: center;
  display: grid;
  img {
    margin-left: auto;
  }
`;
const WrapperImgTitle = styled.div`
  img {
  }
`;

const KbbTitle = styled.div`
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: ${props => props.theme.colors.DarkBlue};
`;

const KbbRangePrice = styled.div`
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: ${props => props.theme.colors.DarkBlue};
`;

const BoxPriceAsked = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors.Grey30};
  border-radius: 4px;
  width: 100%;
  max-width: 240px;
  min-height: 42px;
  margin: auto;
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  color: ${props => props.theme.colors.DarkBlue};
  span {
    font-size: 20px;
    line-height: 28px;
    margin: 0 0 0 5px;
    letter-spacing: -0.15px;
  }
`;

const LabelPriceAdvice = styled.div`
  font-size: 10px;
  line-height: 12px;
  color: ${props => props.theme.colors.MediumGray};
`;

export {
  BoxImg,
  BoxPriceAsked,
  BoxVehicleDetail,
  KbbRangePrice,
  KbbTitle,
  LabelPlate,
  LabelPriceAdvice,
  VehicleName,
  VehiclePlate,
  WrapperBoxPrice,
  WrapperImgTitle,
  WrapperVechicleDetails,
};
