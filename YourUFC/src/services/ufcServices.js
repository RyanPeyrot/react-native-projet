import axios from 'axios';
const apiKey = '5eec552f32f049dbbfc011eb867a5846';
const url = 'https://api.sportsdata.io/v3/mma/scores/json/';
export default {
  getAllFighters() {
    return axios
      .get(`${url}Fighters?key=${apiKey}`)
      .then(response => response.data)
      .catch(error => console.error(error.response));
  },
};
