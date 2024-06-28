import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { FilterProvider } from './FilterContext'; // Importa FilterProvider
import { AuthProvider } from './AuthContext'; // Importa AuthProvider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <FilterProvider>
        <AuthProvider> {/* Añade AuthProvider aquí */}
          <App />
        </AuthProvider>
      </FilterProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();