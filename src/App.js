import React from 'react';
import { Provider } from 'react-redux';
import store from './Store';
import FirstPage from './components/FirstPage';

function App() {
  return (
    <Provider store={store}>
      <FirstPage />
    </Provider>
  );
}

export default App;
