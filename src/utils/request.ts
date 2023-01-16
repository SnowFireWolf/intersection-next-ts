import axios from 'axios';



// axios base api
export default axios.create({
  baseURL: '/',
  headers: {
    'Content-Type': 'application/json'
  }
});
