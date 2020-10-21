import React from "react";
import { ButtonOutline } from "../../../atoms";
import { Wrapper, Container } from "./header.molecule.style";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const logo = require("../../../assets/images/manheim-logo.png");

interface IProps {
  showButtons: boolean;
}

export const Header: React.FC<IProps> = (props) => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Container>
        <div>
          <img src={logo} alt="Manheim Logo" />
        </div>
        {props.showButtons && (
          <div>
            <Link to={"/account-create"}>
              <ButtonOutline sizex="md">{t("REGISTER")}</ButtonOutline>
            </Link>
            <ButtonOutline sizex="sm">{t("ENTER")}</ButtonOutline>
          </div>
        )}
      </Container>
    </Wrapper>
  );
};
