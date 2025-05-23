import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from './components/theme/ThemeContext';
import App from './App';

import './styles/reset.css';
import './styles/globals.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
