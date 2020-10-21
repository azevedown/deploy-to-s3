import React from "react";
import { CoxIcon } from "c4u-web-components";
import { Step, Line, WrapperStep } from "./vertical-step.molecule.style";

interface IProps {
  step: "Vehicle" | "Inspection" | "Payment" | "Schedule" | "Checkout";
  active: boolean;
}

export const VerticalStep: React.FC<IProps> = (props) => {
  const getIcon = () => {
    switch (props.step) {
      case "Inspection":
        return <CoxIcon name="cart" />;

      case "Payment":
        return <CoxIcon name="card" />;

      case "Schedule":
        return <CoxIcon name="calendar" />;

      case "Checkout":
        return <CoxIcon name="checkout" />;
        
      default:
        return <CoxIcon name="home" />;
    }
  };

  return (
    <WrapperStep>
      <Step active={props.active}>{getIcon()}</Step>
      <Line active={props.active}></Line>
    </WrapperStep>
  );
};
