import axios from 'axios';

const CLIENT_ID = `Client-ID ${process.env.REACT_APP_ACCESS_KEY}`;

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: CLIENT_ID
  }
});
