import axios from 'axios';
// baseURL: 'http://localhost:8080',
// baseURL: 'https://ai-care.onrender.com'
export const Axios = axios.create({
  baseURL: 'http://localhost:8080',
});

export const request = async (method, path, param) => {
  return new Promise((resolve, reject) => {
    switch (method) {
      case 'get':
        Axios.get(path, param)
          .then((res) => {
            return resolve(res.data);
          })
          .catch((err) => reject(err.response));
        break;
      case 'post':
        Axios.post(path, param)
          .then((res) => {
            return resolve(res.data);
          })
          .catch((err) => reject(err.response));
        break;
      default:
        Axios.get(path, param)
          .then((res) => {
            return resolve(res.data);
          })
          .catch((err) => reject(err));
    }
  });
};
