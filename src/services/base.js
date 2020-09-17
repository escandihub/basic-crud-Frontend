import axios from 'axios'


export default () => {
  let instance = axios.create({
    baseURL: 'http://basic-crud.test/api/',
    // baseURL: 'http://127.0.0.1:8000/api/',
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' }
  });
  return instance
}