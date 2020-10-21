import styled from 'styled-components';
import { ButtonPrimary } from 'c4u-web-components';

const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.DarkBlue};
  text-align: left;
`;

const H1 = styled.h1`
  color: ${({ theme }) => theme.colors.GhostWhite};

  font-family: ${({ theme }) => theme.fontFamily.Default};
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 32px;
`;

const H3 = styled.h3`
  font-family: ${({ theme }) => theme.fontFamily.Default};
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;

  color: ${({ theme }) => theme.colors.GhostWhite};
`

const H4 = styled.h4`
  font-family: ${({ theme }) => theme.fontFamily.Default};
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;

  color: ${({ theme }) => theme.colors.GhostWhite};
  margin-bottom: 32px;
 `

const Button = styled(ButtonPrimary)`
  color: ${({ theme }) => theme.colors.GhostWhite};
  background-color: ${({ theme }) => theme.colors.ManheimYellow};
  margin-bottom: 80px;

  :hover {
    color: ${({ theme }) => theme.colors.GhostWhite};
  }
`

export { Wrapper, H1, H3, H4, Button };