import React, { createContext, SetStateAction, useContext, useState } from 'react';

interface AppContextType {
    Directory: string[]
    setDirectory: React.Dispatch<React.SetStateAction<string[]>>
}

// Создаем контекст с начальным значением
export const AppContext = createContext<AppContextType | undefined>(undefined);
interface AppProviderProps {
    children: React.ReactNode
}

// Создаем провайдер
export function AppProvider({ children }: AppProviderProps) {
    // Здесь может быть любое состояние, которое вы хотите передать
    const [Directory, setDirectory] = useState<string[]>([""]);

    // Любые другие значения, которые хотите сделать доступными
    const value: AppContextType = {
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