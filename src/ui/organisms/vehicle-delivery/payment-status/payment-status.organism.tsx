import { ButtonPrimary } from "c4u-web-components";
import React, { useEffect, useMemo } from "react";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import {
  useVehicleDeliveryContext,
  useVehicleRegisterContext,
} from "../../../../hooks";
import { CustomerAd } from "../../../../models";
import {
  AdInfoAccepted,
  CardVehicleAdInfo,
  FeedbackDut,
  SideStepper,
  StatusDeliveryPayment,
} from "../../../molecules";
import {
  ContentPaymentStatus,
  DescriptionStepDelivery,
  DivButtonAdvance,
  TitleStepDelivery,
} from "./payment-status.organism.style";

export const PaymentStatus: React.FC = () => {
  const { t } = useTranslation();

  const params = useParams();

  const idVehicleParam = useMemo((): number => {
    return (params as any).id as number;
  }, [params]);

  const {
    vehicleContext,
    setAdContext,
    setAdContextAsync,
    setVehiclePricesContextAsync,
  } = useVehicleRegisterContext();

  const { stepVDContext, setStepVDContext } = useVehicleDeliveryContext();

  useEffect(() => {
    setStepVDContext(1);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!vehicleContext && idVehicleParam) {
      setAdContextAsync(idVehicleParam);
    }
  }, [vehicleContext, idVehicleParam]); // eslint-disable-line react-hooks/exhaustive-deps

  //TODO: MOCK ->
  useEffect(() => {
    if (vehicleContext?.vehicle && !vehicleContext?.vehicleInfo) {
      const localVehicleContext = { ...vehicleContext };

      if (!localVehicleContext?.vehicleInfo)
        localVehicleContext.vehicleInfo = {};
      if (!localVehicleContext?.customer)
        localVehicleContext.customer = {} as CustomerAd;

      localVehicleContext.vehicleInfo.gradeId = 3;
      localVehicleContext.vehicleInfo.mileage = 200000;
      localVehicleContext.customer.kbbStateId = 25;

      setAdContext(localVehicleContext);
    }
  }, [vehicleContext]); // eslint-disable-line react-hooks/exhaustive-deps
  //TODO: <- MOCK

  useEffect(() => {
    if (
      vehicleContext?.vehicle &&
      !vehicleContext?.vehiclePrice &&
      vehicleContext?.vehicleInfo
    ) {
      setVehiclePricesContextAsync();
    }
  }, [vehicleContext]); // eslint-disable-line react-hooks/exhaustive-deps

  const titleVehicle = useMemo((): string => {
    if (!vehicleContext) return "";
    return `${vehicleContext.vehicle?.brandName} ${
      vehicleContext.vehicle?.modelName
    } ${vehicleContext.vehicle?.hp} ${t("Hp")} - ${
      vehicleContext.vehicle?.year
    }`;
  }, [vehicleContext, t]);

  const itemsMenu = [t("Payment"), t("Fill the DUT"), t("Schedule delivery")];

  const handleClickAdvance = () => {
    setStepVDContext(stepVDContext + 1);
  };

  return (
    <>
      <CardVehicleAdInfo
        photo={vehicleContext?.vehicle?.firstMediaCompleteURLLarge}
        plate={vehicleContext?.vehicleInfo?.plate ?? "432i5324"}
        title={titleVehicle}
        price={vehicleContext?.vehicleInfo?.priceAsked}
        priceStart={vehicleContext?.vehiclePrice?.priceKbbInitial}
        priceEnd={vehicleContext?.vehiclePrice?.priceKbbFinal}
        cardStatus={<AdInfoAccepted />}
      />

      <ContentPaymentStatus>
        <Row>
          <Col md={"auto"}>
            <SideStepper step={stepVDContext} items={itemsMenu} />
          </Col>
          <Col md>
            {stepVDContext === 1 && (
              <>
                <TitleStepDelivery>
                  {t("Status Payment by buyer")}
                </TitleStepDelivery>
                <DescriptionStepDelivery></DescriptionStepDelivery>
                <StatusDeliveryPayment />
              </>
            )}
            {stepVDContext === 2 && (
              <>
                <TitleStepDelivery>{t("FillDutTitle")}</TitleStepDelivery>
                <DescriptionStepDelivery>
                  {t("FillDutDescription")}
                </DescriptionStepDelivery>
                <FeedbackDut
                  address={"Rua teste, cidade teste, estado teste"}
                  buyerName={"Fulano de tal"}
                  date={new Date()}
                  federalDocument={"123.456.789-09"}
                  regionalDocument={"d234r23434"}
                  value={2345.32}
                />
              </>
            )}
            {stepVDContext === 3 && (
              <>
                <TitleStepDelivery>
                  {t("ScheduleDeliveryTitle")}
                </TitleStepDelivery>
                <DescriptionStepDelivery>
                  {t("ScheduleDeliveryDescription")}
                </DescriptionStepDelivery>
                {/* <InspectionSchedule /> */}
              </>
            )}
          </Col>
        </Row>
        {stepVDContext !== 3 && (
          <Row>
            <Col className={"text-right"}>
              <DivButtonAdvance>
                <ButtonPrimary sizex={"md"} onClick={handleClickAdvance}>
                  {t("Advance")}
                </ButtonPrimary>
              </DivButtonAdvance>
            </Col>
          </Row>
        )}
      </ContentPaymentStatus>
    </>
  );
};
