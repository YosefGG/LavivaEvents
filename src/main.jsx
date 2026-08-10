import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { direction, language } from './config/language';
import App from './App.jsx';

document.documentElement.lang = language;
document.documentElement.dir = direction;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
