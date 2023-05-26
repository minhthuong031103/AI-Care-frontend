import axios from 'axios';

// axios.defaults.baseURL = 'https://aigeneratingapp.onrender.com';
// axios.defaults.baseURL = 'https://ai-care.onrender.com/';
const instance = axios.create({
  baseURL: 'http://localhost:8080',
  // Additional configuration options
});

export async function registerUser(user) {
  try {
    const { data, status } = await instance.post('/user/createaccount', user);

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
    const data = await instance.post('/user/login', { email, password });
    return Promise.resolve(data);
  } catch (error) {
    console.log(error);
    return Promise.reject({ error: 'Password doesnt match' });
  }
}
export async function getUserbyId(_id) {
  try {
    const { data } = await instance.get(`/user/${_id}`);
    return Promise.resolve({ data });
  } catch (error) {
    return Promise.reject({ error: 'Can not get user' });
  }
}

export async function updateUser(user, _id) {
  try {
    const { data, status } = await instance.put('user/updateuser', {
      user,
      _id,
    });
    if (status === 201) return Promise.resolve('Email exist');
    if (status === 202) return Promise.resolve('Phone exist');
    return Promise.resolve({ data });
  } catch (error) {
    console.log(error);
  }
}

export async function changePassword(user, _id) {
  try {
    const { data, status } = await instance.put('user/changepassword', {
      user,
      _id,
    });
    if (status === 203) return Promise.resolve('Password not correct');
    // if (status === 202) return Promise.resolve('Phone exist');
    if (status === 200) return Promise.resolve({ data });
    else return Promise.reject('not ok');
  } catch (error) {
    console.log(error);
  }
}

export async function scheduleDoctor(user, doctorName, doctorEmail) {
  try {
    const { data, status } = await instance.post('doctor/schedule', {
      user: user,
      doctorName: doctorName,
      doctorEmail: doctorEmail,
    });
    if (status === 201) return Promise.resolve('ok');
    // if (status === 202) return Promise.resolve('Phone exist');
    else return Promise.reject({ data });
  } catch (error) {
    console.log(error);
  }
}
