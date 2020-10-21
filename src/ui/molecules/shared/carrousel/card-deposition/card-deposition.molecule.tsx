import React from 'react';
import { Profession, Name, Description, Wrapper, StarWrapper, Image } from './card-deposition.molecule.style';
import { StarIcon } from '../../../../atoms';

export const CardDeposition = (props: { name: string, profession: string, description: string, rate: number, image: any }) => {

  const { name, profession, description, rate, image } = props;

  return (
    <Wrapper>

      {image && <Image src={image} alt="carousel person"/>}

      <StarWrapper>
        {Array(rate).fill('').map((item, index) => <StarIcon key={index}/>)}
      </StarWrapper>

      <Description>
        {description}
      </Description>
      <Name>
        {name}
      </Name>
      <Profession>
        {profession}
      </Profession>

    </Wrapper>
  )
};