import { ButtonPrimary } from "c4u-web-components";
import { useFormik } from "formik";
import React, { createRef, useEffect, useMemo, useState } from "react";
import { Col, Form, Spinner } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useHistory, useParams } from "react-router-dom";
import {
  useManhein,
  useSessionContext,
  useVehicleRegisterContext,
} from "../../../../hooks";
import {
  AdVehicleValueRequest,
  ConflictRequestError,
  VehicleDebit,
  ZapayTypeDebits,
} from "../../../../models";
import {
  FeedbackModal,
  MenuVehicleRegister,
  VehicleSellValue,
  VehicleTaxes,
} from "../../../molecules";
import { VehicleSellValueFormikValues } from "../../../molecules/vehicle-register/vehicle-sell-value/vehicle-sell-value.molecule";
import { VehicleSellValueValidation } from "../../../molecules/vehicle-register/vehicle-sell-value/vehicle-sell-value.molecule.validation";
import {
  ContentModal,
  MsgToFollow,
  RowContent,
} from "./vehicle-values.organism.style";

export const VehicleValues: React.FC = () => {
  const { t } = useTranslation();

  const params = useParams();

  const {
    vehicleContext,
    setAdContext,
    setSavedAdContextAsync,
  } = useVehicleRegisterContext();
  const { handleFormikError } = useSessionContext();

  const history = useHistory();
  const [msgException, setMsgException] = useState<string>();
  const [releaseButton, setReleaseButton] = useState(false);
  const [debitsValidation, setDebitsValidation] = useState(false);
  const [showModalDebitsValidation, setShowModalDebitsValidation] = useState(
    false
  );
  const [vehicleDebits, setVehicleDebits] = useState<VehicleDebit[] | null>();
  const { saveAdVehicleValue, getVehicleDebits } = useManhein();

  const formik = useFormik({
    initialValues: {} as VehicleSellValueFormikValues,
    onSubmit: async (values, { setErrors }) => {
      if (releaseButton) {
        try {
          const request = new AdVehicleValueRequest({
            id: vehicleContext.id,
            kbbValueDate: new Date(),
            maxKbbValue: vehicleContext.vehiclePrice?.priceKbbFinal,
            minKbbValue: vehicleContext.vehiclePrice?.priceKbbInitial,
            sellValue: values?.sellPrice,
            trafficPenaltyValue: 1,
          });

          const response = await saveAdVehicleValue(request);

          let newVehicleContext = { ...vehicleContext };
          if (!newVehicleContext?.vehicleInfo)
            newVehicleContext.vehicleInfo = {};
          newVehicleContext.vehicleInfo.priceAsked = response.sellValue;

          setAdContext(newVehicleContext);
          history.push(`/vehicle-register/${response?.id}/photos`);
        } catch (e) {
          handleFormikError(e, setErrors);
        }
      }
    },
    validationSchema: VehicleSellValueValidation(),
    validateOnBlur: true,
    validateOnChange: false,
  });

  let refForm = createRef<HTMLFormElement>();

  const doSubmit = () => {
    refForm.current?.dispatchEvent(new Event("submit"));
  };

  const idAdParam = useMemo(() => {
    return (params as any).id;
  }, [params]);

  useEffect(() => {
    if (!vehicleContext && idAdParam) {
      setSavedAdContextAsync(idAdParam);
    } else if (vehicleContext?.vehicleInfo) {
      if (vehicleContext?.vehicleInfo?.priceAsked)
        formik.setValues({
          sellPrice: vehicleContext?.vehicleInfo?.priceAsked,
        });
    }
  }, [vehicleContext]); //eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (vehicleDebits === undefined)
      getVehicleDebits(idAdParam)
        .then((debits) => setVehicleDebits(debits))
        .catch((e) => {
          if (e instanceof ConflictRequestError) setMsgException(e?.message);
          setVehicleDebits(null);
        });
  }, [vehicleDebits]); //eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (vehicleDebits) {
      if (vehicleDebits.length === 0) setDebitsValidation(true);
      else {
        const trafficTicketsTotalValue = vehicleDebits
          .filter((f) => f.type === ZapayTypeDebits.RenainfTicket)
          ?.reduce((sum, current) => sum + (current?.amount ?? 0), 0);

        const valid = trafficTicketsTotalValue < 400;
        setShowModalDebitsValidation(!valid);
        setDebitsValidation(valid);
      }
    }
  }, [vehicleDebits]); //eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <FeedbackModal
        type={"error"}
        show={showModalDebitsValidation}
        onHide={() => setShowModalDebitsValidation(false)}
        title={t("TitleModalDebitsValidation")}
      >
        <ContentModal>
          {t("ContentModalDebitsValidationMsgValue")},{" "}
          <b>{t("ContentModalDebitsValidationExcedMsg")}</b>
          <MsgToFollow>{t("ContentModalDebitsValidationToFollow")}</MsgToFollow>
        </ContentModal>
      </FeedbackModal>
      <RowContent>
        <Col md={2}>
          <MenuVehicleRegister step={2} />
        </Col>
        <Col>
          <Form ref={refForm} onSubmit={(e: any) => formik.handleSubmit(e)}>
            <VehicleSellValue formik={formik} />
          </Form>
        </Col>
      </RowContent>
      <RowContent>
        <Col md={2}></Col>
        <Col>
          {vehicleDebits === undefined ? (
            <div
              className={
                "h-100 d-flex align-items-center justify-content-center"
              }
            >
              <Spinner animation="border" />
            </div>
          ) : (
            <VehicleTaxes
              messagem={msgException}
              vehicleDebits={vehicleDebits}
              onAgreeTerms={(a) => setReleaseButton(a)}
              loadDebits={() => setVehicleDebits(undefined)}
              vehicleSellPrice={formik.values.sellPrice}
            />
          )}
        </Col>
      </RowContent>
      <RowContent className={"mb-4"}>
        <Col className={"text-right"}>
          <ButtonPrimary
            onClick={doSubmit}
            disabled={!(releaseButton && debitsValidation)}
            sizex={"md"}
            loading={formik.isSubmitting}
          >
            {t("Advance")}
          </ButtonPrimary>
        </Col>
      </RowContent>
    </>
  );
};
