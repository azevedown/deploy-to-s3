import {
  ButtonSecondary,
  CoxIcon,
  FormControlMask,
} from "c4u-web-components";
import React from "react";
import { Button, Col, InputGroup, Row, Spinner } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { InspectionOption } from "../..";
import { InspectionUnit } from "../../../../models";
import {
  BoxLocation,
  LocationFileds,
  LocationHelpText,
  ResultsFound,
} from "./inspection-schedule.molecute.style";

interface IProps {
  onClickGo: () => void;
  onClickMoreClick: () => void;
  onChangeZipCode: (e: any) => void;
  validZipCode: boolean;
  units?: InspectionUnit[];
  loading: boolean;
  unitId?: string;
  zipcode?: string;
  onConfirm: (id: string, date: Date, hour: string) => void;
}
export const InspectionSchedule: React.FC<IProps> = (props) => {
  const { t } = useTranslation();

  const handleConfirm = (id: string, date: Date, hour: string) => {
    if (props.onConfirm) props.onConfirm(id, date, hour);
  };

  return (
    <div>
      <BoxLocation>
        <Row>
          <Col md={1}></Col>
          <Col md={"auto"}>
            <LocationHelpText>{t("LocationHelpText")}</LocationHelpText>
            <LocationFileds>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">
                    <CoxIcon name={"location"} />
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControlMask
                  mask={[/\d/, /\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/]}
                  placeholder={t("Insert your zip code")}
                  onChange={props.onChangeZipCode}
                  value={props.zipcode}
                />
                <InputGroup.Append>
                  <Button
                    variant="link"
                    onClick={props.onClickGo}
                    disabled={!props.validZipCode}
                  >
                    {t("Go")}
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </LocationFileds>
          </Col>
          <Col md={1}></Col>
        </Row>
      </BoxLocation>
      {!!props.units && (
        <Row>
          <Col>
            <ResultsFound>
              {t("ResultsInspectionFound", { count: props.units?.length })}
            </ResultsFound>
          </Col>
        </Row>
      )}

      <Row>
        {props.units?.length === 0 && (
          <Col className={"mb-4"}>{t("No results found")}</Col>
        )}
        {props.units?.map((m, i) => (
          <Col lg={"4"} className={"mb-4"} key={`Col-${i}`}>
            <InspectionOption
              key={i}
              index={i.toString()}
              address={m.address}
              phone={m.phones.join(" / ")}
              email={m.emails.join(" / ")}
              storeName={m.unitName}
              choosed={m.idUnit === props.unitId}
              onConfirm={(date: Date, hour: string) =>
                handleConfirm(m.idUnit, date, hour)
              }
            />
          </Col>
        ))}
      </Row>

      {props.loading ? (
        <Row>
          <Col
            className={
              "h-100 d-flex m-5 align-items-center justify-content-center"
            }
          >
            <Spinner animation="border" />
          </Col>
        </Row>
      ) : (
        <>
          {!!props.units && props.units.length > 0 && (
            <Row>
              <Col className={"text-center"}>
                <ButtonSecondary
                  sizex={"md"}
                  sizey={"thin"}
                  onClick={props.onClickMoreClick}
                >
                  {t("SeeMore")}
                </ButtonSecondary>
              </Col>
            </Row>
          )}
        </>
      )}
    </div>
  );
};
