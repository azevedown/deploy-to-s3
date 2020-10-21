import styled from 'styled-components';

interface Props {
  selected?: boolean;
  title: string;
}

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 90px;

  button {
    position: absolute;
  } 

  > .row > div {
    z-index: 1;

    display: flex;
    justify-content: space-between;
  }

  ::after {
    content: '';

    border-top: 1px solid ${props => props.theme.colors.DarkGray};

    width: 100%;
    height: 1px;
    
    position: absolute;
    left: 0;
    top: calc(50% + 1px);

    opacity: 0.35;
  }
`;

const Title = styled.h2`
  font-family: ${props => props.theme.fontFamily.Helvetica};

  font-size: 24px;
  font-weight: bold;
  color: ${props => props.theme.colors.BlueManhein};
  text-align: center;
  letter-spacing: -0.01em;
  line-height: 32px;
`

const CircleNumber = styled.div<Props>`
  background-color: ${props => props.theme.colors.Grey74};
  
  position: relative;

  font-family: ${props => props.theme.fontFamily.Helvetica};
  font-size: 14px;
  font-weight: bold;
  color: ${props => props.theme.colors.white};
  line-height: 22px;

  cursor: default;

  height: 35px;
  width: 35px;

  border-radius: 100px;
  
  display: flex;
  align-items: center;
  justify-content: center;

  ${({selected, theme}) => selected && `
    background-color: ${theme.colors.ManheimYellow};
    color: ${theme.colors.BlueManhein};
  `}

  ::after {
    content: "${({title}) => title}";
    height: 20px;

    font-family: ${props => props.theme.fontFamily.Helvetica};
    font-size: 14px;
    font-weight: bold;
    color: ${props => props.theme.colors.ManheimYellow};
    text-align: center;
    line-height: 22px;
    text-transform: uppercase;

    position: absolute;
    top: 44px;

    white-space: nowrap;
  }
`

export { Wrapper, Title, CircleNumber }