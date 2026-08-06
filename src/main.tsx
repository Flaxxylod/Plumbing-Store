import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { AppProvider } from './Context.jsx'; // Импортируем только провайдер
import "./Styles/reset.css";
import "./index.css"
import "./Styles/common.css";
import RouterWrapper from './RouterWrapper.jsx'; // Выносим логику роутов в отдельный файл
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 60 * 1000,    // 60 мин данные актуальны 
      refetchOnWindowFocus: false,
      retry: 2,                    // 2 попытки при ошибке
    },
  },
});

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <AppProvider>
      <BrowserRouter>
        <RouterWrapper />
      </BrowserRouter>
    </AppProvider>
  </QueryClientProvider>
);