import styled from 'styled-components';

interface Props {
  selected: any;
}

const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 112px;
`;

const DepositionsWrapper = styled.div`
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  padding-top: 112px;
`;

const H2 = styled.h2`
  color: ${({ theme }) => theme.colors.Dark};

  font-family: ${({ theme }) => theme.fontFamily.Default};
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 32px;

  text-align: center;
  white-space: pre-line;
  
  margin-bottom: 26px;
`;


const ControlsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 48px;
`

const Controls = styled.button<Props>`
  width: 15px;
  height: 15px;

  border-radius: 100px;
  border: 0;
  
  background-color: ${({selected}) => ({ theme }) => selected ?  theme.colors.DarkBlue : theme.colors.Platinum};

  :not(:first-child) {
    margin-left: 22px;
  }
  
  :focus{
    outline: none;   
  }
`


export { Wrapper, DepositionsWrapper, H2, Controls, ControlsWrapper }