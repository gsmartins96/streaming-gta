import axios from 'axios';

const baseURL = '';

axios.create({
  baseURL,
});


export { axios };

