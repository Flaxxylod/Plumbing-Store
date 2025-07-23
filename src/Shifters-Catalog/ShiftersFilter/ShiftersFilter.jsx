import "./shiftersFilter.css"

import Ellipse1 from "./../../assets/Common/filter/shifters/Ellipse-1.svg"
import Ellipse2 from "./../../assets/Common/filter/shifters/Ellipse-2.svg"
import Ellipse3 from "./../../assets/Common/filter/shifters/Ellipse-3.svg"
import Ellipse4 from "./../../assets/Common/filter/shifters/Ellipse-4.svg"
import Ellipse5 from "./../../assets/Common/filter/shifters/Ellipse-5.svg"
import Ellipse6 from "./../../assets/Common/filter/shifters/Ellipse-6.svg"
import Ellipse7 from "./../../assets/Common/filter/shifters/Ellipse-7.svg"
import Ellipse8 from "./../../assets/Common/filter/shifters/Ellipse-8.svg"
import Ellipse9 from "./../../assets/Common/filter/shifters/Ellipse.svg"
const ShiftersFilter = () => {
    return (
        <div className="shiftersFilter__content">
            <div className="sfilter__commonblock">
                <div className="shiferfilterblock">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">Акционные товары</label>
                </div>

                <div className="shiferfilterblock">
                    <strong>Тип вентиля</strong>
                    <ul className="shifter__checklist">
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
                        <img src={Ellipse1} alt="" />
                        <img src={Ellipse2} alt="" />
                        <img src={Ellipse3} alt="" />
                        <img src={Ellipse4} alt="" />
                        <img src={Ellipse5} alt="" />
                        <img src={Ellipse6} alt="" />
                        <img src={Ellipse7} alt="" />
                        <img src={Ellipse8} alt="" />
                        <img src={Ellipse9} alt="" />
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