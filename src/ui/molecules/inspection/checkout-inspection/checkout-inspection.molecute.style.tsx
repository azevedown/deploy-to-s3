import { Col } from "react-bootstrap";
import styled from "styled-components";

const WrapperBoxCheckout = styled.div`
  border: 1px solid ${(props) => props.theme.colors.DarkGrayOpacity};
  box-sizing: border-box;
  border-radius: 10px;
  min-height: 410px;
  overflow: hidden;
`;
const ColBorder = styled(Col)`
  border-right: 1px solid ${(props) => props.theme.colors.DarkGrayOpacity};
`;

const IconCircle = styled.div`
  border: 1px solid ${(props) => props.theme.colors.DarkBlue};
  box-sizing: border-box;
  width: 31px;
  border-radius: 31px;
  text-align: center;
  height: 31px;
  vertical-align: middle;
  line-height: 27px;
  background-color: ${(props) => props.theme.colors.white};
  svg {
    width: 27px;
  }
`;

const IconCircleCalendar = styled(IconCircle)`
  svg {
    width: 20px;
  }
`;

const VehicleDataInfo = styled.div`
  min-height: 174px;
  display: grid;
`;

const VehicleDataInfoTitle = styled.div`
  font-size: 14px;
  line-height: 22px;
  color: ${(props) => props.theme.colors.MediumGray};
`;
const VehicleDataInfoDescription = styled.div`
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.colors.DarkBlue};
`;

const SectionTitle = styled.div`
  font-weight: bold;
  color: ${(props) => props.theme.colors.black};
`;
const WrapperResume = styled.div`
  padding: 40px 15px 0 0;
  margin: auto;
  height: 420px;
  display: grid;
  max-width: 300px;
  span {
    font-weight: bold;
    color: ${(props) => props.theme.colors.MediumGray};
  }
`;
const DivWrapperSpace = styled.div`
  padding: 15px 25px;
`;
const WrapperInpectionInfo = styled.div`
  height: 184px;
  display: grid;
`;
const BoxResumeEvaluation = styled.div`
  background: ${(props) => props.theme.colors.Grey30};
  border-radius: 4px;
  min-height: 39px;
  padding: 9px 15px;
`;
const BoxResumeValue = styled.div`
  min-height: 39px;
  background: ${(props) => props.theme.colors.BlueManhein};
  border-radius: 4px;
  padding: 9px 15px;
  span {
    color: ${(props) => props.theme.colors.white};
  }
`;

const ColInspectionResume = styled(Col)`
  background: ${(props) => props.theme.colors.BlueManhein};
  border: 1px solid ${(props) => props.theme.colors.BlueManhein};
`;

const TitleInspection = styled.div`
  font-weight: bold;
  color: ${(props) => props.theme.colors.white};
`;
const InfoInspection = styled.div`
  color: ${(props) => props.theme.colors.white};
`;

export {
  BoxResumeEvaluation,
  WrapperResume,
  IconCircle,
  InfoInspection,
  BoxResumeValue,
  SectionTitle,
  TitleInspection,
  VehicleDataInfo,
  VehicleDataInfoDescription,
  VehicleDataInfoTitle,
  WrapperBoxCheckout,
  DivWrapperSpace,
  WrapperInpectionInfo,
  ColInspectionResume,
  ColBorder,
  IconCircleCalendar,
};
