

import { create } from "zustand";

interface UIStoreType {
    OpenSearchInput: boolean,
    OpeningSearchInput: () => void,
    reset: () => void,

    MobileVersion_width: number,
    CurrentWidth: number,
    MobileVersion: boolean,
    SwitchMobileVersion: () => void,
    SwitchingMobileVersion: () => void,
    Filter_IsActive: boolean,
    FindingWidth: () => void
}

const UI_Store = create<UIStoreType>((set, get) => ({
    OpenSearchInput: false,
    OpeningSearchInput: () => set((state) => ({ OpenSearchInput: !state.OpenSearchInput })),
    reset: () => set({ OpenSearchInput: false }),


    MobileVersion_width: 768, // ширина при которой должна включаться мобильная версия
    CurrentWidth: window.innerWidth, // ширина экрана при загрузке сайта

    MobileVersion: false, //переключатель мобильной версии

    SwitchingMobileVersion: () => set((state) => ({ MobileVersion: state.MobileVersion })), //переключатель мобильной версии

    FindingWidth: () => { // нахождение ширины экрана в настоящий момент
        set({ CurrentWidth: window.innerWidth }) // обновляет в поле CurrentWidth: значение ширины экрана
        get().SwitchMobileVersion() //вызов следующей функции
    },

    SwitchMobileVersion: () => { // функция переключения мобильной версии 
        if (get().CurrentWidth >= get().MobileVersion_width) { // если ширина больше или равно ширине при которой включается мобильная версия
            set({ MobileVersion: true }) //мобильная версия активирована

        }
        else {
            set({ MobileVersion: false }) //декстопная версия активирована
        }
    },

    Filter_IsActive: false,
    Activating_Filter: () => set((state) => ({ Filter_IsActive: !state.Filter_IsActive })),

})
)
UI_Store.getState().FindingWidth() // вызов функции сразу после загрузки страницы, чтобы сразу включилась либо декстопная либо мобильная версия
addEventListener("resize", () => UI_Store.getState().FindingWidth()) // вызов функции из стора при изменении ширины сайта

export default UI_Store