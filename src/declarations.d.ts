// src/declarations.d.ts
declare module '*.css' {
    const content: { [className: string]: string };
    export default content;
}

// Или для side-effect импортов (просто импорт без переменной)
declare module '*.css' {
    const content: any;
    export default content;
}

// Для SCSS/SASS
declare module '*.scss' {
    const content: { [className: string]: string };
    export default content;
}

// Для картинок (если еще нет)
declare module '*.png' {
    const src: string;
    export default src;
}

declare module '*.jpg' {
    const src: string;
    export default src;
}

declare module '*.svg' {
    const src: string;
    export default src;
}