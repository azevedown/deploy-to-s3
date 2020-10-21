import { AxiosInstance } from "axios";
import {
  ConflictRequestError,
  GeneralRequestError,
  RequestError,
} from "../../../../models";

export const useRequest = (http: AxiosInstance, path: string) => {
  const buildUrl = (url: string) => {
    return url ? `${path}/${url}` : path;
  };

  const buildHeaders = (customHeaders = {}) => {
    const headers = {
      //Authorization: `Bearer ${token}`,
      "Accept-Language": "pt-BR,pt;q=0.9",
    };

    return { ...headers, ...customHeaders };
  };

  const handleErrors = (e: any): void => {
    if (e?.response && e.response?.status === 412) {
      throw new RequestError(e.response.data);
    } else if (e?.response && e.response?.status === 409) {
      throw new ConflictRequestError(e.response.data);
    } else {
      console.log("General", e);
      throw new GeneralRequestError(e);
    }
  };

  const callApi = async (
    url: string,
    method: string,
    config: any,
    data: any = null
  ) => {
    const requestConfig = config;
    requestConfig.url = buildUrl(url);
    requestConfig.headers = buildHeaders(config.headers);
    requestConfig.data = data;
    requestConfig.method = method;
    try {
      return await http.request(requestConfig);
    } catch (e) {
      handleErrors(e);
    }
  };

  return {
    get: async (url: string, config = {}): Promise<any> =>
      callApi(url, "GET", config),
    delete: async (url: string, config = {}): Promise<any> =>
      callApi(url, "DELETE", config),
    put: async (url: string, data: any, config = {}): Promise<any> =>
      callApi(url, "PUT", config, data),
    post: async (url: string, data: any, config = {}): Promise<any> =>
      callApi(url, "POST", config, data),
  };
};
