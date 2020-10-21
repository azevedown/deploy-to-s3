import {
  ButtonSecondary,
  Combo,
  CoxIcon,
  DropdownDefault,
  FormControlMask,
  Img,
  MaskHelper,
} from "c4u-web-components";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { InspectionCover } from "./../../../assets";
import {
  AdviceText,
  BoxOption,
  ConfirmationText,
  ContentInfo,
  DatePickerStyled,
  DivButton,
  StoreName,
  TextSchedule,
  TextStoreName,
  TitleInfo,
  WrapperConfirmation,
  WrapperPlaceInfo,
} from "./inspection-option.molecute.style";
import DatePicker from "react-datepicker";
import ptBr from "date-fns/locale/pt-BR";
import { useFormik } from "formik";
import { InspectionOptionValidation } from "./inspection-option.molecule.validation";
import { addDays, getDay } from "date-fns";

interface IProps {
  index: string;
  storeName: string;
  address: string;
  phone: string;
  email: string;
  choosed?: boolean;
  onConfirm?: (date: Date, hour: string) => void;
}

export interface InspectionOptionForm {
  date: Date;
  hour: string;
}
export const InspectionOption: React.FC<IProps> = (parameters) => {
  const { t } = useTranslation();

  const [choosed, setChoosed] = useState(parameters.choosed);
  const [confirm, setConfirm] = useState(false);
  const [props, setProps] = useState(parameters);
  const [valuesForm, setValuesForm] = useState<InspectionOptionForm>();

  useEffect(() => setProps(parameters), [parameters]);

  const hours = [
    {
      title: "10:00 horas às 11:00 horas",
      value: "10",
    },
    {
      title: "11:00 horas às 12:00 horas",
      value: "11",
    },
    {
      title: "12:00 horas às 13:00 horas",
      value: "12",
    },
    {
      title: "13:00 horas às 14:00 horas",
      value: "13",
    },
    {
      title: "14:00 horas às 15:00 horas",
      value: "14",
    },
    {
      title: "15:00 horas às 16:00 horas",
      value: "15",
    },
    {
      title: "16:00 horas às 17:00 horas",
      value: "16",
    },
    {
      title: "17:00 horas às 18:00 horas",
      value: "18",
    },
  ] as Combo[];

  const initialValues = {} as InspectionOptionForm;

  const formik = useFormik<InspectionOptionForm>({
    initialValues: initialValues,
    onSubmit: (values) => {
      setValuesForm(values);
      setConfirm(true);
    },
    validationSchema: InspectionOptionValidation(),
    validateOnBlur: true,
    validateOnChange: false,
  });

  const onClickOK = () => {
    if (props.onConfirm && valuesForm)
      props.onConfirm(valuesForm.date, valuesForm.hour);
  };

  const NUMBER_DAYS_CALENDAR = 4;

  const [datesValidation, setDatesValidation] = useState(false);
  const [startCalendarDate, setStartCalendarDate] = useState(new Date());
  const [endCalendarDate, setEndCalendarDate] = useState(
    addDays(new Date(), NUMBER_DAYS_CALENDAR)
  );

  const [excludeDates, setExcludeDates] = useState<Date[]>();
  useEffect(() => {
    if (!datesValidation) {
      let dateNow = startCalendarDate;
      const forbiddenWeekDays = [0, 6];

      let daysNotAllowed = [] as Date[];

      //adjust start date
      forbiddenWeekDays.forEach((f) => {
        if (f === getDay(dateNow)) {
          dateNow = addDays(dateNow, 1);
        }
      });

      setStartCalendarDate(dateNow);

      //startDate
      do {
        console.log(dateNow, getDay(dateNow))
        if (forbiddenWeekDays.includes(getDay(dateNow))) {
          daysNotAllowed.push(dateNow);
        }
        dateNow = addDays(dateNow, 1);
      } while (dateNow < addDays(endCalendarDate, forbiddenWeekDays.length));

      setEndCalendarDate(addDays(endCalendarDate, daysNotAllowed.length));

      setDatesValidation(true);
      setExcludeDates(daysNotAllowed);
    }
  }, [datesValidation, startCalendarDate, endCalendarDate]);

  return (
    <>
      {confirm ? (
        <WrapperConfirmation>
          <CoxIcon name={"calendar-confirm"} />
          <ConfirmationText>{t("ConfirmationScheduleTitle")}</ConfirmationText>
          <AdviceText>{t("ConfirmationScheduleAdvice")}</AdviceText>
          <ButtonSecondary onClick={onClickOK}>OK</ButtonSecondary>
        </WrapperConfirmation>
      ) : (
        <BoxOption choosed={!!choosed} key={`BoxOption-${props.index}`}>
          {choosed ? (
            <WrapperPlaceInfo key={`WrapperPlaceInfo-${props.index}`}>
              <TextSchedule className={"m-0 text-center"}>
                {t("TitleScheduleInspection")}
              </TextSchedule>
              <TextSchedule>{t("Date")}</TextSchedule>
              <DatePickerStyled>
                {!!datesValidation && (<DatePicker
                  selected={formik.values?.date}
                  onChange={(date: Date) => formik.setFieldValue("date", date)}
                  className={"form-control"}
                  locale={ptBr}
                  dateFormat={"dd/MM/yyyy"}
                  placeholderText={t("Select the date")}
                  minDate={startCalendarDate}
                  maxDate={endCalendarDate}
                  excludeDates={excludeDates}
                  customInput={
                    <FormControlMask
                      mask={MaskHelper.Date}
                      id={"date"}
                      isInvalid={!!formik.errors?.date}
                    />
                  }
                />)}
              </DatePickerStyled>
              <TextSchedule>{t("Hour")}</TextSchedule>
              <DropdownDefault
                data={hours}
                selectText={t("Select the hour")}
                id={"hour"}
                onChangeSelect={formik.handleChange}
                isInvalid={!!formik.errors?.date}
              />

              <DivButton>
                <ButtonSecondary onClick={formik.submitForm}>
                  {t("To schedule")}
                </ButtonSecondary>
              </DivButton>
            </WrapperPlaceInfo>
          ) : (
            <>
              <Row key={`Row-${props.index}`}>
                <Col key={`Col-${props.index}`}>
                  <Img src={InspectionCover} key={`Img-${props.index}`} />
                  <StoreName key={`StoreName-${props.index}`}>
                    <TextStoreName key={`TextStoreName-${props.index}`}>
                      {props.storeName}
                    </TextStoreName>
                  </StoreName>
                </Col>
              </Row>
              <Row key={`Row2-${props.index}`}>
                <Col key={`Col2-${props.index}`}>
                  <WrapperPlaceInfo key={`WrapperPlaceInfo-${props.index}`}>
                    <TitleInfo key={`TitleInfo-${props.index}`}>
                      {t("Address")}
                    </TitleInfo>
                    <ContentInfo key={`ContentInfo-${props.index}`}>
                      {props.address}
                    </ContentInfo>
                    <TitleInfo key={`TitleInfo2-${props.index}`}>
                      {t("Contact")}
                    </TitleInfo>
                    <ContentInfo key={`ContentInfo2-${props.index}`}>
                      {props.phone}
                      <br />
                      {props.email}
                    </ContentInfo>
                    <ButtonSecondary
                      key={`ButtonSecondary-${props.index}`}
                      onClick={() => setChoosed(true)}
                    >
                      {t("Check inspection")}
                    </ButtonSecondary>
                  </WrapperPlaceInfo>
                </Col>
              </Row>
            </>
          )}
        </BoxOption>
      )}
    </>
  );
};
