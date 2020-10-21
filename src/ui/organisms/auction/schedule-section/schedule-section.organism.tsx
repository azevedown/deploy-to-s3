import React, { useState } from 'react';
import { Wrapper, } from './schedule-section.organism.style'
import { ScheduleSurvey, PracticalSimpleSecure } from '../../../molecules';
const imgGuyPhone = require('../../../assets/images/guy-phone.png')
export const ScheduleSection = () => {
  const [ selected, setSelected ] = useState(0);

  return (
    <Wrapper>
      <div>
        <img src={imgGuyPhone} alt="guy with phone in car" />
      </div>
      <ScheduleSurvey selected={selected} setSelected={setSelected} />
      <PracticalSimpleSecure selected={selected} />
    </Wrapper>
  )
}