import React from 'react';
import ReactDOM from 'react-dom/client';
import { SWRConfig } from 'swr/_internal';
import App from './App.tsx';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SWRConfig
      value={{
        fetcher: (resource, init) =>
          fetch(import.meta.env.VITE_API_URL + resource, init).then((res) => res.json()),
        refreshWhenHidden: true,
      }}
    >
      <App />
    </SWRConfig>
  </React.StrictMode>
);
