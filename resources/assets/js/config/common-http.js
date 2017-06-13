import axios from 'axios';

export const API_ROOT= "/api"

/*-------------------------------RESOURCE HTTP-------------------------------*/

export const HTTP = axios.create({
  baseURL: API_ROOT,
  headers: {
    'X-CSRF-TOKEN' : document.querySelector('#token').getAttribute('value'),
  }
});
