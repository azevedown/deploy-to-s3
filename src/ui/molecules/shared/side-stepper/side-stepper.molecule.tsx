import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { DivStep, StepNumber, Text } from "./side-stepper.molecule.style";

interface ISideStepper {
  step: number;
  items: string[];
}

export const SideStepper: React.FC<ISideStepper> = (props) => {
  const [step, setStep] = useState(props.step);
  useEffect(() => setStep(props.step), [props.step]);

  const [items, setItems] = useState(props.items);
  useEffect(() => setItems(props.items), [props.items]);

  return (
    <>
      {items.map((menu, index) => (
        <Row key={`Row${index}`}>
          <Col key={`Col${index}`}>
            <DivStep key={`DivStep${index}`}>
              <StepNumber key={`StepNumber${index}`} active={step > index}>
                {index + 1}
              </StepNumber>
              <Text key={`Text${index}`} active={step > index}>
                {menu}
              </Text>
            </DivStep>
          </Col>
        </Row>
      ))}
    </>
  );
};
