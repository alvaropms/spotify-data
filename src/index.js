import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {Store} from './store/index';
import {BrowserRouter} from 'react-router-dom';

import { GlobalStyle } from './globalStyles';
import {QueryClientProvider} from 'react-query';
import {queryClient} from './utilities/api';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
      <GlobalStyle/>
      <Provider store={Store}>
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <App/>
          </QueryClientProvider>
        </BrowserRouter>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
