# Руководство по дебагингу React приложения

## 🛠️ Инструменты для дебагинга

### 1. React Developer Tools
- **Установка**: [Chrome Extension](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- **Возможности**:
  - Просмотр компонентов и их состояния
  - Отслеживание пропсов
  - Профилирование производительности
  - Отладка хуков

### 2. Browser DevTools
- **Console**: Логирование с эмодзи для лучшей читаемости
- **Sources**: Отладка с source maps
- **Network**: Отслеживание API запросов
- **Performance**: Анализ производительности

### 3. VSCode Extensions
Рекомендуемые расширения:
- **ES7+ React/Redux/React-Native snippets**
- **Prettier - Code formatter**
- **ESLint**
- **Auto Rename Tag**

## 🔍 Методы дебагинга

### 1. Console Logging
```javascript
// Простой лог
console.log('Значение:', value);

// Лог с эмодзи для лучшей видимости
console.log('🔍 Debug:', value);

// Лог с временной меткой
console.log(`[${new Date().toLocaleTimeString()}] Debug:`, value);
```

### 2. Debug Utils (src/utils/debug.js)
```javascript
import { debugState, debugEvent, debugRender } from '../utils/debug.js';

// Логирование состояния
debugState('ComponentName', 'stateName', value);

// Логирование событий
debugEvent('eventName', eventData);

// Логирование рендеров
debugRender('ComponentName');
```

### 3. useEffect для отслеживания изменений
```javascript
useEffect(() => {
    console.log('🎯 State изменился:', stateValue);
}, [stateValue]);
```

### 4. React DevTools
- Откройте DevTools (F12)
- Перейдите на вкладку "Components"
- Выберите компонент для просмотра его состояния и пропсов

## 🚀 Запуск в режиме разработки

```bash
npm run dev
```

Приложение запустится на `http://localhost:3000` с включенными source maps.

## 📝 Примеры дебагинга

### Отладка состояния
```javascript
const [count, setCount] = useState(0);

useEffect(() => {
    debugState('Counter', 'count', count);
}, [count]);
```

### Отладка событий
```javascript
const handleClick = (id) => {
    debugEvent('buttonClick', { id, timestamp: Date.now() });
    // логика обработки
};
```

### Отладка пропсов
```javascript
const MyComponent = (props) => {
    debugProps('MyComponent', props);
    // остальной код
};
```

## 🎯 Советы по эффективному дебагингу

1. **Используйте эмодзи** для быстрого поиска логов
2. **Группируйте логи** по компонентам
3. **Отслеживайте изменения состояния** с помощью useEffect
4. **Используйте React DevTools** для инспекции компонентов
5. **Включайте/выключайте дебаг** через `window.DEBUG_MODE`

## 🔧 Настройка IDE

### VSCode
- Установите расширения для React
- Настройте автоформатирование
- Используйте встроенный дебаггер

### Chrome DevTools
- Включите source maps
- Используйте breakpoints
- Отслеживайте сетевые запросы

## 📊 Мониторинг производительности

```javascript
// Профилирование компонента
console.time('ComponentRender');
// код компонента
console.timeEnd('ComponentRender');
```

## 🐛 Частые проблемы и решения

1. **Состояние не обновляется**: Проверьте зависимости useEffect
2. **Компонент не рендерится**: Проверьте условия рендеринга
3. **События не срабатывают**: Проверьте обработчики событий
4. **API запросы не работают**: Проверьте Network tab в DevTools 