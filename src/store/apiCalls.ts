import axios, { AxiosResponse } from 'axios';

const baseUrl = process.env.REACT_APP_BACKEND_BASE_URL;

export const sendJWTToken = async (): Promise<AxiosResponse | undefined> => {
  const res = await axios.get(`${baseUrl}/employees/validate-jwt`);
  return res;
};
