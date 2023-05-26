import axios from 'axios';

const instance1 = axios.create({
  baseURL: 'https://aigeneratingapp.onrender.com',
  // Additional configuration options
});
// axios.defaults.baseURL = 'http://localhost:8080';
export async function createPost(form) {
  try {
    const { success } = await instance1.post('/api/v1/post', {
      prompt: form.prompt,
      name: form.name,
      photo: form.photo,
      date: form.date,
    });
    if (success) return Promise.resolve({ success });
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
}
