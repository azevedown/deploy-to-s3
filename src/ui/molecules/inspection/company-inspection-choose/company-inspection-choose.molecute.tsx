import { Img } from "c4u-web-components";
import React, { useEffect, useState } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import {
  BoxInspection,
  RowOptionsInpection,
  WrapperBoxInspection,
} from "./company-inspection-choose.molecute.style";
import { DekraLogo, SupervisaoLogo } from "./../../../assets";
import { InspectionCompany, InspectionPlan } from "../../../../models";
import { OptionInspection } from "../..";
import { useTranslation } from "react-i18next";

interface IProps {
  inspectionCompany?: InspectionCompany;
  plansList?: InspectionPlan[];
  planId?: string;
  onSelectPlan?: (id: string) => void;
  onSelectInspectionCompany?: (id: InspectionCompany) => void;
}
export const CompanyInspectionChoose: React.FC<IProps> = (parameters) => {
  const [company, setCompany] = useState<InspectionCompany>();

  const { t } = useTranslation();

  useEffect(() => setCompany(parameters.inspectionCompany), [
    parameters.inspectionCompany,
  ]);

  const [props, setProps] = useState(parameters);

  useEffect(() => setProps(parameters), [parameters]);

  const handleInspectionCompany = (company: InspectionCompany) => {
    setCompany(company);
    if (props.onSelectInspectionCompany)
      props.onSelectInspectionCompany(company);
  };

  return (
    <>
      <Row>
        <Col>
          <WrapperBoxInspection>
            <BoxInspection
              inactive={company === InspectionCompany.Supervisao}
              onClick={() => handleInspectionCompany(InspectionCompany.Dekra)}
            >
              <Img src={DekraLogo} />
            </BoxInspection>
            <BoxInspection
              inactive={company === InspectionCompany.Dekra}
              onClick={() =>
                handleInspectionCompany(InspectionCompany.Supervisao)
              }
            >
              <Img src={SupervisaoLogo} />
            </BoxInspection>
          </WrapperBoxInspection>
        </Col>
      </Row>
      {props.inspectionCompany !== undefined && (
        <RowOptionsInpection>
          {!props.plansList && (
            <Col md={"5"} className={"text-center"}>
              <Spinner animation="border" />
            </Col>
          )}
          {props.plansList?.map((m, i) => (
            <Col md={"auto"} className={"mb-4"} key={`Col-${i}`}>
              <OptionInspection
                active={m.id.toString() === props.planId}
                id={m.id}
                title={m.name}
                details={m.description}
                value={m.value}
                onChoose={props.onSelectPlan}
                key={`OptionInspection-${i}`}
                favorite={m.spotlight}
              />
            </Col>
          ))}
          {props.plansList?.length === 0 && (
            <Col md={"5"} className={"text-center"}>
              {t("No results found")}
            </Col>
          )}
        </RowOptionsInpection>
      )}
    </>
  );
};
