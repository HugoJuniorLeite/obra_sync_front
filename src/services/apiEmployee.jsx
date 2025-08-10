import api from "./api";


async function postEmployee(payload) {
  const response = await api.post('/add-employee',payload);
  return response.data;
}

async function getEmployee() {
  const response = await api.get('/get-employee-by-project/:project_id');
  return response.data;
}





const employee = { postEmployee, getEmployee }

export default employee ;