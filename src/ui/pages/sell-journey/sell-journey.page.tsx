import React, { useState } from 'react';
import { Wrapper, PageWrapper } from './sell-journey.page.style';
import { StepOne, StepTwo, StepThree, StepFour, StepFive, Rules } from '../../organisms';
import { BreadcrumbMolecule, HeaderSellJourney, Stepper } from '../../molecules';

export const SellJourney = () => {
  const [step, setStep] = useState(0);

  const steps = [
    <StepOne changeStep={setStep} />,
    <StepTwo changeStep={setStep} />,
    <StepThree changeStep={setStep} />,
    <StepFour changeStep={setStep} />,
    <StepFive changeStep={setStep} />,
    <Rules changeStep={setStep} />,
  ]

  return (
    <PageWrapper>
      <Wrapper>
        <BreadcrumbMolecule />
        <HeaderSellJourney />
      </Wrapper>
      <Stepper rules={step === 5} />
      {steps[step]}
    </PageWrapper>
  )
}