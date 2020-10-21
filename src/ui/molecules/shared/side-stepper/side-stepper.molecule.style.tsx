import styled from "styled-components";

interface IProps {
  active: boolean;
}

const DivStep = styled.div`
  display: inline-flex;
  margin: 0 0 25px 0;
`;

const StepNumber = styled.div<IProps>`
  height: 24px;
  width: 24px;
  background-color: ${(props) =>
    props.active ? props.theme.colors.ManheimYellow : props.theme.colors.white};
  border: 1px solid
    ${(props) =>
      props.active
        ? props.theme.colors.ManheimYellow
        : props.theme.colors.Grey74};
  border-radius: 24px;

  font-family: ${(props) => props.theme.fontFamily.Helvetica};
  font-size: 12px;
  font-weight: bold;
  color: ${(props) =>
    props.active ? props.theme.colors.DarkBlue : props.theme.colors.Grey74};
  text-align: center;
  line-height: 20px;
  line-height: 23px;
  vertical-align: middle;

  margin: 0 8px 0 0;
`;

const Text = styled.div<IProps>`
  font-family: ${(props) => props.theme.fontFamily.Helvetica};
  font-size: 12px;
  font-weight: bold;
  color: ${(props) =>
    props.active
      ? props.theme.colors.ManheimYellow
      : props.theme.colors.Grey74};
  line-height: 20px;
  text-transform: uppercase;
`;

export { DivStep, StepNumber, Text };
