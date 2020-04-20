const axios = require('axios');

const api = axios.default.create({
  baseURL: 'http://localhost:3333',
})

api.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
api.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export default api;