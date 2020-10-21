import styled from 'styled-components';

interface Props {
  success?: boolean;
  current: boolean;
  hide: boolean;
}

const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.Grey30};

  position: relative;
  margin-bottom: 11px;
  padding: 15px;
`

const Title = styled.h2`
  font-family: ${props => props.theme.fontFamily.Helvetica};

  font-size: 16px;
  font-weight: bold;
  color: ${props => props.theme.colors.BlueManhein};
  line-height: 25px;

  margin: 0;
`

const ButtonsWrapper = styled.div`
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Button = styled.button<Props>`
  width: 55px;
  height: 25px;

  background-color: ${props => props.success ? props.theme.colors.Confirm : props.theme.colors.Error};
  opacity: ${props => props.current ? .5 : 1};

  font-family: ${props => props.theme.fontFamily.Helvetica};

  font-size: 12px;
  font-weight: bold;
  color: ${props => props.theme.colors.white};
  text-align: center;

  border-radius: 10px;
  border: 0;

  :focus {
    outline: none;
  }

  ${props => props.hide && `
    opacity: 0;
    pointer-events: none;
  `}
`


export { Wrapper, Title, Button, ButtonsWrapper }