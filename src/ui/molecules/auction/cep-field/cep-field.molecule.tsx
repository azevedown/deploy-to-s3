import React from 'react';
import { Wrapper, Input, SearchButton } from './cep-field.molecule.style';
import { Col, InputGroup, Row } from 'react-bootstrap';
import { ButtonOutline } from '../../../atoms';
import { useTranslation } from 'react-i18next';

export const CEPField = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Row>
        <Col sm={4}>
          <InputGroup>
            <InputGroup.Prepend>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.998 8.50195C10.0685 8.50195 8.49805 10.072 8.49805 12.002C8.49805 13.932 10.0685 15.502 11.998 15.502C13.9275 15.502 15.498 13.932 15.498 12.002C15.498 10.072 13.9275 8.50195 11.998 8.50195ZM11.998 13.502C11.171 13.502 10.498 12.829 10.498 12.002C10.498 11.175 11.171 10.502 11.998 10.502C12.825 10.502 13.498 11.175 13.498 12.002C13.498 12.829 12.825 13.502 11.998 13.502Z" fill="white" />
                <path d="M23 11H20.941C20.478 6.8355 17.1645 3.522 13 3.059V1C13 0.448 12.552 0 12 0C11.448 0 11 0.448 11 1V3.059C6.8355 3.522 3.522 6.8355 3.059 11H1C0.448 11 0 11.448 0 12C0 12.552 0.448 13 1 13H3.059C3.522 17.1645 6.8355 20.478 11 20.941V23C11 23.552 11.448 24 12 24C12.552 24 13 23.552 13 23V20.941C17.1645 20.478 20.478 17.1645 20.941 13H23C23.552 13 24 12.552 24 12C24 11.448 23.552 11 23 11ZM12 19C8.14 19 5 15.86 5 12C5 8.14 8.14 5 12 5C15.86 5 19 8.14 19 12C19 15.86 15.86 19 12 19Z" fill="white" />
              </svg>
            </InputGroup.Prepend>
            <Input placeholder={t('type location')} />
            <InputGroup.Append>
              <SearchButton>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 0C3.14585 0 0 3.14585 0 7C0 10.8542 3.14585 14 7 14C8.748 14 10.345 13.348 11.5742 12.2813L12 12.707V14L17.5859 19.5859C18.1379 20.1379 19.0339 20.1379 19.5859 19.5859C20.1379 19.0339 20.1379 18.1379 19.5859 17.5859L14 12H12.707L12.2813 11.5742C13.348 10.345 14 8.748 14 7C14 3.14585 10.8542 0 7 0ZM7 2C9.77327 2 12 4.22673 12 7C12 9.77327 9.77327 12 7 12C4.22673 12 2 9.77327 2 7C2 4.22673 4.22673 2 7 2Z" fill="white" />
                </svg>
              </SearchButton>
            </InputGroup.Append>
          </InputGroup>
        </Col>
        <Col sm={6}>
          <ButtonOutline sizex="md">
            {t('continue')}
          </ButtonOutline>
        </Col>
      </Row>
    </Wrapper>
  )
}