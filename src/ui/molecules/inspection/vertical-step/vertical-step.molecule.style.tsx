import { Row } from "react-bootstrap";
import styled from "styled-components";

interface IProps {
  active: boolean;
}

const RowContent = styled(Row)`
  @media (max-width: 992px) {
    margin: 0 -15px 0 -15px;
  }
  margin: 0 -15px 0 86px;
`;

const Step = styled.div<IProps>`
  width: 40px;
  height: 40px;
  background: ${(props) =>
    !props.active ? props.theme.colors.Confirm : props.theme.colors.Grey74};
  border-radius: 40px;

  align-items: center;
  text-align: center;
  align-content: center;
  display: grid;

  margin: auto;

  svg {
    margin: auto;
  }
`;

const Line = styled.div<IProps>`
  width: 4px;
  height: 100%;
  background: ${(props) =>
    !props.active ? props.theme.colors.Confirm : props.theme.colors.Grey74};
  margin: auto;
`;

const WrapperStep = styled.div`
  max-width: 100px;
  height: 100%;
  overflow: hidden;
`;

const HelpText = styled.div`
  font-size: 14px;
  line-height: 22px;
  color: ${(props) => props.theme.colors.MediumGray};
`;

export { Step, Line, WrapperStep, RowContent, HelpText };
