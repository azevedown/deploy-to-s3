import { DefaultTheme } from "c4u-web-components";
import styled from "styled-components";

interface IStatusBarProps {
  active: boolean;
  last?: boolean;
}

const WrapperStatus = styled.div`
  padding: 28px 0;
  overflow: hidden;
`;
const WrapperStatusItems = styled.div`
  display: grid;
  justify-content: center;
  text-align: center;
  align-items: center;
  position: relative;
  min-height: 140px;
`;

const SvgBackgroud = styled.div`
  background-color: white;
  width: 32px;
  margin: 5px auto 20px auto;
  z-index: 10;
`;

const TitleStatus = styled.div`
  font-weight: bold;
  font-size: 12px;
  line-height: 20px;
  color: ${(props) => props.theme.colors.Dark};
  height: 40px;
  overflow: hidden;
`;
const InfoStatus = styled.div`
  font-weight: bold;
  font-size: 12px;
  line-height: 20px;
  color: ${(props) => props.theme.colors.MediumGray};
  height: 40px;
  overflow: hidden;
`;

const getColorStatusBar = (props: IStatusBarProps, theme: DefaultTheme) => {
  const result = props.active ? theme.colors.Confirm : theme.colors.Grey74;
  if (props.last) return theme.colors.white;

  return result;
};

const BarStatus = styled.div<IStatusBarProps>`
  width: 1000%;
  height: 2px;
  background: ${(props) => getColorStatusBar(props, props.theme)};
  position: absolute;
  top: 44%;
  left: 50%;
  z-index: 1;
`;

export {
  WrapperStatus,
  WrapperStatusItems,
  TitleStatus,
  InfoStatus,
  BarStatus,
  SvgBackgroud,
};
