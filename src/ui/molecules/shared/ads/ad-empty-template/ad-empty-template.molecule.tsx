import { ButtonSecondary } from "c4u-web-components";
import React, { useEffect, useState } from "react";
import {
  WrapperAd,
  TitleCard,
  AdContent,
} from "./ad-empty-template.molecule.style";

interface IProps {
  title: string;
  labelButton?: string;
  onClick?: () => void;
}
export const AdEmptyTemplate: React.FC<IProps> = (parameters) => {
  const [props, setProps] = useState(parameters);
  useEffect(() => setProps(parameters), [parameters]);

  return (
    <WrapperAd>
      <AdContent>
        <TitleCard>{props.title}</TitleCard>
        {!!props.labelButton && (
          <ButtonSecondary sizex={"md"} onClick={props.onClick}>
            {props.labelButton}
          </ButtonSecondary>
        )}
      </AdContent>
    </WrapperAd>
  );
};
