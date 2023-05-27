import axios from 'axios';

export const Axios = axios.create({
  baseURL: 'http://localhost:8089',
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
