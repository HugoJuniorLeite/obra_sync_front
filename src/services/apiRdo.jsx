import api from "./api";


async function postRdo(payload) {
  const response = await api.post('/create-rdo', payload);
  return response.data;
}

async function getOccupation() {
  const response = await api.get('/all-occupations');
  return response.data;
}

async function getOccupationById(payload) {
  const response = await api.get(`/occupation-by-id/${payload}`);
  return response.data;
}



const createRdo = { postRdo, getOccupation, getOccupationById }

export default createRdo;


