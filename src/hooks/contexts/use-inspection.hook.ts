import { useContext } from 'react';
import { InspectionContext } from '../../contexts';
import { Inspection, InspectionSteps } from '../../models';

export interface IInspectionProviderProps {
  stepContext: InspectionSteps;
  setStepContext: React.Dispatch<React.SetStateAction<InspectionSteps>>;
  inspectionContext: Inspection;
  setInspectionContext: React.Dispatch<React.SetStateAction<Inspection>>;
  setSavedInspectionContextAsync: (id: number) => void;
}

export const useInspectionContext = () => {
  const context = useContext<IInspectionProviderProps>(InspectionContext);

  if (!context) {
    throw new Error('Empty context');
  }

  return context;
};
