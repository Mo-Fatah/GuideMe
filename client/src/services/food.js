import axios from 'axios';

const baseUrl = 'http://localhost:3003/api/food';
// const baseUrl = '/api/food';

export const getAllRests = async (params) => {
  let result;
  if (params) {
    result = await axios.get(baseUrl, {
      params,
    });
  } else {
    result = await axios.get(baseUrl);
  }
  return result.data;
};

export const getById = async (id) => {
  const result = await axios.get(`${baseUrl}/${id}`);
  return result.data;
};

export const addNewRest = async (newRest) => {
  const result = await axios.post(baseUrl, newRest);
  return result.data;
};
