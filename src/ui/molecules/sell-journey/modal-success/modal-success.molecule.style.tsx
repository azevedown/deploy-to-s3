import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 11px;
  padding: 15px 16%;

  svg {
    margin: 20px auto 10px;
    display: block;
    width: 30px;
    height: 30px;
  }

  button {
    display: block;
    margin: 25px auto 29px;
  }
`

const Title = styled.h2`
  font-family: ${props => props.theme.fontFamily.Montserrat};
  color: ${props => props.theme.colors.BlueManhein};

  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;

  text-align: center;
  
  white-space: pre-line;

  margin: 0;
`

const Text = styled.p`
  font-family: ${props => props.theme.fontFamily.OpenSans};
  color: ${props => props.theme.colors.Dark};

  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 24px;
  
  text-align: center;

  white-space: pre-line;

  margin: 40px 0;
`


export { Wrapper, Title, Text }