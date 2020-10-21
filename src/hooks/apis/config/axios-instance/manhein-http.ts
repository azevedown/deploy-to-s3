import axios from 'axios';

const manheinHttp = axios.create({
  baseURL: process.env.REACT_APP_API_MANHEIN_URL,
});

export { manheinHttp };
