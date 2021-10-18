import axios from "axios";
const baseURl = '/api/review';

export const addReview = async (review, id) => {
  const result = await axios.post(`${baseURl}/${id}`, review);
  return result.data;
}