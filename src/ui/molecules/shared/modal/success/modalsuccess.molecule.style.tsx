import styled from "styled-components";

const ModalBody = styled.div`
  background-color: ${(props) => props.theme.colors.GhostWhite};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 35px 60px 75px;
  border-radius: 5px;
`;

const Icon = styled.div`
  margin: 15px 0;
  text-align: center;
`;

const Title = styled.h2`
  font-family: ${(props) => props.theme.fontFamily.Helvetica};
  font-size: 24px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.DarkBlue};
  text-align: center;
  line-height: 32px;

  margin-bottom: 32px;
`;

const SubTitle = styled.h4`
  font-family: ${(props) => props.theme.fontFamily.Helvetica};
  font-size: 14px;
  color: ${(props) => props.theme.colors.Dark};
  text-align: center;
  line-height: 24px;

  margin-bottom: 32px;
`;

const Doubts = styled.h3`
  font-family: ${(props) => props.theme.fontFamily.Helvetica};
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.Dark};
  text-align: center;
  line-height: 28px;

  margin-bottom: 32px;
`;

export { ModalBody, Title, SubTitle, Doubts, Icon };
