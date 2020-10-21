import styled from 'styled-components';

const Wrapper = styled.div`
  button {
    position: absolute;
  } 
`;

const Title = styled.h2`
  font-family: ${props => props.theme.fontFamily.Helvetica};;

  font-size: 24px;
  font-weight: bold;
  color: ${props => props.theme.colors.BlueManhein};
  text-align: center;
  letter-spacing: -0.01em;
  line-height: 32px;
`

export { Wrapper, Title }