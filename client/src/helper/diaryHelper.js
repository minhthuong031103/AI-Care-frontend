import axios from 'axios';

const instance1 = axios.create({
  baseURL: 'https://ai-care.onrender.com',
  // Additional configuration options
});
// axios.defaults.baseURL = 'http://localhost:8080';
export async function createPost(form, _id) {
  try {
    const { success } = await instance1.post('/api/v1/post/upload', {
      prompt: form.prompt,
      name: form.name,
      photo: form.photo,
      date: form.date,
      _userid: _id,
    });
    if (success) return Promise.resolve({ success });
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
}
