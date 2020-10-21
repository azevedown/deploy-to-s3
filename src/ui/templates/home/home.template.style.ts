import styled from 'styled-components';
import Container from 'react-bootstrap/Container';


const ContainerStyled = styled(Container)`
  background-color: ${({ theme }) => theme.colors.GhostWhite};
  padding: 0;
`;

export { ContainerStyled as Container };
