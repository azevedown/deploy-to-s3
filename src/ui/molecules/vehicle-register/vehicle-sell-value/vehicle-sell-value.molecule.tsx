import { CoxIcon, Img, Tooltip, FormControlMoney } from "c4u-web-components";
import { FormikErrors } from "formik";
import React, { useCallback, useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useKbb, useVehicleRegisterContext } from "../../../../hooks";
import { PriceAdvisorRequest } from "../../../../models";
import {
  BoxSellPrice,
  BoxSellPriceTitle,
  BoxValues,
  DivTitle,
  TextTitle,
  VehicleContent,
  VehicleData,
  VehiclePicture,
  BoxSellPriceContent,
  RowContent,
  DivPriceAdvisor,
} from "./vehicle-sell-value.molecule.style";

export interface VehicleSellValueFormikValues {
  sellPrice: number;
}

interface IProps {
  formik: {
    handleChange: (e: React.ChangeEvent<any>) => void;
    values: VehicleSellValueFormikValues;
    errors: FormikErrors<VehicleSellValueFormikValues>;
  };
}

export const VehicleSellValue: React.FC<IProps> = (props) => {
  const { t } = useTranslation();

  const [lookForPrice, setLookForPrice] = useState(false);
  const formik = props.formik;

  const {
    vehicleContext,
    setVehiclePricesContextAsync,
  } = useVehicleRegisterContext();
  const [priceAdvisor, setPriceAdvisor] = useState<string>();

  const { GetPriceAdvisor } = useKbb();

  const GetPriceAdvisorAsync = useCallback(async (): Promise<void> => {
    if (vehicleContext) {
      const request = {
        vehiclePriceTypeID: 1,
        vehicleGradeID: vehicleContext?.vehicleInfo?.gradeId,
        vehicleID: vehicleContext?.vehicle?.id,
        mileage: vehicleContext?.vehicleInfo?.mileage,
        year: vehicleContext?.vehicle?.year,
        locationStateID: vehicleContext?.customer?.kbbStateId ?? 25,
        equipmentCost: vehicleContext?.vehicleInfo?.equipmentCoast,
        colorID: vehicleContext?.vehicleInfo?.vehicleColorId,
      } as PriceAdvisorRequest;

      const response = await GetPriceAdvisor(request);
      setPriceAdvisor(response);
    }
  }, [GetPriceAdvisor, vehicleContext]);

  useEffect(() => {
    if (
      vehicleContext?.vehicle &&
      vehicleContext?.vehicleInfo &&
      !lookForPrice
    ) {
      setVehiclePricesContextAsync();
      GetPriceAdvisorAsync();
      setLookForPrice(true);
    }
  }, [vehicleContext]); //eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Row>
        <Col>
          <BoxValues>
            <DivTitle>
              <TextTitle>{t("Sells")}</TextTitle>
            </DivTitle>

            <RowContent>
              <Col>
                <Row>
                  <Col className={"text-center"}>
                    <VehicleData>
                      <VehiclePicture className={"pr-4"}>
                        <Img
                          src={
                            vehicleContext?.vehicle?.firstMediaCompleteURLMedium
                          }
                        />
                      </VehiclePicture>
                      <VehicleContent>
                        <h4>
                          {vehicleContext?.vehicle?.brandName}{" "}
                          {vehicleContext?.vehicle?.modelName}{" "}
                          {vehicleContext?.vehicle?.year}
                        </h4>
                        <p>{vehicleContext?.vehicle?.versionName}</p>
                      </VehicleContent>
                    </VehicleData>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <BoxSellPrice>
                      <BoxSellPriceTitle>
                        <span>{t("Price Would Like Receive")}</span>
                      </BoxSellPriceTitle>
                      <BoxSellPriceContent>
                        <Form.Row>
                          <Form.Group as={Col} className={"form-default"}>
                            <Form.Label htmlFor={"sellPrice"}>
                              {t("Sells price")}{" "}
                              <Tooltip content={t("AdvicePrice")}>
                                <CoxIcon name={"information"} />
                              </Tooltip>
                            </Form.Label>
                            <FormControlMoney
                              id={"sellPrice"}
                              placeholder={t("Tab here")}
                              decimalScale={0}
                              onChange={formik.handleChange}
                              value={formik.values?.sellPrice}
                              isInvalid={!!formik.errors?.sellPrice}
                            />
                            <Form.Control.Feedback type="invalid">
                              {formik.errors?.sellPrice}
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Form.Row>
                      </BoxSellPriceContent>
                    </BoxSellPrice>
                  </Col>
                </Row>
              </Col>
              <Col>
                {priceAdvisor && (
                  <DivPriceAdvisor
                    dangerouslySetInnerHTML={{ __html: priceAdvisor }}
                  ></DivPriceAdvisor>
                )}
              </Col>
            </RowContent>
          </BoxValues>
        </Col>
      </Row>
    </>
  );
};
