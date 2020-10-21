import { Row } from "react-bootstrap";
import styled from "styled-components";

const RowContent = styled(Row)`
  @media (max-width: 992px) {
    margin: 0 -15px 54px -15px;
  }
  margin: 0 -15px 54px 86px;
`;

const MsgToFollow = styled.div`
  font-size: 16px;
  line-height: 26px;
  margin: 30px 0 0 0;
  font-weight: bold;
`;

const ContentModal = styled.div`
  color: ${(props) => props.theme.colors.Dark};
  margin: 60px 0 10px 0;
  text-align: center;
`;

export { RowContent, MsgToFollow, ContentModal };
