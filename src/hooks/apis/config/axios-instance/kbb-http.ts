import axios from 'axios';

const kbbHttp = axios.create({
  baseURL: process.env.REACT_APP_API_KBB_URL,
});

export { kbbHttp };
