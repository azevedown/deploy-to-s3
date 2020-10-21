import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface Props {
  selected: any;
}


const Wrapper = styled.div`
  background: transparent;

  position: absolute;
  left: 138px;

  z-index: 1;
  overflow: hidden;
`;

const H2 = styled.h2`
  color: ${({ theme }) => theme.colors.Dark};

  font-family: ${({ theme }) => theme.fontFamily.Default};
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 32px;

  text-align: center;

  margin-bottom: 26px;
`;

const RowStyled = styled(Row)`
`;

const ColStyled = styled(Col)`
`;

const ControlsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 48px;
`

const Controls = styled.button<Props>`
  width: 15px;
  height: 15px;

  border: 0;

  border-radius: 100px;

  background-color: ${({selected}) => ({ theme }) => selected ?  theme.colors.DarkBlue : theme.colors.Platinum};

  :not(:first-child) {
    margin-left: 22px;
  }

  :focus{
    outline: none;   
  }
`

export { Wrapper, H2, RowStyled as Row, ColStyled as Col, Controls, ControlsWrapper };