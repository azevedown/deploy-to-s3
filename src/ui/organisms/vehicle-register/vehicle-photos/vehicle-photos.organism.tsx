import { ButtonPrimary } from "c4u-web-components";
import React, { useEffect, useMemo, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useHistory, useParams } from "react-router-dom";
import {
  MenuVehicleRegister,
  VehiclePhotoCard,
  VehicleComments,
  FeedbackModal,
} from "../../../molecules";
import {
  RowContent,
  InnerWrapper,
  ButtonBottomWrapper,
  AdviceMinPhotos,
} from "./vehicle-photos.organism.style";

import front from "../../../assets/images/car-photos-svgs/front.svg";
import back from "../../../assets/images/car-photos-svgs/back.svg";
import left from "../../../assets/images/car-photos-svgs/left.svg";
import right from "../../../assets/images/car-photos-svgs/right.svg";
import lanternLeft from "../../../assets/images/car-photos-svgs/lantern-left.svg";
import lanternRight from "../../../assets/images/car-photos-svgs/lantern-right.svg";
import backsideLanternLeft from "../../../assets/images/car-photos-svgs/backside-lantern-left.svg";
import backsideLanternRight from "../../../assets/images/car-photos-svgs/backside-lantern-right.svg";
import internal from "../../../assets/images/car-photos-svgs/internal.svg";
import upholsteredSeat from "../../../assets/images/car-photos-svgs/upholsteredSeat.svg";
import dashboard from "../../../assets/images/car-photos-svgs/dashboard.svg";
import engine from "../../../assets/images/car-photos-svgs/engine.svg";
import {
  useManhein,
  useSessionContext,
  useVehicleRegisterContext,
} from "../../../../hooks";
import { AdVehiclePhotosRequest } from "../../../../models";

export const VehiclePhotos: React.FC = () => {
  const { t } = useTranslation();

  const {
    vehicleContext,
    setSavedAdContextAsync,
    setAdContextPhotos,
  } = useVehicleRegisterContext();

  const [showModal, setShowModal] = useState(false);
  const [msgValidation, setMsgValidation] = useState<string>();
  const [textareaContent, setTextareaContent] = useState<string>();
  const [submiting, setSubmiting] = useState(false);

  const [items, setItems] = useState([
    { icon: front, title: "VehicleFront", file: null },
    { icon: back, title: "VehicleBack", file: null },
    { icon: left, title: "LeftSide", file: null },
    { icon: right, title: "RightSide", file: null },
    { icon: lanternLeft, title: "LeftHeadlight", file: null },
    { icon: lanternRight, title: "RightHeadlight", file: null },
    { icon: backsideLanternLeft, title: "LeftTailLight", file: null },
    { icon: backsideLanternRight, title: "RightTailLight", file: null },
    { icon: internal, title: "Inside", file: null },
    { icon: upholsteredSeat, title: "UpholsteredSeat", file: null },
    { icon: dashboard, title: "Dashboard", file: null },
    { icon: engine, title: "Engine", file: null },
  ]);

  const params = useParams();
  const history = useHistory();
  const { saveAdVehiclePhotos } = useManhein();
  const { showGenericErrorModal } = useSessionContext();

  const idAdParam = useMemo(() => {
    return (params as any).id;
  }, [params]);

  const handleSubmit = () => {
    setSubmiting(true);
  }

  const submit = async () => {
    if (items.filter((f) => !!f.file).length < 8) {
      setShowModal(true);
    } else if (!textareaContent || textareaContent.trim().length === 0) {
      setMsgValidation(t("ValidationDescriptionPhotos"));
    } else {
      const request = new AdVehiclePhotosRequest({
        adId: idAdParam,
        observation: textareaContent,
      });
      try {
        const response = await saveAdVehiclePhotos(request);
        setAdContextPhotos({
          description: response.observation,
        });
        history.push(`/vehicle-register/${response.id}/personal-data`);
      } catch (e) {
        showGenericErrorModal();
        console.log(e);
      } finally {
        setSubmiting(false);
      }
    }
    setSubmiting(false);
  };

  const handleChangeText = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setTextareaContent(event.target.value);
  };

  useEffect(() => {
    if (!vehicleContext && idAdParam) {
      setSavedAdContextAsync(idAdParam);
    }
  }, [vehicleContext, idAdParam]); //eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (submiting) {
      submit();
    }
  }, [submiting]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <FeedbackModal
        type={"warning"}
        show={showModal}
        onHide={() => setShowModal(false)}
        title={t("Atention")}
      >
        <AdviceMinPhotos>{t("AdviceMinimunPhotos")}</AdviceMinPhotos>
      </FeedbackModal>

      <RowContent>
        <Col md={2}>
          <MenuVehicleRegister step={3} />
        </Col>
        <Col md={10}>
          {!!idAdParam && (
            <InnerWrapper>
              <Row>
                {items.map(({ icon, title }, index) => (
                  <Col key={index} md={3}>
                    <VehiclePhotoCard
                      icon={icon}
                      title={title}
                      setItems={setItems}
                      items={items}
                      idAd={idAdParam}
                    />
                  </Col>
                ))}
              </Row>
              <VehicleComments
                value={vehicleContext?.photosAd?.description}
                onChangeText={handleChangeText}
                validationMsg={msgValidation}
              />
            </InnerWrapper>
          )}
          <ButtonBottomWrapper>
            <ButtonPrimary onClick={handleSubmit} sizex="md" loading={submiting}>
              {t("Advance")}
            </ButtonPrimary>
          </ButtonBottomWrapper>
        </Col>
      </RowContent>
    </>
  );
};
