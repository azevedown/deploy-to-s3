import styled from "styled-components";

const Title = styled.h1`
  font-family: ${(props) => props.theme.fontFamily.Helvetica};
  font-size: 20px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.DarkBlue};
  line-height: 28px;
`;

const SubTitle = styled.h2`
  font-family: ${(props) => props.theme.fontFamily.Helvetica};
  font-size: 14px;
  color: ${(props) => props.theme.colors.DarkGray};
  line-height: 22px;
`;

const DivButton = styled.div``;

const DivText = styled.div`
  margin: 0 0 0 32px;
`;

const Wrapper = styled.div`
  display: flex;
  min-height: 98px;
`;

const DivContent = styled.div`
  display: inline-flex;
  margin: auto 0;
`;

const WrapperHeaderMainTemplate = styled.div`
  hr {
    margin: 0 0 20px 0;
  }
`;

export {
  Title,
  SubTitle,
  DivButton,
  DivText,
  Wrapper,
  DivContent,
  WrapperHeaderMainTemplate,
};
