import styled, { css } from 'styled-components';
import { darken } from 'polished';

interface Props {
  selected: any;
}

const Wrapper = styled.div`
  background-color: ${props => darken(0.1, props.theme.colors.DarkBlue)};

  display: flex;
  align-items: center;
  justify-content: center;
`;

const ItemWrapper = styled.button<Props>`
  background-color: ${({ theme }) => theme.colors.DarkBlue};
  border: 0;

  width: 182px;
  height: 104px;

  margin: 0 5px;

  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  :focus{
    outline: none;   
  }

  :hover {
    background-color: ${props => darken(0.05, props.theme.colors.DarkBlue)};
  }

  ${({ selected, theme }) => selected && css`
    background-color: ${theme.colors.ManheimYellow};

    :hover {
      background-color: ${darken(0.05, theme.colors.ManheimYellow)};
    }

    > div {
      border-color: ${theme.colors.white};
    }

    ::after {
      content: '';

      width: 15px;
      height: 15px;

      position: absolute;
      bottom: calc(-15px/2);
      left: calc(50% - (15px/2));

      transform: rotate(45deg);

      background-color: ${theme.colors.ManheimYellow};

    }
  `}
`;

const IconWrapper = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.ManheimYellow};
  border-radius: 100px;

  width: 40px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

`;

const Label = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.Default};
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 150%;
  
  margin: 16px 0 0 0;
  
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
`

export { Wrapper, IconWrapper, ItemWrapper, Label };