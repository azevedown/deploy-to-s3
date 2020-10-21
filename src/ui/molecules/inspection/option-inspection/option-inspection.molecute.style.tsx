import styled from "styled-components";

interface IProps {
  active?: boolean;
}

const FavoriteLabel = styled.div`
  width: 280px;
  height: 98px;
  background: #ffc20e;
  border: 1px solid rgba(168, 170, 172, 0.35);
  box-sizing: border-box;
  border-radius: 10px 10px 0px 0px;
  font-weight: bold;
  font-size: 10px;
  line-height: 12px;
  color: ${(props) => props.theme.colors.BlueManhein};
  padding: 3px;
  text-align: center;
`;
const EmptyLabel = styled.div`
  width: 280px;
  height: 98px;
`;

const Title = styled.div<IProps>`
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  color: ${(props) =>
    props.active
      ? props.theme.colors.ManheimYellow
      : props.theme.colors.BlueManhein};
`;

const Detail = styled.div<IProps>`
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  color: ${(props) =>
    props.active ? props.theme.colors.white : props.theme.colors.MediumGray};
  margin: 10px 0 14px 0;
`;

const LabelValue = styled.div<IProps>`
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  color: ${(props) =>
    props.active ? props.theme.colors.white : props.theme.colors.Dark};
  margin: 8px 0 0 0;
`;

const Value = styled.div<IProps>`
  font-weight: bold;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  letter-spacing: -0.15px;
  color: ${(props) =>
    props.active ? props.theme.colors.ManheimYellow : props.theme.colors.Dark};
`;

const Condictions = styled.div<IProps>`
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  color: ${(props) =>
    props.active ? props.theme.colors.white : props.theme.colors.Dark};
`;

const WrapperBoxOption = styled.div<IProps>`
  margin: -80px 0 0 0;
  background: ${(props) =>
    props.active ? props.theme.colors.BlueManhein : props.theme.colors.white};
  width: 280px;
  height: 262px;
  left: 320px;
  top: 720px;
  display: flex;
  border: 1px solid ${(props) => props.theme.colors.DarkGrayOpacity};
  box-sizing: border-box;
  border-radius: 10px;

  hr {
    margin: 0;
  }

  button {
    margin: 18px 0 0 0;
  }

  :hover {
    background-color: ${(props) => props.theme.colors.BlueManhein};
  }

  :hover ${Title} {
    color: ${(props) => props.theme.colors.ManheimYellow};
  }
  hr {
    background-color: ${(props) =>
      props.active
        ? props.theme.colors.white
        : props.theme.colors.DarkGrayOpacity};
  }

  :hover ${Detail} {
    color: ${(props) => props.theme.colors.white};
  }
  :hover hr {
    background-color: ${(props) => props.theme.colors.white};
  }
  :hover ${LabelValue} {
    color: ${(props) => props.theme.colors.white};
  }
  :hover ${Value} {
    color: ${(props) => props.theme.colors.ManheimYellow};
  }
  :hover ${Condictions} {
    color: ${(props) => props.theme.colors.white};
  }
`;

const BoxContentOption = styled.div<IProps>`
  margin: auto;
`;

export {
  BoxContentOption,
  Condictions,
  Detail,
  EmptyLabel,
  FavoriteLabel,
  LabelValue,
  Title,
  Value,
  WrapperBoxOption,
};
