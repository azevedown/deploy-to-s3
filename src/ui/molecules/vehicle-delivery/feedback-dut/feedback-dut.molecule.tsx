import { CoxIcon, Img, NumberHelper } from "c4u-web-components";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

import { useReactToPrint } from "react-to-print";

import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Dut } from "../../../assets";
import {
  DutTextAddress,
  DutTextDate,
  DutTextFederalDocument,
  DutTextName,
  DutTextRegionalDocument,
  DutTextValue,
  FooterDut,
  ImgStyle,
  PrintIcon,
  TitleDut,
  WrapperFeedbackDut,
  WrapperIcons,
  WrapperImg,
} from "./feedback-dut.molecule.style";

interface IProp {
  buyerName: string;
  value: number;
  regionalDocument: string;
  federalDocument: string;
  address: string;
  date: Date;
}

export const FeedbackDut: React.FC<IProp> = (parameters) => {
  const { t } = useTranslation();

  const [props, setProps] = useState(parameters);
  useEffect(() => setProps(parameters), [parameters]);

  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <WrapperFeedbackDut>
      <TitleDut>{t("Transfer feedback")}</TitleDut>
      <WrapperImg ref={componentRef}>
        <ImgStyle>
          <Img src={Dut} />
          <DutTextValue>
          {t('$')} {NumberHelper.toFormatString(props.value, 2)}
          </DutTextValue>
          <DutTextName>{props.buyerName}</DutTextName>
          <DutTextRegionalDocument>
            {props.regionalDocument}
          </DutTextRegionalDocument>
          <DutTextFederalDocument>
            {props.federalDocument}
          </DutTextFederalDocument>
          <DutTextAddress>{props.address}</DutTextAddress>
          <DutTextDate>
            {format(props.date, "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}
          </DutTextDate>
        </ImgStyle>
      </WrapperImg>
      <FooterDut>
        <WrapperIcons>
          <PrintIcon onClick={handlePrint}>
            <CoxIcon name={"print-v2"} />
          </PrintIcon>
        </WrapperIcons>
      </FooterDut>
    </WrapperFeedbackDut>
  );
};
