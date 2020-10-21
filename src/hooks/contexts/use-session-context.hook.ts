import { FormikErrors } from "formik";
import { useContext } from "react";
import { SessionContext } from "../../contexts";
import { HeaderMainTemplate } from "../../models";

export interface SessionProviderState {
  genericModalMsg: string | null;
  headerMainTemplate: HeaderMainTemplate;
  setHeaderMainTemplate: React.Dispatch<HeaderMainTemplate>;
  genericErrorModal: boolean;
  showGenericErrorModal: (
    text?: string | null,
    onClose?: (() => void) | null
  ) => void;
  hideGenericErrorModal: () => void;
  genericWarningModal: boolean;
  showGenericWarningModal: (
    text?: string | null,
    onClose?: (() => void) | null
  ) => void;
  hideGenericWarningModal: () => void;
  handleFormikError: <Values>(
    exception: any,
    setErrors: FormikErrors<Values>
  ) => void;
}

export const useSessionContext = () => {
  const context = useContext<SessionProviderState>(SessionContext);

  if (!context) {
    throw new Error("Empty context");
  }

  return context;
};
