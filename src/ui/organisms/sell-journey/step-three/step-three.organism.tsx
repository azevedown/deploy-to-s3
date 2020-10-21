import React from 'react';
import { Wrapper, Svg, SmallHeading, Description, Title } from './step-three.organism.style';
import { Row, Col } from 'react-bootstrap';
import { ButtonPrimary } from 'c4u-web-components';
import { useTranslation } from 'react-i18next';

export const StepThree = (props: {changeStep: any}) => {

  const leftSvg = () => (
    <>
      <path d="M81.7144 3.14551H75.4287V9.43642H81.7144V3.14551Z" fill="#003468" />
      <path d="M18.857 3.14551H12.5713V9.43642H18.857V3.14551Z" fill="#003468" />
      <path d="M31.4283 3.14551H25.1426V9.43642H31.4283V3.14551Z" fill="#003468" />
      <path d="M43.9996 3.14551H37.7139V9.43642H43.9996V3.14551Z" fill="#003468" />
      <path d="M56.5718 3.14551H50.2861V9.43642H56.5718V3.14551Z" fill="#003468" />
      <path d="M69.1431 3.14551H62.8574V9.43642H69.1431V3.14551Z" fill="#003468" />
      <path d="M6.28571 15.7273H0V22.0182H6.28571V15.7273Z" fill="#003468" />
      <path d="M6.28571 28.3091H0V34.6H6.28571V28.3091Z" fill="#003468" />
      <path d="M6.28571 40.8909H0V47.1818H6.28571V40.8909Z" fill="#003468" />
      <path d="M6.28571 53.4727H0V59.7636H6.28571V53.4727Z" fill="#003468" />
      <path d="M152.987 63.3724L147.334 81.377L153.331 83.263L158.984 65.2584L152.987 63.3724Z" fill="#003468" />
      <path d="M160.286 0H154V12.5818H160.286V0Z" fill="#003468" />
      <path d="M160.286 25.1636H154V37.7454H160.286V25.1636Z" fill="#003468" />
      <path d="M176 15.7273H163.429V22.0182H176V15.7273Z" fill="#003468" />
      <path d="M150.858 15.7273H138.286V22.0182H150.858V15.7273Z" fill="#003468" />
      <path d="M122.571 173H21.9999C16.8141 173 12.5713 168.754 12.5713 163.564V25.1637C12.5713 19.9737 16.8141 15.7273 21.9999 15.7273H122.571C127.757 15.7273 132 19.9737 132 25.1637V55.9262H125.714V25.1637C125.714 23.4337 124.3 22.0182 122.571 22.0182H21.9999C20.2713 22.0182 18.857 23.4337 18.857 25.1637V163.564C18.857 165.294 20.2713 166.709 21.9999 166.709H122.571C124.3 166.709 125.714 165.294 125.714 163.564V100.655H132V163.564C132 168.754 127.757 173 122.571 173Z" fill="#003468" />
      <path d="M132 88.0728H125.714V94.3637H132V88.0728Z" fill="#003468" />
      <path d="M6.28571 66.0544H0V72.3454H6.28571V66.0544Z" fill="#003468" />
      <path d="M6.28571 78.6365H0V84.9274H6.28571V78.6365Z" fill="#003468" />
      <path d="M6.28571 91.2183H0V97.5092H6.28571V91.2183Z" fill="#003468" />
      <path d="M6.28571 103.8H0V110.091H6.28571V103.8Z" fill="#003468" />
      <path d="M6.28571 116.382H0V122.673H6.28571V116.382Z" fill="#003468" />
      <path d="M6.28571 3.14551H0V9.43642H6.28571V3.14551Z" fill="#003468" />
      <path d="M69.1433 31.4546H28.2861V37.7455H69.1433V31.4546Z" fill="#003468" />
      <path d="M81.7144 31.4546H75.4287V37.7455H81.7144V31.4546Z" fill="#003468" />
      <path d="M94.2857 31.4546H88V37.7455H94.2857V31.4546Z" fill="#003468" />
      <path d="M62.8576 47.1819H28.2861V53.4728H62.8576V47.1819Z" fill="#003468" />
      <path d="M160.286 88.0727C159.029 88.0727 157.772 87.884 156.577 87.5065L90.0431 67.0296L76.4346 48.44L97.586 43.0298L163.995 63.4752C169.306 65.1109 172.857 69.9234 172.857 75.4909C172.857 82.4423 167.232 88.0727 160.286 88.0727ZM93.8774 61.6194L158.432 81.4987C159.029 81.6874 159.657 81.7818 160.286 81.7818C163.743 81.7818 166.572 78.9509 166.572 75.4909C166.572 72.7229 164.78 70.3009 162.14 69.4831L97.4289 49.5409L86.9946 52.2145L93.8774 61.6194Z" fill="#003468" />
      <path d="M103.715 106.946H40.8574V113.236H103.715V106.946Z" fill="#003468" />
      <path d="M110 157.273H97.429C93.9718 157.273 91.1433 154.442 91.1433 150.982V141.545H97.429V150.982H110V125.283C110 124.56 109.403 123.648 108.712 122.61C105.663 118.175 101.169 111.915 101.169 111.915L100.823 111.412L100.666 110.814C100.635 110.689 97.4918 97.8865 96.0461 92.6965C95.7947 91.8787 94.6004 91.2182 93.2804 91.2182H51.2918C50.1604 91.2182 48.809 91.7843 48.5261 92.7594C47.1118 97.6034 43.9376 110.689 43.9061 110.814L43.7804 111.412L43.4347 111.915C43.4347 111.915 38.9404 118.175 35.8604 122.61C35.169 123.585 34.5718 124.529 34.5718 125.283V150.982H47.1118C47.0804 150.95 47.1433 150.793 47.1433 150.447V141.545H53.429V150.447C53.429 154.347 50.7261 157.273 47.1433 157.273H34.5718C31.1147 157.273 28.2861 154.442 28.2861 150.982V125.283C28.2861 122.704 29.5118 120.723 30.6747 119.055C33.2518 115.344 36.8033 110.343 37.9347 108.77C38.5947 106.096 41.1718 95.4645 42.4918 90.998C43.5604 87.4122 47.1433 84.9272 51.2918 84.9272H93.2804C97.4604 84.9272 101.075 87.4436 102.08 91.0294C103.4 95.7162 105.978 106.128 106.606 108.738C107.738 110.311 111.32 115.312 113.866 119.024C115.092 120.785 116.255 122.704 116.255 125.252V150.982C116.286 154.442 113.458 157.273 110 157.273Z" fill="#003468" />
      <path d="M113.143 138.4H31.4287V144.691H113.143V138.4Z" fill="#003468" />
      <path d="M44.0001 125.818H31.4287V132.109H44.0001V125.818Z" fill="#003468" />
      <path d="M113.143 125.818H100.571V132.109H113.143V125.818Z" fill="#003468" />
      <path d="M78.5714 125.818H66V132.109H78.5714V125.818Z" fill="#003468" />
    </>
  )
  const { changeStep } = props;
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Row>
        <Col md={{ span: '3', offset: '1' }}>
          <Svg >
            {leftSvg()}
          </Svg>
        </Col>
        <Col md={'8'}>
          <SmallHeading>
            {t('step 3')}
          </SmallHeading>
          <Title>
            {t('step 3 title')}
          </Title>
          <Description>
            {t('step 3 description')}
          </Description>
          <ButtonPrimary onClick={() => changeStep(3)} sizex="md">
            {t('Advance').toUpperCase()}
          </ButtonPrimary>
        </Col>
      </Row>
    </Wrapper>
  )
}