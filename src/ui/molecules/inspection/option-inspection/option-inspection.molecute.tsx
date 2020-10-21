import { ButtonSecondary, NumberHelper } from "c4u-web-components";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  BoxContentOption,
  Condictions,
  Detail,
  EmptyLabel,
  FavoriteLabel,
  LabelValue,
  Title,
  Value,
  WrapperBoxOption,
} from "./option-inspection.molecute.style";

interface IProps {
  id: string;
  favorite?: boolean;
  active?: boolean;
  onChoose?: (id: string) => void;
  title: string;
  details: string;
  value: number;
}
export const OptionInspection: React.FC<IProps> = (parameters) => {
  const { t } = useTranslation();

  const [props, setProps] = useState(parameters);

  useEffect(() => setProps(parameters), [parameters]);

  const handleChange = () => {
    if (props.onChoose) props.onChoose(props.id);
  };

  return (
    <div>
      {props.favorite ? (
        <FavoriteLabel>{t("Favorite ad of announcers")}</FavoriteLabel>
      ) : (
        <EmptyLabel />
      )}
      <WrapperBoxOption active={props.active} className={"text-center"}>
        <BoxContentOption active={props.active}>
          <Title active={props.active}>{props.title}</Title>
          <Detail active={props.active}>{props.details}</Detail>
          <hr />
          <LabelValue active={props.active}>{t("Value")}</LabelValue>
          <Value active={props.active}>
            {t("$")} {NumberHelper.toFormatString(props.value, 2)}
          </Value>
          <Condictions active={props.active}>
            1x {t("of")} {t("$")} {NumberHelper.toFormatString(props.value, 2)}
          </Condictions>
          <ButtonSecondary
            disabled={props.active}
            sizex={"md"}
            onClick={handleChange}
          >
            {t("Select evaluation")}
          </ButtonSecondary>
        </BoxContentOption>
      </WrapperBoxOption>
    </div>
  );
};
