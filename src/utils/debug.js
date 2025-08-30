// Утилиты для дебагинга React приложения

// Функция для логирования с временными метками
export const debugLog = (message, data = null) => {
    const timestamp = new Date().toLocaleTimeString();
    const logMessage = `[${timestamp}] ${message}`;
    
    if (data) {
        console.log(logMessage, data);
    } else {
        console.log(logMessage);
    }
};

// Функция для дебагинга состояния компонента
export const debugState = (componentName, stateName, value) => {
    debugLog(`🔍 ${componentName} - ${stateName}:`, value);
};

// Функция для дебагинга пропсов
export const debugProps = (componentName, props) => {
    debugLog(`📦 ${componentName} - Props:`, props);
};

// Функция для дебагинга событий
export const debugEvent = (eventName, eventData = null) => {
    debugLog(`🎯 Event: ${eventName}`, eventData);
};

// Функция для дебагинга рендеров
export const debugRender = (componentName) => {
    debugLog(`🔄 ${componentName} - Component rendered`);
};

// Функция для дебагинга эффектов
export const debugEffect = (effectName, dependencies = null) => {
    debugLog(`⚡ Effect: ${effectName}`, dependencies);
};

// Глобальная переменная для включения/выключения дебага
window.DEBUG_MODE = true;

// Функция для условного дебагинга
export const conditionalDebug = (message, data = null) => {
    if (window.DEBUG_MODE) {
        debugLog(message, data);
    }
}; 