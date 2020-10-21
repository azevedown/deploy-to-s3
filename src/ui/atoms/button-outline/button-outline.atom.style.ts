import styled, { css } from 'styled-components';
import Button from 'react-bootstrap/Button';
import { darken } from 'polished';
import { ButtonProps } from '../../../models';

const ButtonStyled = styled(Button) <ButtonProps>`
    height: 40px;
    max-width: 487px;
    background-color: transparent;
    border-radius: 100px;
    border: 1px solid ${props => props.theme.colors.white};

    font-weight: bold;
    color: ${props => props.theme.colors.white};
    text-align: center;

    :not(:last-child) {
      margin-right: 14px;
    }

    :hover {
      background-color: ${props => darken(0.1, props.theme.colors.white)};
      color: ${props => darken(0.1, props.theme.colors.black)};
      text-decoration: none;
    }

    ${({ sizex }) =>
      sizex === 'md' ? css`min-width: 176px;` :
      sizex === 'sm' ? css`min-width: 72px;` :
      sizex === 'lg' ? css`min-width: 280px;` :
        css` width: 100%; `
    }
`;

export { ButtonStyled as Button };
