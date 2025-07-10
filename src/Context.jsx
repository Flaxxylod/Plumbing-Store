import { createContext, useContext, useState } from 'react';

// Создаем контекст с начальным значением
export const AppContext = createContext();

// Создаем провайдер
export function AppProvider({ children }) {
    // Здесь может быть любое состояние, которое вы хотите передать
    const [Directory, setDirectory] = useState([""]);


    // Любые другие значения, которые хотите сделать доступными
    const value = {
        Directory,
        setDirectory,
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}

// Хук для удобного использования контекста
export function useAppContext() {
    return useContext(AppContext);
}