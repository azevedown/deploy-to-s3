import styled from "styled-components";

// ----------IMAGES
import vector1 from "../../assets/images/vector1-yellow-rev.png";
import vector2 from "../../assets/images/vector2-yellow-rev.png";

const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.DarkBlue};
`;

const Container = styled.div`
  color: ${(props) => props.theme.colors.white};
  height: 100vh;
  max-width: 1216px;
  margin: auto;
  display: flex;
`;

const SectionImage = styled.div`
  flex: 1;
  margin-top: 26px;
`;

const Image = styled.img`
  z-index: 1;
  position: relative;
  top: -20px;
  left: 160px;
`;

const ImageWrapper = styled.div`
  position: relative;

  ::before {
    content: "";
    width: 295px;
    height: 315px;
    background-image: url(${vector1});
    background-repeat: no-repeat;
    position: absolute;
  }

  ::after {
    content: "";
    width: 320px;
    height: 350px;
    background-image: url(${vector2});
    background-repeat: no-repeat;
    position: absolute;
    top: 19px;
    left: 350px;
  }
`;

const SectionForm = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.colors.DarkBlue};
  text-align: left;
  margin-top: 46px;
`;

const DivButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 12px;
`;

const A = styled.a`
  font-size: 14px;
  font-weight: 700;
  text-transform: lowercase;
  color: ${({ theme }) => theme.colors.DarkBlue};
  margin-top: 10px;
`;

export {
  Wrapper,
  Container,
  SectionImage,
  Image,
  ImageWrapper,
  SectionForm,
  DivButton,
  A,
};
