import api from "./api";


export async function putToken(token) {
  const response = await api.put('/super-access', token);
  return response.data;
}