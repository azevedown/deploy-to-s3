import styled from 'styled-components';

interface WrapperProps {
  uploading?: boolean
}
interface ImagePreviewProps {
  backgroundImage: string
}

const Wrapper = styled.div<WrapperProps>`
  width: 100%;

  display: inline-block;
  margin: 0 0 40px;
  border-radius: 10px;

  ${props => props.uploading && `
    background-color: ${props.theme.colors.DarkBlue};

    height: 287px;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    padding: 0 20px;

    button {
      
      width: 100%;

      height: 24px;
      padding: 0 10px;
    }
  `}
`

const UploadingTitle = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.Roboto};
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  color: ${props => props.theme.colors.white};

  margin: 0;
`

const UploadingFileName = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.Roboto};
  font-size: 10px;
  font-weight: bold;
  text-align: left;
  color: ${props => props.theme.colors.white};

  margin: 0;

  width: 100%;

  margin-bottom: 10px;
`

const UploadingLoading = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.Roboto};
  font-size: 12px;
  font-weight: normal;
  text-align: center;
  color: ${props => props.theme.colors.white};

  margin: 0;
`

const Title = styled.p`
  background-color: ${props => props.theme.colors.DarkBlue};

  font-family: ${({ theme }) => theme.fontFamily.Roboto};
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  color: ${props => props.theme.colors.white};
  line-height: 26px;

  margin: 0;

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

`
const ImageWrapper = styled.div`
  background-color: ${props => props.theme.colors.Grey30};

  padding: 20px 36px;
  width: 100%;

`

const ImagePreview = styled.div<ImagePreviewProps>`
  width: 100%;
  height: 175px;
  position: relative;

  ${props => props.backgroundImage &&
    `
      background-image: url(${props.backgroundImage});
      background-color: ${props.theme.colors.white};
      background-repeat: no-repeat;
      background-position: center;
      background-size: 100%;
      ;
    `

  }
`

const Image = styled.img`
  display: block;
  opacity: 0.3;

  margin: 0 auto;
  height: 57px;
  width: 100%;
`

const TextBold = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.Default};
  color: ${props => props.theme.colors.black};
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  line-height: 15px;

  text-align: center;
  white-space: pre-line;

  margin: 14px 0 5px;

`

const TextNormal = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.Default};
  color: ${props => props.theme.colors.black};
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 15px;
  
  text-align: center;

  margin: 10px 0;

`

const TextPreview = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.Default};
  color: ${props => props.theme.colors.grey80};
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  
  text-align: center;

  margin: 0 5px;
`

const ButtonWrapper = styled.div`
  transform: translateY(-10px);

  padding: 5px 16px 15px;

  border: 1.00314px solid ${props => props.theme.colors.Platinum};
  border-top: 0;

  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  button {
    background-color: ${props => props.theme.colors.ManheimYellow};
    
    font-family: ${({ theme }) => theme.fontFamily.Default};
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 21px;

    text-transform: none;

    padding: 0 10px;
  }
`

const ButtonWrapperPreview = styled.div`
  transform: translateY(-10px);

  padding: 5px 15px 15px;

  border: 1.00314px solid ${props => props.theme.colors.Platinum};
  border-top: 0;

  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  button {  
    border: 1px solid ${props => props.theme.colors.DarkBlue};
    color: ${props => props.theme.colors.DarkBlue};

    width: 100%;
    margin: 5px 14px;

    height: 24px;
    padding: 0 10px;
  }

  display: flex;
  align-items: center;
  justify-content: space-between;

  flex-direction: column;
`

const FileInput = styled.input`
  position: absolute;
  top: 0px;
  left: 0;

  z-index: 2;

  height: 87%;
  width: 100%;

  opacity: 0;

  cursor: pointer;
`

const SubWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;

  margin-top: 20px;
  width: 100%;

  button {
    width: 100%;
    margin-top: 30px;
  }
`;

export { Wrapper, SubWrapper, Title, ImageWrapper, Image, ImagePreview, TextBold, TextNormal, TextPreview, ButtonWrapper, ButtonWrapperPreview, FileInput, UploadingTitle, UploadingLoading, UploadingFileName };