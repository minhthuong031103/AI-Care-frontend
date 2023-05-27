import axios from 'axios';

// axios.defaults.baseURL = 'https://aigeneratingapp.onrender.com';
// axios.defaults.baseURL = 'https://ai-care.onrender.com/';
axios.defaults.baseURL = 'http://localhost:8089';
export async function createPost(form) {
  try {
    const { success } = await axios.post('/api/v1/post', {
      prompt: form.prompt,
      name: form.name,
      photo: form.photo,
    });
    if (success) return Promise.resolve({ success });
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
}
export async function registerUser(user) {
  try {
    const { data, status } = await axios.post('/user/createaccount', user);

    //send email
    if (status === 201) return Promise.resolve('Email exist');
    if (status === 202) return Promise.resolve('Phone exist');
    return Promise.resolve(data);
  } catch (error) {
    console.log(error);
  }
}
export async function verifyLogin({ email, password }) {
  try {
    const data = await axios.post('/user/login', { email, password });
    return Promise.resolve(data);
  } catch (error) {
    console.log(error);
    return Promise.reject({ error: 'Password doesnt match' });
  }
}
export async function getUserbyId(_id) {
  try {
    const { data } = await axios.get(`/user/${_id}`);
    return Promise.resolve({ data });
  } catch (error) {
    return Promise.reject({ error: 'Can not get user' });
  }
}

export async function updateUser(user, _id) {
  try {
    const { data, status } = await axios.put('user/updateuser', { user, _id });
    if (status === 201) return Promise.resolve('Email exist');
    if (status === 202) return Promise.resolve('Phone exist');
    return Promise.resolve({ data });
  } catch (error) {
    console.log(error);
  }
}
