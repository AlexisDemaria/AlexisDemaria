import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { CarroProvider } from './context/CarroContext'
import './styles/index.css';
import './styles/App.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CarroProvider>
    <App />
  </CarroProvider>
);
