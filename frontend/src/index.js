import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { Provider } from './components/Context';
import { BrowserRouter } from 'react-router-dom';
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Auth0ProviderWithHistory>
      <Provider>
        <App />
      </Provider>
    </Auth0ProviderWithHistory>
  </BrowserRouter>
);