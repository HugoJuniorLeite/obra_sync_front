import api from "./api";


async function postContract(payload) {
  const response = await api.post('/add-project', payload);
  return response.data;
}

async function getContracts() {
  const response = await api.get('/all-projects');
  return response.data;
}


async function getClients() {
  const response = await api.get('/all-firms');
  return response.data;
}

async function putClient(payload) {
  const response = await api.post('/add-firm', payload);
  return response.data;
}

async function postService(payload) {
  const response = await api.post('/add-bill', payload);
  return response.data;
}

async function getService() {
  const response = await api.get('/get-bills');
  return response.data;
}


const serviceOs = { postContract, getContracts, getClients, putClient, postService, getService }

export default serviceOs;