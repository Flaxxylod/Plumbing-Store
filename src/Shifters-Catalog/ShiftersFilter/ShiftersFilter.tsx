import "./shiftersFilter.css"
import { filterData } from "./filterData.js"
import { useState } from "react";
import Button from "../../Styles/elements/Button/Button.js";
import UI_Store from "../../Store/UI_Store.js";
import closer from "./../../assets/Common/Product-Card/Vector.svg"
import CheckboxFilter from "./CheckboxFilter";
const ShiftersFilter = () => {


    const [colorsSelected, setColorsSelected] = useState<number[]>([])
    const [Selected_Checkbox, setSelected_Checkbox] = useState<number[]>([])
    const Filter_switch: () => void = UI_Store((state) => state.Activating_Filter)
    const MobileFilter_Open: boolean = UI_Store((state) => state.Filter_IsActive)
    const ColorList = filterData[0].colors
    const CheckboxList = filterData[0].checkBoxes
    console.log(Selected_Checkbox)
    const selectColor = (index: number): void => {

        setColorsSelected((array: number[]) => array.includes(index) ? array.filter((item) => item !== index) :
            [...array, index]) // в array.filter((item) => item !== index) item - элемент массива, index текущий элемент массива.

    }

    const selectCheckbox = (index: number): void => {
        setSelected_Checkbox((array: number[]) => array.includes(index) ? array.filter((item) => item !== index) : [...array, index])



    }

    const resetFilters = (): void => {
        setColorsSelected([])
        setSelected_Checkbox([])

    }


    if (MobileFilter_Open) {
        return (
            <div className={`block max-lg:fixed max-lg:z-30 max-lg:top-0 max-lg:left-0 max-lg:right-0`}>

                <div className="lg:hidden flex flex-nowrap items-center p-[14px_16px] justify-between bg-[#F5F5F5]">
                    <button onClick={resetFilters} className="hover:text-[var(--orange-color)]">Сбросить</button>
                    <h4>Фильтр</h4>
                    <button onClick={Filter_switch}><img src={closer} /></button>
                </div>
                <div className="relative  overflow-y-auto overscroll-y-contain flex flex-col gap-y-[24px] lg:p-[28px] p-[16px]  bg-[var(--white-color)] lg:border-[var(--orange-color)]  lg:w-[282px] max-lg:h-screen max-lg:w-screen">

                    <div className="lg:block flex flex-col justify-between ">
                        <div className="border-b-[1px] border-b-[#ECECEC] pb-[20px]">
                            {CheckboxList.map((item) => (
                                <ul>

                                    <CheckboxFilter Key={item.id} isChanged={() => selectCheckbox(item.id)} isChecked={Selected_Checkbox.includes(item.id)}>{item.label}</CheckboxFilter >
                                </ul>
                            )).slice(0, 1)}
                        </div>

                        <div>
                            <strong>Тип вентиля</strong>
                            <ul className="flex flex-col mt-[16px] gap-y-[12px]">
                                {CheckboxList.map((item) => (
                                    <CheckboxFilter Key={item.id} isChanged={() => selectCheckbox(item.id)} isChecked={Selected_Checkbox.includes(item.id)}>{item.label}</CheckboxFilter >
                                )).slice(1, 3)}
                            </ul>
                        </div>

                        <div className="shiferfilterblock">
                            <strong>Цвет</strong>
                            <div className="shifter__colorlist max-md:gap-[12px]!">
                                {ColorList.map((item, index) => (
                                    <img className={colorsSelected.includes(index) ? "selected" : ""} onClick={() => selectColor(index)} key={index} src={item.color} alt={`Цвет ${index + 1}`} />
                                ))}
                            </div>
                        </div>
                        <div className="shiferfilterblock mb-[16px]">
                            <strong>Коллеция</strong>
                            <ul className="shifter__checklist">
                                {CheckboxList.map((item) => (
                                    <CheckboxFilter Key={item.id} isChanged={() => selectCheckbox(item.id)} isChecked={Selected_Checkbox.includes(item.id)}>{item.label}</CheckboxFilter >
                                )).slice(3)}
                            </ul>
                        </div>
                        <Button styling={"lg:hidden"} onClick={Filter_switch}>Показать товары</Button>
                    </div>
                </div>

            </div >
        );
    }

}

export default ShiftersFilter;