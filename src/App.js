import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import GlobalStyle from './styles/global';
import Header from './components/Header';
import Routes from './routes';

function App() {
  return (
      <Provider>
        <BrowserRouter>
            <Header />
            <Routes />
            <GlobalStyle />
        </BrowserRouter>
    </Provider>
  );
}

export default App;
