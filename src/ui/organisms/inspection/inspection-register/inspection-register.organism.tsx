import { useFormik } from "formik";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Col, Form } from "react-bootstrap";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useTranslation } from "react-i18next";
import { useHistory, useParams } from "react-router-dom";
import {
  useInspectionContext,
  useManhein,
  useSessionContext,
  useVehicleRegisterContext,
} from "../../../../hooks";
import { InspectionRegisterValidation } from "./inspection-register.organism.validation";
import {
  CardVehicleDetails,
  CheckoutInspection,
  CompanyInspectionChoose,
  FeedbackModal,
  InspectionSchedule,
  PaymentCreditCard,
  PaymentCreditCardForm,
  VerticalStep,
} from "../../../molecules";
import {
  RowContent,
  HelpText,
  WrapperContentStep,
  BtSubmit,
} from "./inspection-register.organism.style";
import {
  AdInspectionPaymentRequest,
  AdInspectionRequest,
  ConflictRequestError,
  InspectionCompany,
  InspectionPlan,
  InspectionSteps,
  InspectionUnit,
} from "../../../../models";
import { ButtonPrimary, NumberHelper } from "c4u-web-components";
import * as Scroll from "react-scroll";
import { paths } from "../../../../constants";

export const InspectionRegister: React.FC = () => {
  const { t } = useTranslation();
  const {
    getPlans,
    saveAdInspection,
    payAdInspection,
    getUnits,
  } = useManhein();

  const {
    stepContext,
    setStepContext,
    inspectionContext,
    setInspectionContext,
  } = useInspectionContext();

  const [plans, setPlans] = useState<InspectionPlan[]>();
  const [units, setUnits] = useState<InspectionUnit[]>();
  const [showModal, setShowModal] = useState(false);
  const [submiting, setSubmiting] = useState(false);
  const [loadingUnits, setLoadingUnits] = useState(false);

  const {
    showGenericErrorModal,
    showGenericWarningModal,
  } = useSessionContext();

  const history = useHistory();
  const params = useParams();

  const idVehicleParam = useMemo((): number => {
    return (params as any).id as number;
  }, [params]);

  const {
    vehicleContext,
    setSavedAdContextAsync,
  } = useVehicleRegisterContext();

  const scroll = Scroll.animateScroll;
  const scroller = Scroll.scroller;
  const propsScroll = {
    duration: 1500,
    delay: 100,
    smooth: true,
  };

  const initialValues = {} as PaymentCreditCardForm;

  const formik = useFormik<PaymentCreditCardForm>({
    initialValues: initialValues,
    onSubmit: (values) => {
      let inspection = { ...inspectionContext };
      inspection.creditCard = {
        cvv: values.cv,
        month: values.month,
        name: values.name,
        number: values.creditCardNumber.replace(/[^/d]/, ""),
        parcelable: 1,
        year: values.year,
      };
      setInspectionContext(inspection);
    },
    validationSchema: InspectionRegisterValidation(),
    validateOnBlur: true,
    validateOnChange: false,
  });

  const showCompanyChoose = useMemo(() => {
    return (
      stepContext === InspectionSteps.CompanyChoose ||
      stepContext === InspectionSteps.Payment ||
      stepContext === InspectionSteps.Schedule
    );
  }, [stepContext]);

  const showPayment = useMemo(() => {
    return (
      stepContext === InspectionSteps.Payment ||
      stepContext === InspectionSteps.Schedule
    );
  }, [stepContext]);

  const showSchedule = useMemo(() => {
    return stepContext === InspectionSteps.Schedule;
  }, [stepContext]);

  const showCheckout = useMemo(() => {
    return stepContext === InspectionSteps.Checkout;
  }, [stepContext]);

  useEffect(() => {
    scroller.scrollTo(`scroll${stepContext}`, propsScroll);
  }, [stepContext]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!vehicleContext && idVehicleParam) {
      setSavedAdContextAsync(idVehicleParam);
    }
  }, [vehicleContext, idVehicleParam]); // eslint-disable-line react-hooks/exhaustive-deps

  const titleVehicle = useMemo((): string => {
    if (!vehicleContext) return "";
    return `${vehicleContext.vehicle?.brandName} ${
      vehicleContext.vehicle?.modelName
    } ${vehicleContext.vehicle?.hp} ${t("Hp")} - ${
      vehicleContext.vehicle?.year
    }`;
  }, [vehicleContext, t]);

  const handleSelectPlan = (id: string) => {
    let inspection = { ...inspectionContext };
    inspection.inspectionPlan = plans?.find((f) => f.id === id);
    setInspectionContext(inspection);
  };
  const handleSelectInspectionCompany = (id: InspectionCompany) => {
    let inspection = { ...inspectionContext };
    inspection.inspectionCompany = Number(id);
    setInspectionContext(inspection);
    scroll.scrollToBottom(propsScroll);
  };
  const handleSchedule = (id: string, date: Date, hour: string) => {
    let inspection = { ...inspectionContext };
    inspection.dateSchedule = date;
    inspection.hourSchedule = hour;
    inspection.unitSchedule = units?.find((f) => f.idUnit === id);
    setInspectionContext(inspection);
  };

  const vehicleDescription = useMemo(() => {
    if (!vehicleContext) return "";
    return `${vehicleContext.vehicle?.brandName} ${
      vehicleContext.vehicle?.modelName
    } ${vehicleContext.vehicle?.versionName} ${vehicleContext.vehicle?.hp} ${t(
      "hp"
    )} ${vehicleContext.vehicle?.year}`;
  }, [vehicleContext, t]);

  const handleChangeData = () => {
    setStepContext(InspectionSteps.Schedule);
  };
  const handleChangeInspection = () => {
    let inspection = { ...inspectionContext };
    inspection.dateSchedule = undefined;
    inspection.hourSchedule = undefined;
    inspection.unitSchedule = undefined;
    setInspectionContext(inspection);
  };

  const handleFinish = async () => {
    setSubmiting(true);
  };

  const backToPayment = () => {
    setStepContext(InspectionSteps.Payment);
  };

  const finish = async () => {
    try {
      const request = new AdInspectionRequest({
        id: inspectionContext?.id,
        adId: idVehicleParam,
        inspectionDate: inspectionContext.dateSchedule,
        inspectionDescription: inspectionContext.unitSchedule?.address,
        inspectionPeriod: inspectionContext.hourSchedule,
        inspectionPlaceId: inspectionContext.unitSchedule?.idUnit,
        inspectionPlaceName: inspectionContext.unitSchedule?.unitName,
        inspectionPlanId: inspectionContext.inspectionPlan?.id,
        inspectionPlanName: inspectionContext.inspectionPlan?.name,
        inspectionPlanValue: inspectionContext.inspectionPlan?.value,
        partnerId: inspectionContext.inspectionCompany,
        inspectionPlaceEmails: inspectionContext.unitSchedule?.emails,
        inspectionPlacePhones: inspectionContext.unitSchedule?.phones,
      });
      const response = await saveAdInspection(request);

      let inspection = { ...inspectionContext, id: response?.id };

      if (inspection.id) {
        setInspectionContext(inspection);
      } else throw new Error(JSON.stringify(response));

      const requestPayment = new AdInspectionPaymentRequest({
        creditCardCvv: inspectionContext.creditCard.cvv,
        creditCardMonthValid: inspectionContext.creditCard.month,
        creditCardYearValid: inspectionContext.creditCard.year,
        creditCardName: inspectionContext.creditCard.name,
        creditCardNumber: inspectionContext.creditCard.number,
        inspectionId: response.id,
        inspectionPlaceId: inspectionContext.unitSchedule?.idUnit,
        inspectionPlanId: inspectionContext.inspectionPlan?.id,
        partnerId: inspectionContext.inspectionCompany,
        plate: vehicleContext.vehicleInfo?.plate,
        renavam: vehicleContext.vehicleInfo?.renavam,
      });

      const responsePayment = await payAdInspection(requestPayment);
      inspection.status = responsePayment.status;
      setInspectionContext(inspection);

      setShowModal(true);
    } catch (e) {
      if (e instanceof ConflictRequestError) {
        showGenericWarningModal(e.message, backToPayment);
      } else {
        showGenericErrorModal();
      }
    } finally {
      setSubmiting(false);
    }
  };

  const getPlansAsync = useCallback(
    async (id: InspectionCompany) => {
      try {
        const plansAsync = await getPlans(id);
        setPlans(plansAsync);
      } catch (error) {
        setPlans([]);
      }
    },
    [getPlans]
  );

  useEffect(() => {
    if (inspectionContext?.inspectionCompany >= 0) {
      setPlans(undefined);
      getPlansAsync(inspectionContext.inspectionCompany);
    }
  }, [inspectionContext?.inspectionCompany]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (submiting) finish();
  }, [submiting]); // eslint-disable-line react-hooks/exhaustive-deps

  const [offset, setOffset] = useState<number>(1);
  const [zipCode, setZipCode] = useState<string>();

  const validZipCode = useMemo(() => !!zipCode?.match(/\d{5}-\d{3}/), [
    zipCode,
  ]);

  useEffect(() => {
    if (loadingUnits) {
      getUnits(
        inspectionContext?.inspectionCompany,
        NumberHelper.toNumber(zipCode),
        3,
        offset
      )
        .then((un) => {
          setOffset(offset + un?.length);
          if (units) {
            const unitItems = [...units];
            un.forEach((f) => {
              unitItems.push(f);
            });
            setUnits(unitItems);
          } else {
            setUnits(un);
          }
          scroll.scrollToBottom(propsScroll);
        })
        .catch(() => setUnits([]))
        .finally(() => setLoadingUnits(false));
    }
  }, [loadingUnits]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleMoreClick = async () => {
    setLoadingUnits(true);
  };

  const handleGoClick = async () => {
    setUnits(undefined);
    setLoadingUnits(true);
    setOffset(1);
  };

  return (
    <>
      <FeedbackModal
        type={"success"}
        show={showModal}
        onHide={() => setShowModal(false)}
        title={t("TitleModalInspectionConfirmation")}
        content={t("DescriptionModalInspectionConfirmation")}
        textButton={t("TitleMyInspectionsPage")}
        onClickButton={() => history.push(paths.MyInspections())}
      />

      {!showCheckout && (
        <RowContent>
          <Col md={"1"} className={"d-none d-md-flex"}>
            <VerticalStep active={false} step={"Vehicle"} />
          </Col>
          <Col md>
            <WrapperContentStep>
              <label>{t("Vehicle")}</label>
              <CardVehicleDetails
                photo={vehicleContext?.vehicle?.firstMediaCompleteURLLarge}
                plate={vehicleContext?.vehicleInfo?.plate}
                title={titleVehicle}
                price={vehicleContext?.vehicleInfo?.priceAsked}
                priceStart={vehicleContext?.vehiclePrice?.priceKbbInitial}
                priceEnd={vehicleContext?.vehiclePrice?.priceKbbFinal}
                onClickEditVehicle={() =>
                  history.push(
                    paths
                      .vehicleRegister()
                      .replace(":id", idVehicleParam.toString())
                  )
                }
              />
            </WrapperContentStep>
          </Col>
        </RowContent>
      )}

      {showCompanyChoose && (
        <Scroll.Element name={`scroll${InspectionSteps.CompanyChoose}`}>
          <RowContent>
            <Col md={"1"} className={"d-none d-md-flex"}>
              <VerticalStep
                active={
                  stepContext === InspectionSteps.CompanyChoose || !stepContext
                }
                step={"Inspection"}
              />
            </Col>
            <Col md>
              <WrapperContentStep>
                <label>{t("Inspection")}</label>
                <HelpText>{t("InspectionCompanyHelp")}</HelpText>
                <CompanyInspectionChoose
                  onSelectPlan={handleSelectPlan}
                  onSelectInspectionCompany={handleSelectInspectionCompany}
                  plansList={plans}
                  planId={inspectionContext?.inspectionPlan?.id}
                  inspectionCompany={inspectionContext?.inspectionCompany}
                />
              </WrapperContentStep>
            </Col>
          </RowContent>
        </Scroll.Element>
      )}
      {showPayment && (
        <Scroll.Element name={`scroll${InspectionSteps.Payment}`}>
          <RowContent>
            <Col md={"1"} className={"d-none d-md-flex"}>
              <VerticalStep
                active={stepContext === InspectionSteps.Payment}
                step={"Payment"}
              />
            </Col>
            <Col md>
              <WrapperContentStep>
                <label>{t("Inspection payment")}</label>
                <HelpText>{t("InspectionPaymentHelp")}</HelpText>
                <Form onSubmit={(e: any) => formik.handleSubmit(e)}>
                  <PaymentCreditCard formik={formik} />
                  {!showSchedule && (
                    <BtSubmit>
                      <ButtonPrimary type={"submit"} sizex={"md"}>
                        {t("Continue")}
                      </ButtonPrimary>
                    </BtSubmit>
                  )}
                </Form>
              </WrapperContentStep>
            </Col>
          </RowContent>
        </Scroll.Element>
      )}

      {showSchedule && (
        <Scroll.Element name={`scroll${InspectionSteps.Schedule}`}>
          <RowContent>
            <Col md={"1"} className={"d-none d-md-flex"}>
              <VerticalStep
                active={stepContext === InspectionSteps.Schedule}
                step={"Schedule"}
              />
            </Col>
            <Col md>
              <WrapperContentStep>
                <label>{t("Schedule inspection")}</label>
                <InspectionSchedule
                  onChangeZipCode={(e: any) => setZipCode(e.target.value)}
                  onClickMoreClick={handleMoreClick}
                  onClickGo={handleGoClick}
                  validZipCode={validZipCode}
                  onConfirm={handleSchedule}
                  loading={loadingUnits}
                  unitId={inspectionContext.unitSchedule?.idUnit}
                  units={units}
                  zipcode={zipCode}
                />
              </WrapperContentStep>
            </Col>
          </RowContent>
        </Scroll.Element>
      )}

      {showCheckout && (
        <Scroll.Element name={`scroll${InspectionSteps.Checkout}`}>
          <RowContent>
            <Col md={"1"} className={"d-none d-md-flex"}>
              <VerticalStep
                active={stepContext === InspectionSteps.Checkout}
                step={"Schedule"}
              />
            </Col>
            <Col md>
              <WrapperContentStep>
                <label>Checkout</label>
                <HelpText>{t("InspectionCheckoutHelp")}</HelpText>
                <CheckoutInspection
                  id={vehicleContext?.id ?? 0}
                  vehicleDescription={vehicleDescription}
                  plate={vehicleContext.vehicleInfo?.plate ?? ""}
                  inpectionTime={`${
                    inspectionContext.dateSchedule
                      ? format(
                          inspectionContext.dateSchedule,
                          `dd '${t("of")}' MMMM '${t("of")}' yyyy`,
                          { locale: ptBR }
                        )
                      : ""
                  } ${t("at")} ${inspectionContext.hourSchedule}`}
                  inspectionUnit={
                    inspectionContext.unitSchedule?.unitName ?? ""
                  }
                  inspectionAddress={
                    inspectionContext.unitSchedule?.address ?? ""
                  }
                  inspectionPlan={inspectionContext.inspectionPlan?.name ?? ""}
                  inspectionValue={inspectionContext.inspectionPlan?.value ?? 0}
                  date={new Date()}
                  onClickChangeData={handleChangeData}
                  onClickChangeInspection={handleChangeInspection}
                  onClickFinish={handleFinish}
                  loading={submiting}
                />
              </WrapperContentStep>
            </Col>
          </RowContent>
        </Scroll.Element>
      )}
    </>
  );
};
