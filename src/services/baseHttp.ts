
import axios, { type AxiosInstance } from "axios";


const baseHttp = (baseUrl: string, headers: any = {
  "Content-Type": "application/json",
  "Accept": "application/json",
}): AxiosInstance => {

  const axiosInstance = axios.create({
    baseURL: baseUrl,
    timeout: 5000,
  });

  const authToken = "test";

  if (authToken) {
    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${authToken}`;
  }

  for (const header in headers) {
    axiosInstance.defaults.headers.common[header] = headers[header];
  }

  return axiosInstance;
}

export default baseHttp;
