import { darken } from "polished";
import styled from "styled-components";

const BoxLocation = styled.div`
  background: ${(props) => props.theme.colors.white};

  border: 1px solid ${(props) => props.theme.colors.DarkGrayOpacity};
  box-sizing: border-box;
  border-radius: 10px;

  padding: 22px;
`;
const LocationHelpText = styled.div`
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  color: ${(props) => props.theme.colors.black};
`;
const ResultsFound = styled.div`
  margin: 38px 0 12px 0;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.colors.black};
`;
const LocationFileds = styled.div`
  height: 40px;
  margin-top: 16px;
  .input-group-prepend span {
    background-color: ${(props) => props.theme.colors.white};
  }
  input {
    color: ${(props) => props.theme.colors.MediumGray};
    font-size: 14px !important;
    line-height: 24px !important;
    height: 40px;
    border-left: none;
  }
  button {
    width: 72px;
    background: ${(props) => props.theme.colors.ManheimYellow};
    border-radius: 0px 4px 4px 0px;
    font-weight: bold;
    font-size: 14px !important;
    line-height: 22px !important;
    color: ${(props) => props.theme.colors.DarkBlue};

    :hover {
      background-color: ${(props) =>
        darken(0.1, props.theme.colors.ManheimYellow)};
      color: ${(props) => darken(0.1, props.theme.colors.DarkBlue)};
      text-decoration: none;
    }
  }
`;

export { BoxLocation, LocationHelpText, LocationFileds, ResultsFound };
