import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Wrapper, TextBold } from "./vehicle-comments.molecule.style";

interface IProps {
  value?: string;
  onChangeText: (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
  validationMsg?: string;
}

export const VehicleComments: React.FC<IProps> = (props) => {
  const { t } = useTranslation();

  const [value, setValue] = useState(props.value);
  useEffect(() => setValue(props.value), [props.value]);

  const change = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setValue(event.target.value);
    props.onChangeText(event);
  };

  return (
    <Wrapper>
      <TextBold>{t("make comments")}</TextBold>
      <Form.Group controlId={"description"}>
        <Form.Control
          as="textarea"
          placeholder={t("Make your observations here")}
          onChange={change}
          isInvalid={!!props.validationMsg}
          value={value}
        />
        <Form.Control.Feedback type={"invalid"}>
          {props.validationMsg}
        </Form.Control.Feedback>
      </Form.Group>
    </Wrapper>
  );
};
