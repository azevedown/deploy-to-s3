import styled from "styled-components";
import { FormGroup } from "react-bootstrap";

const H2 = styled.h1`
  color: ${({ theme }) => theme.colors.GhostWhite};
  font-family: ${({ theme }) => theme.fontFamily.Roboto};
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 40px;
`;

const H4 = styled.h4`
  color: ${({ theme }) => theme.colors.GhostWhite};
  font-family: ${({ theme }) => theme.fontFamily.Roboto};
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 28px;
`;

const Box = styled.div`
  width: 488px;
  height: auto;
  margin: 45px 0;
  padding: 58px 40px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.GhostWhite}; ;
`;

const BoxTitles = styled.div`
  width: 488px;
  height: auto;
  margin: 45px 0;
`;

const Formgroup = styled(FormGroup)`
  margin-bottom: 26px;
`;

const DivButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 12px;
`;

const A = styled.a`
  font-size: 14px;
  font-weight: 700;
  text-transform: lowercase;
  color: ${({ theme }) => theme.colors.DarkBlue};
  margin-top: 10px;
`;

export { DivButton, A, H2, H4, Box, BoxTitles, Formgroup };
