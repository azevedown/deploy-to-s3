import { ButtonPrimary, CoxIcon, NumberHelper } from "c4u-web-components";
import { parseISO, format } from "date-fns";
import React, { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { VehicleDebit } from "../../../../models";
import {
  BoxAdTaxes,
  BoxAdValue,
  BoxCalc,
  BoxResume,
  BoxResumeContent,
  BoxResumeTitle,
  BoxTaxes,
  DivTitle,
  FooterContent,
  Icon,
  Label,
  SubTitle,
  TextTitle,
  Value,
  WrapperContent,
} from "./vehicle-taxes.molecule.style";

interface IProps {
  vehicleDebits: VehicleDebit[] | null;
  messagem?: string;
  onAgreeTerms: (accept: boolean) => void;
  loadDebits: () => void;
  vehicleSellPrice?: number;
}
export const VehicleTaxes: React.FC<IProps> = (parameters) => {
  const { t } = useTranslation();

  const [props, setProps] = useState<IProps>(parameters);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onAgreeTerms(event.target.checked);
  };

  const [valueDebits, setValueDebits] = useState<number>();

  const formatDate = (date: any): string => {
    if (!date) return "--";
    try {
      const dateParsed = date instanceof Date ? date : parseISO(date);
      return format(dateParsed, "dd/MM/yyyy");
    } catch (e) {
      return "--";
    }
  };

  useEffect(() => {
    if (props.vehicleDebits) {
      const total = props.vehicleDebits.reduce(
        (sum, current) => sum + (current?.amount ?? 0),
        0
      );

      setValueDebits(total);
    }
  }, [props.vehicleDebits]);

  useEffect(() => {
    setProps(parameters);
  }, [parameters]);

  const getTotalValue = () => {
    if (valueDebits) {
      return NumberHelper.toFormatString(valueDebits, 2, "0,00");
    }
    return "--";
  };

  const getTotalValueLiquid = () => {
    if (valueDebits && props.vehicleSellPrice) {
      return NumberHelper.toFormatString(
        props.vehicleSellPrice - valueDebits,
        2,
        "0,00"
      );
    }

    return "--";
  };

  return (
    <>
      <Row>
        <Col>
          <BoxTaxes>
            <DivTitle>
              <TextTitle>{t("Debits and taxes values")}</TextTitle>
            </DivTitle>

            <Row className={"m-0"}>
              {!props.vehicleDebits ? (
                <Col>
                  <div className={"text-center m-5"}>
                    <SubTitle className={"mb-2"}>
                      {props.messagem ?? t("ErrorZapay")}
                    </SubTitle>
                    <ButtonPrimary onClick={props.loadDebits} sizex={"md"}>
                      {t("Find Debits")}
                    </ButtonPrimary>
                  </div>
                </Col>
              ) : (
                <Col>
                  {props.vehicleDebits?.length === 0 ? (
                    <div className={"text-center m-5"}>
                      <CoxIcon name="checked" />
                      <SubTitle className={"mt-2"}>
                        {t("No pendings vehicle debits")}
                      </SubTitle>
                    </div>
                  ) : (
                    props.vehicleDebits?.map((m, i) => (
                      <Row key={i} className={"line-bottom"}>
                        <Col md={1} className={"p-0"}>
                          <Icon>
                            <CoxIcon name="error" />
                          </Icon>
                        </Col>
                        <Col xs={11}>
                          <WrapperContent>
                            <Row>
                              <Col xs={12}>
                                <SubTitle>{m.title}</SubTitle>
                              </Col>
                            </Row>
                            <Row>
                              <Col md={3}>
                                <Label>{t("Comment Date")}</Label>
                                <Value>{formatDate(m.expiration_date)}</Value>
                              </Col>
                              <Col md={3}>
                                <Label>{t("Infraction Notice")}</Label>
                                <Value>{m.id}</Value>
                              </Col>
                              <Col md={3}>
                                {!!m.issuing_agency && (
                                  <>
                                    <Label>{t("Self-Governing Body")}</Label>
                                    <Value>{m.issuing_agency}</Value>
                                  </>
                                )}
                              </Col>
                              <Col md={3}>
                                <Label last>{t("Due date")}</Label>
                                <Value>{formatDate(m.due_date)}</Value>
                              </Col>
                            </Row>
                            <Row>
                              <Col md={9}>
                                <Label>{t("Description")}</Label>
                                <Value>{m.description}</Value>
                              </Col>
                              <Col md={3}>
                                <Label last>{t("Value")}</Label>
                                <Value value last>
                                  {`${t("$")} ${NumberHelper.toFormatString(
                                    m.amount,
                                    2
                                  )}`}
                                </Value>
                              </Col>
                            </Row>
                          </WrapperContent>
                        </Col>
                      </Row>
                    ))
                  )}

                  {/* <Row className={'line-bottom'}>
                  <Col md={1} className={'p-0'}>
                    <Icon>
                      <CoxIcon name="error" />
                    </Icon>
                  </Col>
                  <Col xs={11}>
                    <WrapperContent>
                      <Row>
                        <Col xs={12}>
                          <SubTitle>Infração Vencida</SubTitle>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={3}>
                          <Label>{t('Comment Date')}</Label>
                          <Value>20/10/2018</Value>
                        </Col>
                        <Col md={3}>
                          <Label>{t('Infraction Notice')}</Label>
                          <Value>1002017567</Value>
                        </Col>
                        <Col md={3}>
                          <Label>{t('Self-Governing Body')}</Label>
                          <Value>DER-SP</Value>
                        </Col>
                        <Col md={3}>
                          <Label last>{t('Due date')}</Label>
                          <Value last>01/09/2020</Value>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={9}>
                          <Label>{t('Description')}</Label>
                          <Value>Transitar em velocidade superior máxima permitida até 20%</Value>
                        </Col>
                        <Col md={3}>
                          <Label last>{t('Value')}</Label>
                          <Value value last>R$ 300,00</Value>
                        </Col>
                      </Row>
                    </WrapperContent>
                  </Col>
                </Row>

                <Row>
                  <Col md={1} className={'p-0'}>
                    <Icon>
                      <CoxIcon name="error" />
                    </Icon>
                  </Col>
                  <Col xs={11}>
                    <WrapperContent>
                      <Row>
                        <Col xs={12}>
                          <SubTitle>Infração Vencida</SubTitle>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={3}>
                          <Label>{t('Comment Date')}</Label>
                          <Value>20/10/2018</Value>
                        </Col>
                        <Col md={3}>
                          <Label>{t('Infraction Notice')}</Label>
                          <Value>1002017567</Value>
                        </Col>
                        <Col md={3}>
                          <Label>{t('Self-Governing Body')}</Label>
                          <Value>DER-SP</Value>
                        </Col>
                        <Col md={3}>
                          <Label last>{t('Due date')}</Label>
                          <Value last>01/09/2020</Value>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={9}>
                          <Label>{t('Description')}</Label>
                          <Value>Transitar em velocidade superior máxima permitida até 20%</Value>
                        </Col>
                        <Col md={3}>
                          <Label last>{t('Value')}</Label>
                          <Value value last>R$ 300,00</Value>
                        </Col>
                      </Row>
                    </WrapperContent>
                  </Col>
                </Row> */}

                  {!!props.vehicleDebits && (
                    <Row>
                      <Col className={"p-0 text-center"}>
                        <FooterContent>
                          <h2 className={"text-uppercase"}>
                            {`${t("Total debits")} - ${t(
                              "$"
                            )} ${getTotalValue()}`}
                          </h2>
                          <div>
                            <Form.Check onChange={handleChange} />
                            <span className={"text-uppercase"}>
                              {t("I agree")}
                            </span>{" "}
                            {t("AgreementTermsDebits")}
                          </div>
                        </FooterContent>
                      </Col>
                    </Row>
                  )}
                </Col>
              )}
            </Row>
          </BoxTaxes>
        </Col>
      </Row>

      <Row>
        <Col>
          <BoxResume>
            <BoxResumeTitle>
              <span>{t("Abstract")}</span>
            </BoxResumeTitle>
            <BoxResumeContent>
              <Row className={"m-auto py-3"}>
                <Col lg={"auto"} className={"p-0"}>
                  <BoxAdValue className={"m-auto"}>
                    <div>{t("Ad value")}</div>
                    <div>{`${t("$")} ${NumberHelper.toFormatString(
                      props.vehicleSellPrice,
                      0,
                      "--"
                    )}`}</div>
                  </BoxAdValue>
                </Col>
                <div className={"m-auto p-2"}>
                  <CoxIcon name={"minus"} />
                </div>
                <Col lg={"auto"} className={"p-0"}>
                  <BoxAdTaxes className={"m-auto"}>
                    <div>{t("Debits and traffic tickets")}</div>
                    <div> {`${t("$")} ${getTotalValue()}`}</div>
                  </BoxAdTaxes>
                </Col>
                <div className={"m-auto p-2"}>
                  <CoxIcon name={"equal"} />
                </div>
                <Col lg={"auto"} className={"p-0"}>
                  <BoxCalc className={"m-auto"}>
                    <div>{t("Total value liquid")}</div>
                    <div>{`${t("$")} ${getTotalValueLiquid()}`}</div>
                  </BoxCalc>
                </Col>
              </Row>
            </BoxResumeContent>
          </BoxResume>
        </Col>
      </Row>
    </>
  );
};
