import React from 'react';
import { Provider } from 'react-redux';
import store from './store/redux';
import Search from './container/search';

import './App.css';

function App() {
  return (
    <Provider store={store}>
     <Search />
    </Provider>
  );
}

export default App;
