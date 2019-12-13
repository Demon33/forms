import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 64308e31aa30aae6f98d91edd628b909a2fc2037d33d1e1be030f883dc3f37cc'
  }
});
