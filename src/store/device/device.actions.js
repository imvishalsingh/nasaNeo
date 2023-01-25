import { deviceActions } from '../actionTypes';

//Store function start Here

export const onNetworkConnectionChange = (isConnected, isInternetReachable) => {
  return {
    type: deviceActions.CONNECTION_CHANGE,
    isConnected,
    isInternetReachable,
  };
};

export const resetDevice = () => {
  return {type: deviceActions.RESET_DEVICE};
};



