import {deviceActions} from '../actionTypes';

const getInitialState = () => ({
  isConnected: false,
  isInternetReachable: false,
});

export const device = (state = getInitialState(), action) => {
  switch (action.type) {
    case deviceActions.CONNECTION_CHANGE:
      return {
        ...state,
        isConnected: action.isConnected,
        isInternetReachable: action.isInternetReachable
      };
    default:
      return state;
  }
};
