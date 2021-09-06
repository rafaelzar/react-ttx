import axios, { AxiosResponse } from 'axios';

const baseUrl = process.env.REACT_APP_BACKEND_BASE_URL;

export const sendJWTToken = async (): Promise<AxiosResponse | undefined> => {
  const res = await axios.get(`${baseUrl}/employees/validate-jwt`);
  return res;
};

export const getEmployeesReviews = async (
  queries: string,
): Promise<AxiosResponse | undefined> => {
  const res = await axios.get(`${baseUrl}/employees/reviews/${queries}`);
  return res;
};

export const updateUser = async (
  id: string,
  data: Record<string, unknown>,
): Promise<AxiosResponse | undefined> => {
  const res = await axios.patch(`${baseUrl}/employees/${id}`, data);
  return res;
};

export const getPlaidLinkToken = async (
  id: string,
): Promise<AxiosResponse | any | undefined> => {
  const res = await axios.get(`${baseUrl}/employees/create-link-token/${id}`);
  return res;
};

export const sendPlaidPublicToken = async (
  id: string,
  token: string,
): Promise<AxiosResponse | any | undefined> => {
  const res = await axios.post(`${baseUrl}/employees/token-exchange/${id}`, {
    public_token: token,
  });
  return res;
};

export const deletePlaidAccount = async (
  id: string,
): Promise<AxiosResponse | undefined | any> => {
  const res = await axios.delete(`${baseUrl}/employees/plaid-account/${id}`);
  return res;
};

export const getEmployeeStats = async (
  queries: string,
): Promise<AxiosResponse | undefined> => {
  const res = await axios.get(`${baseUrl}/employees/stats/${queries}`);
  return res;
};

export const getEmployeeRevenueHistory = async (
  query: string,
): Promise<AxiosResponse | undefined> => {
  const res = await axios.get(`${baseUrl}/employees/revenue/${query}`);
  return res;
};

export const getEmployeeEarnings = async (
  id: string,
): Promise<AxiosResponse | undefined> => {
  const res = await axios.get(`${baseUrl}/employees/earnings/${id}`);
  return res;
};

export const getEmployeeBankDetails = async (
  id: string,
): Promise<AxiosResponse | undefined> => {
  const res = await axios.get(`${baseUrl}/employees/bank-accounts/${id}`);
  return res;
};
