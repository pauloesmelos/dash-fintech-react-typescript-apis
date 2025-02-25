import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { GlobalInputDateProvider } from './global/input-date/GlobalInputDate.tsx';
import './style/tailwind.css';

const client = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalInputDateProvider>
      <QueryClientProvider client={client}>
        <App />
      </QueryClientProvider>
    </GlobalInputDateProvider>
  </StrictMode>,
)