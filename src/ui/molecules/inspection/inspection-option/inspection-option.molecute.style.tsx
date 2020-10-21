import styled from "styled-components";

interface IProps {
  choosed: boolean;
}
const BoxOption = styled.div<IProps>`
  min-height: 314px;
  background: ${(props) =>
    props.choosed ? props.theme.colors.BlueManhein : props.theme.colors.white};
  border: 1px solid
    ${(props) =>
      props.choosed
        ? props.theme.colors.BlueManhein
        : props.theme.colors.DarkGrayOpacity};
  box-sizing: border-box;
  border-radius: 10px;
  max-width: 280px;
  img {
    max-width: 278px;
    border-radius: 10px 10px 0px 0;
    filter: contrast(0.3) brightness(0.6);
  }
`;
const StoreName = styled.div`
  height: 83px;
  position: absolute;
  top: 0;
  width: 100%;
  left: 0;
  overflow: hidden;
  padding: 0 25px;
`;
const TextStoreName = styled.div`
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.5px;
  color: ${(props) => props.theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
`;

const WrapperPlaceInfo = styled.div`
  padding: 16px;
  min-height: 230px;
  display: grid;
  button {
    margin: 8px 0 0 0;
  }
`;
const TitleInfo = styled.div`
  font-weight: bold;
  font-size: 12px;
  line-height: 20px;
  margin: 0 0 8px 0;

  color: ${(props) => props.theme.colors.Dark};
`;
const ContentInfo = styled.div`
  font-size: 12px;
  line-height: 20px;
  margin: 0 0 8px 0;
  color: ${(props) => props.theme.colors.MediumGray};
`;

const TextSchedule = styled.div`
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.colors.white};
  max-width: 251px;
  margin-top: 15px;
`;
const DivButton = styled.div`
  margin-top: 21px;
`;
const DatePickerStyled = styled.div`
  .react-datepicker-wrapper,
  input {
    height: 41px;
    width: 100%;
  }
  .input-group-append span {
    background-color: ${(props) => props.theme.colors.white};
    cursor: pointer;
  }
`;
const WrapperConfirmation = styled.div`
  min-height: 314px;
  width: 284px;
  text-align: center;
  display: grid;
  svg {
    margin: auto;
  }
`;
const ConfirmationText = styled.div`
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: ${(props) => props.theme.colors.DarkBlue};
`;
const AdviceText = styled.div`
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  color: ${(props) => props.theme.colors.black};
`;

export {
  BoxOption,
  StoreName,
  TextStoreName,
  WrapperPlaceInfo,
  TitleInfo,
  ContentInfo,
  TextSchedule,
  DivButton,
  DatePickerStyled,
  WrapperConfirmation,
  ConfirmationText,
  AdviceText,
};
