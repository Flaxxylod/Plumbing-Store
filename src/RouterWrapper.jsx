import { Routes, Route, useLocation } from 'react-router-dom';
import { useAppContext } from './Context.jsx'; // Используем кастомный хук из контекста
import Landing from './Landing/Landing.jsx';
import CatalogProducts from './Catalog-Products/CatalogProudcts.jsx';
import ShiftersCatalog from './Shifters-Catalog/ShiftersCatalog.jsx';
import { useEffect } from 'react';

export default function RouterWrapper() {
    const { setDirectory } = useAppContext();
    const location = useLocation();

    useEffect(() => {
        switch (location.pathname) {
            case "/catalog/Shifters":
                setDirectory(["Главная", "Товары", "Смесители"]);
                break;
            case "/catalog":
                setDirectory(["Главная", "Товары"]);
                break;
            default:
                setDirectory(["Главная"]);
        }
    }, [location.pathname, setDirectory]);

    return (
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/catalog" element={<CatalogProducts />} />
            <Route path="/catalog/Shifters" element={<ShiftersCatalog />} />
        </Routes>
    );
}