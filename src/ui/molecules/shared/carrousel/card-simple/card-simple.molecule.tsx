import React from 'react';
import { H3, H2, H5, Wrapper } from './card-simple.molecule.style';

export const CardSimple = (props: { title: string, subtitle: string, description: string }) => {
  const { title, subtitle, description } = props;

  return (
    <Wrapper>
      <H2>
        {title}
      </H2>
      <H3>
        {subtitle}
      </H3>
      <H5>
        {description}
      </H5>

    </Wrapper>
  )
};