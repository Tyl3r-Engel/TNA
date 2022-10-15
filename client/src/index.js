import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { DomeSizeProvider } from "./contexts/DomSizeProvider";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <DomeSizeProvider>
        <App />
      </DomeSizeProvider>
    </BrowserRouter>
  </React.StrictMode>
);