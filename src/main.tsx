import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './style/tailwind.css';
import { GlobalInputDateProvider } from './global/input-date/GlobalInputDate.tsx';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalInputDateProvider>
      <App />
    </GlobalInputDateProvider>
  </StrictMode>,
)