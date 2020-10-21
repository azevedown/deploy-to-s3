import React, {
  createContext,
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useManhein } from "../hooks";
import { IInspectionProviderProps } from "../hooks/contexts/use-inspection.hook";
import { Inspection, InspectionPlan, InspectionSteps, InspectionUnit } from "../models";

const InspectionContext = createContext({} as any);

const InspectionProvider: FunctionComponent = (props) => {
  const { getAdInspection } = useManhein();

  const [stepContext, setStepContext] = useState<InspectionSteps>(
    InspectionSteps.CompanyChoose
  );
  const [inspectionContext, setInspectionContext] = useState<Inspection>(
    {} as Inspection
  );

  const setSavedInspectionContextAsync = useCallback(
    async (id: number): Promise<void> => {
      const adInspectionResponse = await getAdInspection(id);
      const inspection = {
        dateSchedule: adInspectionResponse.inspectionDate,
        hourSchedule: adInspectionResponse.inspectionPeriod.toString(),
        inspectionCompany: adInspectionResponse.partnerId,
        id: adInspectionResponse.id,
        inspectionPlan: {
          id: adInspectionResponse.inspectionPlanId,
        } as InspectionPlan,
        unitSchedule: {
          idUnit: adInspectionResponse.inspectionPlaceId,
        } as InspectionUnit,
        status: adInspectionResponse.status
      } as Inspection;

      setInspectionContext(inspection);
    },
    [getAdInspection]
  );

  useEffect(() => {
    if (inspectionContext) {
      if (inspectionContext.dateSchedule && inspectionContext.hourSchedule) {
        setStepContext(InspectionSteps.Checkout);
      } else if (
        inspectionContext.creditCard &&
        inspectionContext.creditCard.number
      ) {
        setStepContext(InspectionSteps.Schedule);
      } else if (inspectionContext.inspectionPlan) {
        setStepContext(InspectionSteps.Payment);
      }
    }
  }, [inspectionContext]);

  return (
    <InspectionContext.Provider
      value={
        {
          stepContext,
          setStepContext,
          inspectionContext,
          setInspectionContext,
          setSavedInspectionContextAsync,
        } as IInspectionProviderProps
      }
    >
      {props.children}
    </InspectionContext.Provider>
  );
};

export { InspectionContext, InspectionProvider };
