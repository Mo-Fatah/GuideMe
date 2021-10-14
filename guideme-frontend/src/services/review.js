import axios from "axios";
const baseURl = 'http://localhost:3003/api/review';

export const addReview = async (review, id) => {
  const result = await axios.post(`${baseURl}/${id}`, review);
  return result.data;
}