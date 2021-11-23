import axios from 'axios';

const baseUrl = process.env.NODE_ENV !== 'development'
  ? '/api/review'
  : 'http://localhost:3003/api/review';

// eslint-disable-next-line
export const addReview = async (review, id, userToken) => {
  const result = await axios.post(`${baseUrl}/${id}`,
    review,
    {
      headers: {
        'authorization' : `bearer ${userToken}`, // eslint-disable-line
      },
    });

  if (result.status === 401) {
    return {
      error: 'Unauthorized',
    };
  }

  return result.data;
};
