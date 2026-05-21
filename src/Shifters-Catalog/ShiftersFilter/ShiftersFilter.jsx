import "./shiftersFilter.css"
import { filterData } from "./filterData.js"
import { useState } from "react";
import Button from "../../Styles/elements/Button/Button.jsx";
import UI_Store from "../../Store/UI_Store.js";
const ShiftersFilter = () => {

    const [colorChange, setColorChange] = useState(0)
    const [colorsSelected, setColorsSelected] = useState([])
    const MobileFilter_IsActive = UI_Store((state) => state.Filter_IsActive)

    const selectColor = (index) => {
        setColorChange(index)
        setColorsSelected((array) => array.includes(index) ? array.filter((item) => item !== index) :
            [...array, index]) // в array.filter((item) => item !== index) item - элемент массива, index текущий элемент массива.

    }



    return (
        <div className={`lg:block ${MobileFilter_IsActive ? "block" : "hidden"}   max-lg:fixed max-lg:z-30 max-lg:top-0 max-lg:left-0 max-lg:right-0`}>
            <div className="relative  overflow-y-auto overscroll-y-contain flex flex-col gap-y-[24px] lg:p-[28px] p-[16px] rounded-[4px] bg-[var(--white-color)] lg:border-[var(--orange-color)] border-[2px] lg:w-[282px] max-lg:h-screen max-lg:w-screen">
                <div className="lg:block flex flex-col justify-between ">
                    <div className="border-b-[1px] border-b-[#ECECEC] pb-[20px]">
                        <input type="checkbox" name="" id="" />
                        <label >Акционные товары</label>
                    </div>

                    <div>
                        <strong>Тип вентиля</strong>
                        <ul className="flex flex-col mt-[16px] gap-y-[12px]">
                            <li>
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Двухвентильный</label>
                            </li>
                            <li>
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Однорычажный</label>
                            </li>
                        </ul>
                    </div>

                    <div className="shiferfilterblock">
                        <strong>Цвет</strong>
                        <div className="shifter__colorlist max-md:gap-[12px]!">
                            {filterData.map((item, index) => (
                                <img className={colorsSelected.includes(index) ? "selected" : ""} onClick={() => selectColor(index)} key={index} src={item.color} alt={`Цвет ${index + 1}`} />
                            ))}
                        </div>
                    </div>
                    <div className="shiferfilterblock mb-[16px]">
                        <strong>Коллеция</strong>
                        <ul className="shifter__checklist">
                            <li>
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Alfi</label>
                            </li>

                            <li>
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Archi</label>
                            </li>

                            <li>
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Aristo</label>
                            </li>

                            <li>
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Astin</label>
                            </li>

                            <li>
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Berti</label>
                            </li>

                            <li>
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Boni</label>
                            </li>
                        </ul>
                    </div>
                    <Button styling={"lg:hidden"} click={UI_Store((state) => state.Activating_Filter)}>Показать товары</Button>
                </div>
            </div>
        </div >
    );
}

export default ShiftersFilter;