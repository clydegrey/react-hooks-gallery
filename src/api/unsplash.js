import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 59eab75477a93c6db6d4f398cb84c7d0967142be6269ce51f0574b93e8f85b89'
  }
});
