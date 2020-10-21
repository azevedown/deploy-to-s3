import styled from "styled-components";

const WrapperAd = styled.div`
  background: ${(props) => props.theme.colors.Grey30};
  display: grid;
  height: 100%;
`;
const TitleCard = styled.div`
  max-width: 176px;
  margin: 0 0 10px 0;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.DarkBlue};
`;
const AdContent = styled.div`
  height: 100%;
  display: grid;
  align-items: end;
  justify-content: center;
  button {
    margin: 0 0 auto 0;
  }
`;

export { WrapperAd, TitleCard, AdContent };
