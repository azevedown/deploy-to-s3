import axios from 'axios';

const openstreetmapHttp = axios.create({
  baseURL: 'https://nominatim.openstreetmap.org',
});

export { openstreetmapHttp };
