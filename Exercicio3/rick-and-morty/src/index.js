import React from 'react';
import ReactDOM from 'react-dom/client';  // Alteração aqui, importando o createRoot
import App from './App';
import './styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));  // Usando createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>


);
