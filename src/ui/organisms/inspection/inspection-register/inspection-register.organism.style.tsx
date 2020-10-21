import { Row } from "react-bootstrap";
import styled from "styled-components";

const RowContent = styled(Row)`
  @media (max-width: 992px) {
    margin: 0 -15px 0 -15px;
  }
  margin: 0 -15px 0 86px;
`;

const HelpText = styled.div`
  font-size: 14px;
  line-height: 22px;
  color: ${(props) => props.theme.colors.MediumGray};
`;

const WrapperContentStep = styled.div`
  padding-bottom: 70px;
  label:first-child {
    font-weight: bold;
    font-size: 14px;
    line-height: 22px;
    color: ${(props) => props.theme.colors.Dark};
  }
`;

const BtSubmit = styled.div`
  padding-top: 52px;
  text-align: right;
`;

export { RowContent, HelpText, WrapperContentStep, BtSubmit };
