import styled from "styled-components";

const BoxVehicleDetail = styled.div`
  width: 100%;
  min-height: 211px;
  border: 1px solid ${(props) => props.theme.colors.Platinum};
  box-sizing: border-box;
  border-radius: 10px;
  overflow: hidden;
  .row {
    min-height: 211px;
  }
  .col {
    min-height: 211px;
  }
`;

const WrapperVechicleDetails = styled.div`
  padding: 5px 0;
  max-width: 400px;
  margin: auto;
`;

const BoxImg = styled.div`
  text-align: center;
  overflow: hidden;
  max-width: 286px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  img {
    height: 211px;
    width: auto;
  }
`;

const VehicleName = styled.div`
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  /* Dark Blue Manheim */
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
  background: ${(props) => props.theme.colors.Grey30};
  padding: 0 10px;
  text-align: center;
  img {
    margin-left: auto;
  }
`;
const WrapperImgTitle = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto;
  padding: 0 28px 0 0;
`;

const KbbTitle = styled.div`
  margin: 34px 0 0 0;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  margin-right: auto;
  text-align: center;

  /* Dark Blue Manheim */

  color: ${(props) => props.theme.colors.DarkBlue};
`;

const KbbRangePrice = styled.div`
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  margin: 13px 0 0 0;

  /* Dark Blue Manheim */

  color: ${(props) => props.theme.colors.DarkBlue};
`;

const BoxPriceAsked = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.colors.white};
  border-radius: 4px;
  max-width: 240px;
  min-height: 42px;
  margin: auto;
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  margin-top: 30px;
  /* identical to box height, or 157% */

  /* Dark Blue Manheim */

  color: ${(props) => props.theme.colors.DarkBlue};
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
  /* Medium Gray */
  color: ${(props) => props.theme.colors.MediumGray};
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
