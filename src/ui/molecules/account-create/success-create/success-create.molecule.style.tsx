import styled from "styled-components";

const H2 = styled.h1`
  color: ${({ theme }) => theme.colors.GhostWhite};
  font-family: ${({ theme }) => theme.fontFamily.Roboto};
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 40px;
`;

const H3 = styled.h3`
  color: ${({ theme }) => theme.colors.DarkBlue};
  font-family: ${({ theme }) => theme.fontFamily.Roboto};
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
`;

const H4 = styled.h4`
  color: ${({ theme }) => theme.colors.GhostWhite};
  font-family: ${({ theme }) => theme.fontFamily.Roboto};
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 28px;
`;

const Icon = styled.div`
  margin: 35px 0 15px;
  text-align: center;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;

  width: 488px;
  height: 346px;
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

const DivButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 12px;
`;

export { H2, H3, H4, Box, Icon, DivButton, BoxTitles };
