import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { AppProvider } from './Context.js'; // Импортируем только провайдер
import "./Styles/Reset.css";
import "./Index.css"
import "./Styles/Common.css";
import RouterWrapper from './RouterWrapper.jsx'; // Выносим логику роутов в отдельный файл

createRoot(document.getElementById('root')).render(
  <AppProvider>
    <BrowserRouter>
      <RouterWrapper />
    </BrowserRouter>
  </AppProvider>
);