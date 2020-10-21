import styled from 'styled-components';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.DarkBlue};
  text-align: left;
  margin-bottom: 30px;
`;

const H1 = styled.h1`
  color: ${({ theme }) => theme.colors.GhostWhite};
  font-family: ${({ theme }) => theme.fontFamily.Roboto};
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 26px;
`;

const H4 = styled.h4`
  font-family: ${({ theme }) => theme.fontFamily.Default};
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 21px;
  
  text-align: left;

  color: ${({ theme }) => theme.colors.ManheimYellow};
  margin-bottom: 32px;
 `


const RowStyled = styled(Row)`

`;

const ColStyled = styled(Col)`
  text-align: left;
`;

const Image = styled.img`
  z-index: 1;
  position: absolute;
  top: -20px;
`

const ImageWrapper = styled.div`
  position: relative;

  ::after {
    content: '';
    width: 185px;
    height: 185px;
    background-color: ${({theme}) => theme.colors.ManheimYellow};
    position: absolute;
    transform: skew(-23deg, 0deg) scaleX(.5);
    border-top-left-radius: 16px;
    border-top-right-radius: 26px;
    border-bottom-right-radius: 16px;
    border-bottom-left-radius: 26px;
    top: 36px;
    left: -47px;
  }

  ::before {
    content: '';
    width: 348px;
    height: 351px;
    background-color: ${props => props.theme.colors.ManheimYellow};
    position: absolute;
    transform: skew(-23deg,0deg) scaleX(.5);
    border-top-left-radius: 16px;
    border-top-right-radius: 26px;
    border-bottom-right-radius: 16px;
    border-bottom-left-radius: 26px;
    top: -40px;
    right: -280px;
  }

  .carousel-inner {
    overflow: visible;
  }
`


export { Wrapper, H1, H4, RowStyled as Row, ColStyled as Col, Image, ImageWrapper };