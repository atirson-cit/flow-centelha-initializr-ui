import axios, { AxiosError } from "axios";

const config = {
  baseURL: "https://editor.swagger.io",
  params: {},
};

const api = axios.create(config);

api.interceptors.request.use(
  (config) => config,
  (error) => error
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error(error);

    throw new Error(
      ((error as AxiosError)?.response?.data as Error)?.message ||
        error.response.data.errors ||
        "Unknown error"
    );
  }
);

export default api;
