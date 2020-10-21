import styled from 'styled-components';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.DarkBlue};
  color: ${props => props.theme.colors.white};
  display: flex;
  justify-content: center;
  padding-top: 40px;

`;

const CEPWrapper = styled.div`
  background: #194877;
  
  width: 100%;

  display: flex;
  align-items: center;

  padding: 40px 0;
`;

const RowStyled = styled(Row)`
  width: 1172px;

  @media (min-width:767px) {
    margin: 0 -25px 0 -30px;
  }

  @media (min-width:990px) {
    margin: 0 -50px 0 -60px;
  }
  
  @media (min-width:1200px) {
    margin: 0 -75px 0 -85px;
  }
`;

const ColStyled = styled(Col)`
    text-align: center;
`;


export { Wrapper, CEPWrapper, RowStyled as Row, ColStyled as Col }