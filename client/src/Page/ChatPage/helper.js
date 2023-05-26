import axios from 'axios';
// baseURL: 'http://localhost:8080',
// baseURL: 'https://ai-care.onrender.com'
export const Axios = axios.create({
  baseURL: 'https://ai-care.onrender.com',
});

export async function getMessageHistory(_id) {
  try {
    const { data } = await axios.post('/api/history', { userID: _id });
    return Promise.resolve({ data });
  } catch (error) {
    console.log(error);
    return Promise.reject({ error: 'Can not get user' });
  }
}
