import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import StoreProvider from "./providers/StoreProvider/StoreProvider";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
      <StoreProvider>
          <App />
      </StoreProvider>
  </React.StrictMode>
);

reportWebVitals();
