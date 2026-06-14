import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { AppProvider } from './Context.jsx'; // Импортируем только провайдер
import "./Styles/reset.css";
import "./index.css"
import "./Styles/common.css";
import RouterWrapper from './RouterWrapper.jsx'; // Выносим логику роутов в отдельный файл

createRoot(document.getElementById('root')).render(
  <AppProvider>
    <BrowserRouter>
      <RouterWrapper />
    </BrowserRouter>
  </AppProvider>
);