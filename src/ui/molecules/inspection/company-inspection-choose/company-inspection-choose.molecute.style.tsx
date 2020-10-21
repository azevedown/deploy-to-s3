import { Row } from "react-bootstrap";
import styled from "styled-components";

interface IBoxInspectionProps {
  inactive: boolean;
}

const BoxInspection = styled.div<IBoxInspectionProps>`
  background: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.DarkGrayOpacity};
  box-sizing: border-box;
  border-radius: 4px;
  width: 176px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  margin: 21px 32px 0 0;
  img {
    filter: ${(props) =>
      props.inactive ? "grayscale(1) brightness(1) opacity(0.5)" : "none"};
  }
`;

const WrapperBoxInspection = styled.div`
  display: flex;
  align-items: center;
`;
const RowOptionsInpection = styled(Row)`
  margin-top: 32px;
`;

export { WrapperBoxInspection, BoxInspection, RowOptionsInpection };
