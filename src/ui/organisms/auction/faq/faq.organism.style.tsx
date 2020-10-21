import styled from 'styled-components';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.DarkBlue};
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 112px;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.white};

  font-family: ${({ theme }) => theme.fontFamily.Default};
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 32px;
  
  text-align: center;

  margin: 40px 0 8px;
  `;

const Subtitle = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  
  font-family: ${({ theme }) => theme.fontFamily.Default};
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
  
  text-align: center;
  margin: 0 0 40px;
`;

const RowStyled = styled(Row)`
  max-width: 1140px;
  width: 100%;
  margin: 80px auto;s
`;

const ColStyled = styled(Col)`
`;



export { Wrapper, Title, Subtitle, RowStyled as Row, ColStyled as Col }