import styled, { css } from 'styled-components';
import { darken } from 'polished';

interface Props {
  right: boolean;
  collapse: any;
}

const Wrapper = styled.button<Props>`
    height: 24px;
    width: 24px;
    background-color: ${props => props.theme.colors.ManheimYellow};
    border: 1px solid ${props => props.theme.colors.ManheimYellow};
    border-radius: 100px;

    color: ${props => props.theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    ${props => props.right && 'transform: rotate(180deg);'}

    :first-child {
      margin-right: 16px;
    }

    :disabled {
      background-color: transparent;
      border-color: ${props => props.theme.colors.white};
    }

    :hover:not(:disabled) {
      background-color: ${props => darken(0.1, props.theme.colors.ManheimYellow)};
      border-color: ${props => darken(0.1, props.theme.colors.ManheimYellow)};
      text-decoration: none;
    }

    ${({ collapse, theme }) => collapse && css`
      background-color: ${theme.colors.DarkBlue};
      border: 0;

      height: 18px;
      width: 18px;

      :disabled, :hover:not(:disabled), :first-child {
        background-color: ${theme.colors.DarkBlue};
        border: 0;
        text-decoration: none;
        margin: 0;
      }

      transform: rotate(90deg);

      svg {
        height: 8px;
      }

      :focus{
        outline: none;   
      }
    `}
`;

export { Wrapper };
