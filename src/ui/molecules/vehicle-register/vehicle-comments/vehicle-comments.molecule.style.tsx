import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;

  margin: 0 0 40px;
  padding-top: 40px;

  background: transparent;
  position: relative;

  ::after {
    content: '';
    height: 1px;
    width: calc(100% + 48px);

    position: absolute;
    top: 0px;
    left: -24px;

    background-color: ${props => props.theme.colors.Platinum};
  }

`


const TextBold = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.Default};
  color: ${props => props.theme.colors.Dark};
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 26px;
`

const TextBoldSmall = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.Default};
  color: ${props => props.theme.colors.Dark};
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 21px;
`


export { Wrapper, TextBold, TextBoldSmall };