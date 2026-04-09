import "./shiftersFilter.css"
import { filterData } from "./filterData.js"
import { useState } from "react";
const ShiftersFilter = () => {

    const [colorChange, setColorChange] = useState(0)
    const [colorsSelected, setColorsSelected] = useState([])
    const selectColor = (index) => {
        setColorChange(index)
        setColorsSelected((array) => array.includes(index) ? array.filter((item) => item !== index) :
            [...array, index]) // в array.filter((item) => item !== index) item - элемент массива, index текущий элемент массива.

    }


    return (
        <div className="lg:block hidden">
            <div className="relative flex flex-col gap-y-[24px] p-[28px] rounded-[4px] border-[var(--orange-color)] border-[2px] w-[282px]">

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
                    <div className="shifter__colorlist">
                        {filterData.map((item, index) => (
                            <img className={colorsSelected.includes(index) ? "selected" : ""} onClick={() => selectColor(index)} key={index} src={item.color} alt={`Цвет ${index + 1}`} />
                        ))}
                    </div>
                </div>
                <div className="shiferfilterblock">
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
            </div>
        </div>
    );
}

export default ShiftersFilter;