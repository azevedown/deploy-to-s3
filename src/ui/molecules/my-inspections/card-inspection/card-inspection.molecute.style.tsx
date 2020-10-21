import { DefaultTheme } from "c4u-web-components";
import { Row } from "react-bootstrap";
import styled from "styled-components";
import { StatusPayment, StatusReport } from "../../../../models";

const minHeightBox = "236px";

interface DatailsProps {
  close: boolean;
}
interface StatusPaymentProps {
  status: StatusPayment;
}
interface StatusReportProps {
  status: StatusReport;
}

const BoxCardInspection = styled.div`
  background: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.DarkGrayOpacity};
  box-sizing: border-box;
  border-radius: 4px 4px 0px 4px;
  min-height: ${minHeightBox};
  display: grid;
  position: relative;
  margin-bottom: 30px;
`;

const getColorStatusReport = (status: StatusReport, theme: DefaultTheme) => {
  switch (status) {
    case StatusReport.Refused:
      return theme.colors.Error;
    case StatusReport.Pending:
      return theme.colors.BlueManhein;
    case StatusReport.Approved:
      return theme.colors.Confirm;
    case StatusReport.Appointments:
      return theme.colors.Warning;

    default:
      return "";
  }
};

const StatusBarLateral = styled.div<StatusReportProps>`
  background: ${(props) => getColorStatusReport(props.status, props.theme)};
  border-radius: 4px 0px 0px 4px;
  width: 14px;
  height: 100%;
`;

const Content = styled.div`
  height: 100%;
  display: grid;
  hr {
    margin: 0 15px;
  }
`;

const Label = styled.div`
  color: ${(props) => props.theme.colors.MediumGray};
`;

const WrapperReportDid = styled.div`
  display: flex;
  div {
    margin-right: 4px;
    font-weight: bold;
  }
`;

const Value = styled.div`
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.colors.DarkBlue};
`;
const CarCirle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  background: ${(props) => props.theme.colors.white};
  border: 0.928571px solid ${(props) => props.theme.colors.DarkBlue};
  box-sizing: border-box;
  border-radius: 64px;
  margin: auto;
`;
const WrapperInspection = styled.div`
  margin: 28px auto 0 auto;
  max-width: 100px;
  img {
    max-width: 100px;
    margin: 23px auto 0 auto;
  }
  @media (max-width: 767px) {
    margin-top: 50px;
  }
`;

const getColorStatus = (status: StatusPayment, theme: DefaultTheme) => {
  switch (status) {
    case StatusPayment.Refused:
      return theme.colors.Error;
    case StatusPayment.Pending:
      return theme.colors.Warning;
    case StatusPayment.Approved:
      return theme.colors.Confirm;

    default:
      return "";
  }
};

const StatusFlyer = styled.div<StatusPaymentProps>`
  width: 256px;
  height: 40px;
  background: ${(props) => getColorStatus(props.status, props.theme)};
  position: absolute;
  top: 42px;
  right: -8px;
  color: ${(props) => props.theme.colors.white};
  padding: 11px 18px;
  b {
    text-transform: uppercase;
  }
  svg {
    width: 16px;
  }
  div {
    margin: 1px 0 0 226px;
  }
  @media (max-width: 1200px) {
    top: 0;
  }
`;
const Row1 = styled(Row)`
  margin-top: 35px;
`;
const Row2 = styled(Row)`
  margin-top: 30px;
`;
const Details = styled.div<DatailsProps>`
  font-weight: bold;
  font-size: 12px;
  line-height: 20px;
  color: ${(props) =>
    props.close ? props.theme.colors.Grey74 : props.theme.colors.DarkBlue};
  text-transform: uppercase;
  margin: 0 8px 0 0;
`;

const WrapperDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 50px;
  border-top: 1px solid ${(props) => props.theme.colors.DarkGrayOpacity};
  margin: auto 15px 0 15px;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  height: 100%;
`;
const DivContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 25px;
`;
const DivStatus = styled.div`
  height: 100%;
`;

const InfoReport = styled.div`
  max-width: 176px;
  margin: 0 0 0 auto;
  text-align: center;
  @media (max-width: 992px) {
    margin: auto;
  }
`;
const InfoReportStatus = styled.div<StatusReportProps>`
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => getColorStatusReport(props.status, props.theme)};
  margin-top: 6px;
  margin-bottom: 10px;
`;

export {
  Row1,
  Row2,
  StatusFlyer,
  BoxCardInspection,
  WrapperInspection,
  StatusBarLateral,
  Content,
  Label,
  Value,
  CarCirle,
  Details,
  WrapperDetails,
  WrapperReportDid,
  Wrapper,
  DivContent,
  DivStatus,
  InfoReport,
  InfoReportStatus,
};
