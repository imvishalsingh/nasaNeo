/* eslint-disable no-shadow */
import axios from 'axios';
import { store } from '../../store/store';

export const instance = async (
  method = 'GET',
  URL,
  isAuth = false,
  params = {},
  isFile = false
) => {
  const state = store.getState();
  const isInternetReachable = state.device.isInternetReachable;
  if (isInternetReachable) {
    try {
      var header = {
        headers: { 
          'Accept': 'application/json',
          'Content-Type': 'application/json;charset=UTF-8',
        }
      };
      if(isAuth) {
        header = {
          headers: { 
            'Content-Type': 'application/json;charset=UTF-8',
            'Authorization': 'Bearer '+state.auth.accessToken,
          }
        };
      }
      if(isFile) {
        header = {
          headers: { 
            'Authorization': 'Bearer '+state.auth.accessToken,
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data;',
          }
        };
      }
      let response = {};
      if (method === 'GET') {
        response = await axios.get(URL, header).then((response) => response.data);
      } 
      else if(method === 'POST'){
        var header = header.headers;
        response = await axios({ method: 'POST', url: URL, headers: header, data: params}).then(response => response.data);
      }
      return response;
    } catch (error) {
      return error.response?.data;
    }
  } else {
    var error1 = {"message": "Unable to connect server, Check your internet connection status.", "status": false};
    return error1;
  }
};