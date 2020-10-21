import { ButtonTertiary, CoxIcon } from "c4u-web-components";
import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { StatusReport } from "../../../../models";
import {
  InfoReport,
  InfoReportStatus,
  Row2,
} from "./../card-inspection/card-inspection.molecute.style";

interface IProps {
  status: StatusReport;
}
export const CardInspectionStatusReportTemplate: React.FC<IProps> = (
  parameters
) => {
  const { t } = useTranslation();

  const [props, setProps] = useState(parameters);

  useEffect(() => setProps(parameters), [parameters]);

  const getStatus = (status: StatusReport) => {
    switch (status) {
      case StatusReport.Refused:
        return t("Refused");
      case StatusReport.Pending:
        return t("Pending");
      case StatusReport.Approved:
        return t("Approved");
      case StatusReport.Appointments:
        return t("Approved with appointments");

      default:
        return "";
    }
  };

  const getIcon = (status: StatusReport) => {
    switch (status) {
      case StatusReport.Refused:
        return <CoxIcon name={"danger-color"} />;
      case StatusReport.Approved:
        return <CoxIcon name={"approved-color"} />;
      case StatusReport.Pending:
      case StatusReport.Appointments:
        return <CoxIcon name={"warning-color"} />;

      default:
        return "";
    }
  };

  return (
    <>
      <Row2>
        <Col md={"12"}>
          <InfoReport>
            <div>{getIcon(props.status)}</div>
            <InfoReportStatus status={props.status}>
              {getStatus(props.status)}
            </InfoReportStatus>
            <ButtonTertiary>{t("Look report")}</ButtonTertiary>
          </InfoReport>
        </Col>
      </Row2>
    </>
  );
};
