import { useKbb } from "..";

export const useStateStorage = () => {

    const { GetAllLocationState } = useKbb();

    const keyName = 'SELECTED_STATE';

    const setStateStorage = (item: string): void => {
        localStorage.setItem(keyName, item);
    };

    const getStateStorage = async (): Promise<number | null> => {
        const item = localStorage.getItem(keyName);
        if (item) return Number(item);

        const statesService = await GetAllLocationState();
        const defaultState = statesService.find(f => f.isDefault);
        if (defaultState) {
            setStateStorage(defaultState.id.toString());
            return defaultState.id;
        }
        
        return null;
    };

    return {
        setStateStorage,
        getStateStorage
    }
}