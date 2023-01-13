import axios from 'axios';



// github api
export default axios.create({
  baseURL: '/',
  headers: {
    'Content-Type': 'application/json'
  }
});
