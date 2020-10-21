import React, { createContext, useState } from "react";
import { SessionProviderState } from "../hooks/contexts/use-session-context.hook";
import { HeaderMainTemplate } from "../models";

const SessionContext = createContext({} as any);

const SessionProvider = (props: any) => {
  const [headerMainTemplate, setHeaderMainTemplate] = useState<
    HeaderMainTemplate
  >();
  const [genericErrorModal, setShowGenericErrorModal] = useState(false);
  const [genericWarningModal, setShowGenericWarningModal] = useState(false);
  const [genericModalMsg, setGenericModalMsg] = useState<string | null>(null);
  const [genericEventClose, setGenericEventClose] = useState<
    (() => void) | null
  >(null);

  const showGenericErrorModal = (
    text: string | null = null,
    onClose: (() => void) | null = null
  ) => {
    setGenericModalMsg(text);
    setShowGenericErrorModal(true);
    if (onClose) setGenericEventClose(() => onClose);
  };
  const hideGenericErrorModal = () => {
    setGenericModalMsg(null);
    setShowGenericErrorModal(false);

    if (genericEventClose) {
      genericEventClose();
      setGenericEventClose(null);
    }
  };
  const showGenericWarningModal = (
    text: string | null = null,
    onClose: (() => void) | null = null
  ) => {
    setGenericModalMsg(text);
    setShowGenericWarningModal(true);
    if (onClose) setGenericEventClose(() => onClose);
  };
  const hideGenericWarningModal = () => {
    setGenericModalMsg(null);
    setShowGenericWarningModal(false);
    if (genericEventClose) {
      genericEventClose();
      setGenericEventClose(null);
    }
  };

  const handleFormikError = (exception: any, setErrors: any) => {
    if (exception?.errors) {
      showGenericWarningModal();
      setErrors(exception.errors);
    } else setShowGenericErrorModal(true);
  };

  return (
    <SessionContext.Provider
      value={
        {
          genericModalMsg,
          headerMainTemplate,
          setHeaderMainTemplate,
          genericErrorModal,
          showGenericErrorModal,
          hideGenericErrorModal,
          genericWarningModal,
          showGenericWarningModal,
          hideGenericWarningModal,
          handleFormikError,
        } as SessionProviderState
      }
    >
      {props.children}
    </SessionContext.Provider>
  );
};

export { SessionContext, SessionProvider };
