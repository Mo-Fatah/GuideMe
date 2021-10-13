import axios from 'axios';
const baseUrl = 'http://localhost:3003/api/food';

export const getAll = async () => {
  const result = await axios.get(baseUrl);
  return result.data;
}

export const getAllInGov = async governorate => {
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
}




