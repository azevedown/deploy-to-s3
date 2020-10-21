import React from 'react';
import { Wrapper } from './button-arrow.atom.style';

export const ButtonArrow = (props: any) => {

  return (
    <Wrapper {...props}>
      <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.92905 6.00064L6.75005 2.17964C7.16405 1.76564 7.16405 1.09364 6.75005 0.679641C6.33605 0.265641 5.66405 0.26564 5.25005 0.67964L0.636047 5.29364C0.245047 5.68464 0.245047 6.31764 0.636047 6.70764L5.25005 11.3216C5.66405 11.7356 6.33605 11.7356 6.75005 11.3216C7.16405 10.9076 7.16405 10.2356 6.75005 9.82164L2.92905 6.00064Z" fill="white" />
      </svg>
    </Wrapper>
  );
};
