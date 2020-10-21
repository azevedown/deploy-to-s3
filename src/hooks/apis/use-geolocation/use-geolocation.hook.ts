import { useRequest, openstreetmapHttp } from '../config';
import { Geolocation } from '../../../models';

export const useGeolocation = () => {
    const { get } = useRequest(openstreetmapHttp, '/reverse');

    const GetGeolocation = async (latitude: number, longitude: number): Promise<Geolocation> => {
        const { data } = await get(`?format=json&lat=${latitude}&lon=${longitude}`);
        return data as Geolocation;
    };

    return {
        GetGeolocation,
    };
};
