import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from 'app/App';
import { BrowserRouter } from 'react-router-dom';
import { setupStore } from './store/store';
import { Provider } from 'react-redux';

const container = document.getElementById('root');
const root = createRoot(container as HTMLElement);

const store = setupStore();

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
