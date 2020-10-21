import React, { useRef, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ButtonPrimary } from 'c4u-web-components';
import {
  Wrapper,
  SubWrapper,
  Title,
  ImageWrapper,
  Image,
  ImagePreview,
  TextBold,
  TextNormal,
  ButtonWrapper,
  ButtonWrapperPreview,
  FileInput,
  UploadingFileName,
  UploadingLoading,
  UploadingTitle,
} from './vehicle-photo-card.molecule.style';
import { useManhein } from '../../../../hooks';
import { AdVehiclePicture } from '../../../../models';
import { ProgressBar } from 'react-bootstrap';
import { ButtonOutline } from '../../../atoms';

const UploadIcon = () => (
  <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.999 0.333984C16.7799 0.334445 16.5631 0.378095 16.3609 0.462438C16.1587 0.54678 15.9751 0.670161 15.8206 0.825521L7.26593 8.89193C7.25933 8.89725 7.25282 8.90268 7.24639 8.9082L7.24314 8.91146C7.08685 9.06771 6.99903 9.27965 6.999 9.50065C6.999 9.72167 7.0868 9.93363 7.24308 10.0899C7.39936 10.2462 7.61132 10.334 7.83233 10.334H13.6657V23.6673C13.6657 24.5873 14.4123 25.334 15.3323 25.334H16.999H18.6657C19.5857 25.334 20.3323 24.5873 20.3323 23.6673V10.334H26.1657C26.3867 10.334 26.5986 10.2462 26.7549 10.0899C26.9112 9.93363 26.999 9.72167 26.999 9.50065C26.999 9.27965 26.9111 9.06771 26.7549 8.91146L26.7028 8.86263L18.1937 0.838542C18.1756 0.820762 18.1572 0.803397 18.1383 0.786458C17.8298 0.496371 17.4225 0.334593 16.999 0.333984ZM1.999 30.334C1.77814 30.3309 1.55887 30.3717 1.35393 30.454C1.14898 30.5364 0.962444 30.6586 0.805161 30.8137C0.647878 30.9688 0.522985 31.1536 0.437739 31.3573C0.352492 31.5611 0.308594 31.7798 0.308594 32.0007C0.308594 32.2215 0.352492 32.4402 0.437739 32.644C0.522985 32.8477 0.647878 33.0325 0.805161 33.1876C0.962444 33.3427 1.14898 33.4649 1.35393 33.5473C1.55887 33.6296 1.77814 33.6704 1.999 33.6673H31.999C32.2199 33.6704 32.4391 33.6296 32.6441 33.5473C32.849 33.4649 33.0356 33.3427 33.1928 33.1876C33.3501 33.0325 33.475 32.8477 33.5603 32.644C33.6455 32.4402 33.6894 32.2215 33.6894 32.0007C33.6894 31.7798 33.6455 31.5611 33.5603 31.3573C33.475 31.1536 33.3501 30.9688 33.1928 30.8137C33.0356 30.6586 32.849 30.5364 32.6441 30.454C32.4391 30.3717 32.2199 30.3309 31.999 30.334H1.999Z" fill="#FFC20E" />
  </svg>
)

interface Props {
  icon: any;
  title: string;
  setItems: any;
  items: any[];
  idAd: number;
}

enum PicturePosition {
  VehicleFront,
  VehicleBack,
  LeftSide,
  RightSide,
  LeftHeadlight,
  RightHeadlight,
  RightTailLight,
  LeftTailLight,
  Upholstery,
  Dashboard,
  Engine,
  Inside,
}

let cancel: any = null

export const VehiclePhotoCard = (props: Props) => {
  const { t } = useTranslation();

  const { icon, title, items, setItems } = props;

  const { uploadPicture } = useManhein();
  const fileInput = useRef(document.createElement('input'))

  const [selectedFile, setSelectedFiles] = useState<any>();
  const [currentFile, setCurrentFile] = useState('');
  const [fileName, setFileName] = useState('');
  const [progress, setProgress] = useState(0);

  const [uploading, setUploading] = useState(false);

  const validImage = (img: any) => {
    const allowedTypes = ['image/png', 'image/jpeg'];
    const allowedSize = 7340032;

    return img && allowedTypes.find(type => img.type === type) && allowedSize >= img.size;
  }

  const selectFile = (event: any) => {

    const files = event.target.files;
    if (validImage(files[0])) {
      setSelectedFiles(files[0]);
    } else {
      //invalid image
    }
  };

  const deletePicture = () => {
    setCurrentFile('')
    const index = items.findIndex(item => item.title === title);

    const arr = [...items];
    arr[index].file = null;
    setItems(arr)
  }


  useEffect(() => {


    const upload = () => {
      const file = selectedFile;
      const index = items.findIndex(item => item.title === title)

      if (!file) return;

      setUploading(true);
      setProgress(0);
      cancel = null;
      setCurrentFile(URL.createObjectURL(file));
      setFileName(file.name.replace('.', ' '));

      const req: AdVehiclePicture = {
        adId: props.idAd,
        pictureFile: file,
        picturePosition: PicturePosition[title as keyof typeof PicturePosition]
      }

      uploadPicture(req,
        (event: any) => setProgress(Math.round((100 * event.loaded) / event.total)),
        (cancelEvt: any) => cancel = cancelEvt)
        .then((res) => {
          setUploading(false);
          
          const arr = [...items];
          arr[index].file = file;
          setItems(arr)

        }).catch(() => {
          setUploading(false)
          setProgress(0);
          setCurrentFile('');
          setFileName('');
          cancel = null;

          const arr = [...items];
          arr[index].file = null;
          setItems(arr)
        });

      setSelectedFiles(null);
    };

    if (selectedFile) upload();
  }, [selectedFile, title, uploadPicture, items, setItems])// eslint-disable-line react-hooks/exhaustive-deps

  if (uploading) return (
    <Wrapper uploading>
      <UploadIcon></UploadIcon>

      <SubWrapper>
        <UploadingTitle>
          {t('loading file')}
        </UploadingTitle>
        <UploadingLoading>
          {t('please wait')}
        </UploadingLoading>
      </SubWrapper>

      <SubWrapper>
        <UploadingFileName>
          {fileName}
        </UploadingFileName>

        <div className="w-100">
          <ProgressBar animated striped variant="warning" now={progress} />
        </div>

        <ButtonOutline onClick={() => cancel && cancel('cancelado')}>
          {t('Cancel')}
        </ButtonOutline>
      </SubWrapper>
    </Wrapper>
  )

  return (
    <Wrapper>
      <Title>
        {t(title)}
      </Title>

      {!currentFile &&
        <>
          <ImageWrapper>
            <FileInput accept=".png,.jpeg,.jpg" onChange={ev => selectFile(ev)} ref={fileInput} type="file" />
            {icon && <Image src={icon} alt="front" />}
          </ImageWrapper>

          <ButtonWrapper>

            <TextBold>
              {t('add photo info')}
            </TextBold>
            <TextNormal>
              {t('add photo formats')}
            </TextNormal>
            
            <ButtonPrimary onClick={() => fileInput.current.click()} sizey="thin" >
              {t('send picture')}
            </ButtonPrimary>
          </ButtonWrapper>
        </>
      }

      {currentFile &&
        <>
          <ImagePreview backgroundImage={currentFile}>
            <FileInput accept=".png,.jpeg,.jpg" onChange={ev => selectFile(ev)} ref={fileInput} type="file" />
          </ImagePreview>

          <ButtonWrapperPreview>
            <ButtonOutline onClick={() => fileInput.current.click()}>
              {t('change picture')}
            </ButtonOutline>
            <ButtonOutline onClick={() => deletePicture()}>
              {t('delete picture')}
            </ButtonOutline>
          </ButtonWrapperPreview>
        </>
      }

    </Wrapper>
  )
}