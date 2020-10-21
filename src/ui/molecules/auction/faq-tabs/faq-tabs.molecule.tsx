import React from 'react';
import { IconWrapper, ItemWrapper, Label, Wrapper } from './faq-tabs.molecule.style';
import { useTranslation } from 'react-i18next';

export const FAQTabs = (props: { selected: number, setSelected: any }) => {
  const { t } = useTranslation();
  const { selected, setSelected } = props;

  return (
    <Wrapper>
      
      <ItemWrapper onClick={() => setSelected(0)} selected={selected === 0}>
        <IconWrapper>
          <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 2H11.816C11.403 0.837 10.304 0 9 0C7.696 0 6.597 0.837 6.184 2H2C0.895 2 0 2.895 0 4V18C0 19.105 0.895 20 2 20H16C17.105 20 18 19.105 18 18V4C18 2.895 17.105 2 16 2ZM8 16H4C3.448 16 3 15.552 3 15C3 14.448 3.448 14 4 14H8C8.552 14 9 14.448 9 15C9 15.552 8.552 16 8 16ZM8 10H4C3.448 10 3 9.552 3 9C3 8.448 3.448 8 4 8H8C8.552 8 9 8.448 9 9C9 9.552 8.552 10 8 10ZM9 4C8.448 4 8 3.552 8 3C8 2.448 8.448 2 9 2C9.552 2 10 2.448 10 3C10 3.552 9.552 4 9 4ZM13.707 15.707C13.52 15.895 13.265 16 13 16H12C11.448 16 11 15.552 11 15C11 14.448 11.448 14 12 14H12.586L13.879 12.707C14.27 12.316 14.903 12.316 15.293 12.707C15.684 13.098 15.684 13.731 15.293 14.121L13.707 15.707ZM13 10H12C11.448 10 11 9.552 11 9C11 8.448 11.448 8 12 8H12.586L13.879 6.707C14.27 6.316 14.903 6.316 15.293 6.707C15.684 7.098 15.684 7.731 15.293 8.121L13.707 9.707C13.52 9.895 13.265 10 13 10Z" fill="white" />
          </svg>
        </IconWrapper>
        <Label>
          {t('about inspection')}
        </Label>
      </ItemWrapper>

      <ItemWrapper onClick={() => setSelected(1)} selected={selected === 1}>
        <IconWrapper>
          <svg width="27" height="11" viewBox="0 0 27 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M4.21633 2.64252L1.26019 3.06467C1.04592 3.09548 0.886728 3.27911 0.886728 3.4955V7.02059C0.884426 7.69756 1.29684 8.30707 1.92653 8.55639L3.33607 9.12198C3.3876 9.14252 3.4425 9.15297 3.49792 9.15297H3.6541C3.91565 9.89917 4.50248 10.486 5.24869 10.7476C6.60458 11.2228 8.08902 10.5089 8.5643 9.15297H20.1912C20.4528 9.89917 21.0394 10.486 21.7858 10.7476C23.1417 11.2228 24.6262 10.5089 25.1014 9.15297H26.5627C26.8032 9.15297 26.9979 8.95818 26.9979 8.71771V6.13361C26.9969 5.423 26.6162 4.76692 25.9996 4.4133C24.4824 3.54845 22.7697 3.08397 21.0233 3.06432L19.5315 2.25047C17.364 1.07024 14.9357 0.450998 12.468 0.449228H11.9545C9.86335 0.446926 7.79614 0.8921 5.89149 1.75482C5.31474 2.01495 4.75535 2.31138 4.21633 2.64252ZM22.9946 9.98771C22.0527 10.1802 21.1331 9.57264 20.9406 8.63076C20.9173 8.5162 20.9054 8.3995 20.9054 8.28263C20.9052 7.45532 21.4871 6.74223 22.2976 6.57666C23.2395 6.38418 24.159 6.99173 24.3517 7.93361C24.5442 8.87566 23.9366 9.79523 22.9946 9.98771ZM19.1985 3.06042H13.072V1.33869C15.1874 1.43024 17.2541 2.00344 19.1146 3.01456L19.1985 3.06042ZM11.9553 1.31957H12.2017V3.06042H7.59462L6.83478 2.30058C8.46372 1.65053 10.2016 1.31762 11.9553 1.31957ZM6.4576 9.98771C5.51555 10.1802 4.59598 9.57264 4.4035 8.63076C4.38012 8.5162 4.36826 8.3995 4.36826 8.28263C4.36808 7.45532 4.94996 6.74223 5.76045 6.57666C6.70232 6.38418 7.62207 6.99173 7.81455 7.93361C8.00704 8.87566 7.39948 9.79523 6.4576 9.98771ZM14.0138 4.85328H12.7952V6.07184H14.0138V4.85328Z" fill="white" />
          </svg>
        </IconWrapper>
        <Label>
          {t('about announcements')}
        </Label>
      </ItemWrapper>

      <ItemWrapper onClick={() => setSelected(2)} selected={selected === 2}> 
        <IconWrapper>
          <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 0C0.448 0 0 0.448 0 1V15C0 15.552 0.448 16 1 16C1.552 16 2 15.552 2 15V1C2 0.448 1.552 0 1 0ZM4 0C3.448 0 3 0.448 3 1V15C3 15.552 3.448 16 4 16H6C6.552 16 7 15.552 7 15V1C7 0.448 6.552 0 6 0H4ZM9 0C8.448 0 8 0.448 8 1V15C8 15.552 8.448 16 9 16C9.552 16 10 15.552 10 15V1C10 0.448 9.552 0 9 0ZM12 0C11.448 0 11 0.448 11 1V15C11 15.552 11.448 16 12 16H13C13.552 16 14 15.552 14 15V1C14 0.448 13.552 0 13 0H12ZM16 0C15.448 0 15 0.448 15 1V15C15 15.552 15.448 16 16 16C16.552 16 17 15.552 17 15V1C17 0.448 16.552 0 16 0ZM19 0C18.448 0 18 0.448 18 1V15C18 15.552 18.448 16 19 16C19.552 16 20 15.552 20 15V1C20 0.448 19.552 0 19 0Z" fill="white" />
          </svg>
        </IconWrapper>
        <Label>
          {t('about payment')}
        </Label>
      </ItemWrapper>

    </Wrapper>
  )
};