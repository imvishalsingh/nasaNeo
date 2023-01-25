import React from 'react';
import { Provider } from "react-redux";
import { store, persistor } from "./src/store/store";
import { PersistGate } from 'redux-persist/integration/react';
import FlashMessage from 'react-native-flash-message';
import { LogBox } from 'react-native';
import Navigator from './src/navigations';

LogBox.ignoreLogs(['warnings...']);
LogBox.ignoreAllLogs();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigator />
        <FlashMessage position="bottom" duration={2000} />
      </PersistGate>
    </Provider>
  );
};

export default App;