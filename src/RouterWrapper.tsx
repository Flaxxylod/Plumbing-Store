import { Routes, Route, useLocation } from 'react-router-dom';
import { useAppContext } from './Context'; // Используем кастомный хук из контекста
import Landing from './Landing/Landing';
import CatalogProducts from './Catalog-Products/CatalogProducts';
import ShiftersCatalog from './Shifters-Catalog/ShiftersCatalog';
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
            <Route path="/catalog/:Shifters" element={<ShiftersCatalog />} />
        </Routes>
    );
}