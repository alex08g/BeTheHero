import axios from 'axios';

export default axios.create({
  baseURL: "http://192.168.100.13:3333/"
})