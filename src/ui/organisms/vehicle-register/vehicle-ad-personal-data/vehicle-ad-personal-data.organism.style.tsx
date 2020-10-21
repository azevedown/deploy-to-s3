import { Row } from "react-bootstrap";
import styled from "styled-components";

const RowContent = styled(Row)`
  @media (max-width: 992px) {
    margin: 0 -15px 0 -15px;
  }
  margin: 0 -15px 0 86px;
`;

const DivButtonAdvance = styled.div`
  text-align: right;
  margin: 0 0 32px 0;
`;

const Box = styled.div`
  border: 1px solid rgba(168, 170, 172, 0.35);
  box-sizing: border-box;
  border-radius: 10px;
  margin: 0 0 26px 0;
`;

const BoxTitle = styled.div`
  min-height: 40px;
  background: ${props => props.theme.colors.DarkBlue};
  border-radius: 10px 10px 0px 0px;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;

  display: flex;
  align-items: center;

  padding: 0 32px;

  color: ${props => props.theme.colors.white};
`;

const BoxContent = styled.div`
    padding: 20px;
    max-width: 700px;
    margin: auto;
`;

export { RowContent, DivButtonAdvance, Box, BoxTitle, BoxContent };
