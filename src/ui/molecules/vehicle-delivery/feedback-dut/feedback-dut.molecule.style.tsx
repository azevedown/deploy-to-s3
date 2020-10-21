import styled from "styled-components";

const WrapperFeedbackDut = styled.div`
  border: 1px solid ${(props) => props.theme.colors.DarkGrayOpacity};
  box-sizing: border-box;
  border-radius: 10px;
  padding: 40px 0;
`;
const WrapperImg = styled.div`
  display: flex;
`;
const ImgStyle = styled.div`
  position: relative;
  margin: auto;
`;
const DutText = styled.div`
  position: absolute;
  white-space: nowrap;
  overflow: hidden;
  text-align: left;
  font-weight: bold;
  color: ${(props) => props.theme.colors.Dark};
`;
const DutTextValue = styled(DutText)`
  top: 56px;
  left: 297px;
  max-width: 128px;
`;

const DutTextName = styled(DutText)`
  top: 84px;
  left: 146px;
  max-width: 279px;
`;

const DutTextRegionalDocument = styled(DutText)`
  top: 137px;
  left: 65px;
  max-width: 146px;
`;

const DutTextFederalDocument = styled(DutText)`
  top: 137px;
  left: 262px;
  max-width: 163px;
`;

const DutTextAddress = styled(DutText)`
  white-space: initial;
  top: 162px;
  left: 103px;
  line-height: 25px;
  height: 50px;
  overflow: hidden;
  max-width: 330px;
`;
const DutTextDate = styled(DutText)`
  top: 216px;
  left: 112px;
  max-width: 282px;
`;

const TitleDut = styled.div`
  font-weight: bold;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.Dark};
  margin-bottom: 8px;
`;

const FooterDut = styled.div`
  width: 490px;
  height: 130px;
  left: 631px;
  top: 1177px;
  background: ${(props) => props.theme.colors.DarkBlue};
  border-radius: 0px 0px 10px 10px;
  margin: -115px auto 0 auto;
`;

const PrintIcon = styled.div`
  cursor: pointer;
  width: auto;
  width: 24px;
  height: 23px;
  position: absolute;
  right: 39px;
  top: 59px;
`;
const WrapperIcons = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export {
  DutTextAddress,
  DutTextDate,
  DutTextFederalDocument,
  DutTextName,
  DutTextRegionalDocument,
  DutTextValue,
  FooterDut,
  ImgStyle,
  PrintIcon,
  TitleDut,
  WrapperFeedbackDut,
  WrapperIcons,
  WrapperImg,
};
