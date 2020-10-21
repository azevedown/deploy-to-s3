/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.white};
  }

  * {
    font-family: ${(props) => props.theme.fontFamily.Helvetica}
  }

  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  .show{
    display: initial;
  }
  .hide{
    display: none;
  }

  .form-default {
    .form-label {
          font-family: ${(props) => props.theme.fontFamily.Helvetica};
          font-size: 14px;
          font-weight: bold;
          color: ${(props) => props.theme.colors.Dark};
          line-height: 22px;
      }
      input {
          height: 40px;
          background-color: ${(props) => props.theme.colors.white};
          border: 1px solid ${(props) => props.theme.colors.DarkGray};
          border-radius: 4px;
      }
    }
`;
