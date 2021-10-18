import axios from 'axios';
const baseUrl = '/api/food';

export const getAllRests = async params => {
  let result;
  if (params) {
    result = await axios.get(baseUrl, {
      params: params
    });
  } else {
    result = await axios.get(baseUrl);
  }
  
  return result.data;
}

export const getById = async id => {
  const result = await axios.get(`${baseUrl}/${id}`);
  return result.data;
}

export const addNewRest = async newRest => {
  const result = await axios.post(baseUrl, newRest);
  return result.data
}
/*export const getAllInGov = async governorate => {
  const result = await axios.get(baseUrl);
  result.data = result.data.filter((rest) =>
    rest.governorate.toLowerCase() === governorate.toLowerCase);

  return result.data;
}

export const getWithFoodType = async foodType => {
  const result = await axios.get(baseUrl);
  result.data = result.data.filter(rest => 
    rest.foodTypes.include(foodType.toLowerCase()))
  return result.data
}*/




