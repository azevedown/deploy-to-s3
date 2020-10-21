import { Row } from "react-bootstrap";
import styled from "styled-components";

const RowContent = styled(Row)`
  @media (max-width: 992px) {
    margin: 0 -15px 0 -15px;
  }
  margin: 0 -15px 0 86px;
`;

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
`;
const AdviceMinPhotos = styled.div`
  color: ${(props) => props.theme.colors.Dark};
  font-size: 16px;
  line-height: 24px;
  text-align: center;
`;

const ButtonBottomWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  button {
    margin: 0 0 0 24px;
  }

  margin: 40px 0;
`;

const InnerWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 10px;

  padding: 0 24px 16px;

  .row {
    margin-left: -16px;
    margin-right: -16px;

    > div {
      padding-right: 16px;
      padding-left: 16px;
    }
  }
`;

const InnerSubtitle = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.Roboto};
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 26px;

  margin: 40px 0;
`;

const InnerHeader = styled.p`
  background-color: ${(props) => props.theme.colors.DarkBlue};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  margin: 0;
  padding: 16px 24px;

  font-family: ${({ theme }) => theme.fontFamily.Roboto};
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 26px;
  color: ${(props) => props.theme.colors.white};
`;

export {
  RowContent,
  Wrapper,
  InnerHeader,
  InnerWrapper,
  InnerSubtitle,
  ButtonBottomWrapper,
  AdviceMinPhotos,
};
