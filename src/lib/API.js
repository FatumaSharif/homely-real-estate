import ezFetch from 'ez-fetch';

const API_URL = 'https://properties-api-3333.herokuapp.com/api/v1/listings';
const proxy = 'https://cors-anywhere.herokuapp.com/';

export default {
  getListings() {
    return ezFetch.get(proxy + API_URL);
  },
};
