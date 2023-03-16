import axios from 'axios';
const apiKey = 'pv2kbjchzmy3wx4u69qtvx5t';
const url = 'https://api.sportradar.us/mma/trial/v2/en/';
export default {
  getAllFighters() {
    return axios
      .get(`${url}rankings.json?api_key=${apiKey}`)
      .then(response => response.data)
      .catch(error => console.error(error));
  },
  getOneFighter(id) {
    return axios
      .get(`${url}rankings.json?api_key=${apiKey}`, {
        competitor_id: id,
      })
      .then(response => response.data)
      .catch(error => console.error(error));
  },
  getSeasons() {
    return axios
      .get(`${url}seasons.json?api_key=${apiKey}`)
      .then(response => response.data)
      .catch(error => console.error(error));
  },
};
