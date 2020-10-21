import styled from 'styled-components';
import Collapse from 'react-bootstrap/esm/Collapse';

const Wrapper = styled.div`
  background: transparent;

  margin-bottom: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const ContentWrapper = styled.div<any>`
  background-color: ${({ theme }) => theme.colors.GhostWhite};

  width: 100%;
  padding: 0 24px;

  ${({ isOpen }) => isOpen && `
    padding: 22px 24px;
  `};

  transition: padding 300ms;

  border: 1px solid ${({ theme }) => theme.colors.Platinum};

  text-align: left;

  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);
`;

const MainWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-left: 6px solid ${({ theme }) => theme.colors.ManheimYellow};

  width: 100%;
  height: 80px;

  padding: 0 18px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.Default};
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;

  margin: 0;

  color: ${({ theme }) => theme.colors.Dark};
`

const Text = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.Default};
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;

  margin: 0;
  
  white-space: pre-line;

  color: ${({ theme }) => theme.colors.Dark};
`

const CollapseStyled = styled(Collapse)`
`

export { Wrapper, MainWrapper, ContentWrapper, CollapseStyled as Collapse, Title, Text };