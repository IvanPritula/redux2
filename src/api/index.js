import axios from 'axios';

export const commetsApi = async (comments) => {
  const response = await axios.post(
    'https://jsonplaceholder.typicode.com/comments',
    comments
  );

  return response.data;
};
