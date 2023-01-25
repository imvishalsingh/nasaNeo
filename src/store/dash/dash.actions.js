import URL from '../../common/constants/url';
import config  from './../../common/config';
import { instance } from '../../common/services/apiService';

//API Calls start Here

//Get Asteroid List lists
export const getAsteroidListApi = (params) => {
  return instance('GET', URL.GET_ASTEROID_LISTS+`?start_date=${params.minDate}&end_date=${params.maxDate}&api_key=${config.NASA_API_KEY}`, false, params);
};
