import Shrink from "./../../assets/Common/ProductPage/ProductSpecification/Forsink.svg"
import TwoHandle from "./../../assets/Common/ProductPage/ProductSpecification/Two-handle.svg"
const ProductSpecifications = () => {
    return (
        <div>

            <h2>Характеристики</h2>
            <div className="flex max-w-[480px] justify-between">
                <div className="flex flex-col items-baseline">
                    <img className="max-w-[80px]" src={Shrink} alt="" />
                    <div className="max-w-[220px]">
                        <h4>Для раковины</h4>
                        <span className="inline-block text-[0.9375rem] text-[#7B7B7B] leading-[20px]">Крепится на раковину.
                            Подходит для ванной комнаты.</span>
                    </div>
                </div>

                <div className="flex flex-col items-baseline">
                    <img className="max-w-[80px]" src={TwoHandle} alt="" />
                    <div className="max-w-[220px]">
                        <h4>Двухвентильный</h4>
                        <span className="inline-block text-[0.9375rem] text-[#7B7B7B]">Подача горячей и холодной воды регулируется отдельно.</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col max-w-[486px]">
                <ul className="">
                    <li className="before:content-['']  py-[21px]  border-t-[1px] border-dashed border-[#B6B6B6] ">
                        <div className="max-w-[258px] flex justify-between">
                            <span>Коллекция</span>
                            <strong className="text-[var(--orange-color)]!">Fenix</strong>
                        </div>
                    </li>

                    <li className="before:content-['']  py-[21px]  border-t-[1px] border-dashed border-[#B6B6B6] ">
                        <div className="max-w-[258px] flex justify-between">
                            <span>Цвет</span>
                            <strong className="text-[var(--orange-color)]!">Хром</strong>
                        </div>
                    </li>

                    <li className="before:content-['']  py-[21px]  border-t-[1px] border-dashed border-[#B6B6B6] ">
                        <div className="max-w-[258px] flex justify-between">
                            <span>Тип картриджа</span>
                            <strong>керамический</strong>
                        </div>
                    </li>
                    <li className="before:content-['']  py-[21px]  border-t-[1px] border-dashed border-[#B6B6B6] ">
                        <div className="max-w-[258px] flex justify-between">
                            <span>Размер картриджа</span>
                            <strong>10 мм</strong>
                        </div>
                    </li>
                    <li className="before:content-['']  py-[21px]  border-t-[1px] border-dashed border-[#B6B6B6] ">
                        <div className="max-w-[258px] flex justify-between">
                            <span>Страна производитель</span>
                            <strong>Германия</strong>
                        </div>
                    </li>
                    <li className="before:content-['']  py-[21px]  border-t-[1px] border-dashed border-[#B6B6B6] ">
                        <div className="max-w-[258px] flex justify-between">
                            <span>Гарантия</span>
                            <strong>5 лет</strong>
                        </div>
                    </li>

                    <li className="before:content-['']  py-[21px]  border-t-[1px] border-dashed border-[#B6B6B6] ">
                        <div className="max-w-[258px] flex justify-between">
                            <span>Вес</span>
                            <strong>0,73 кг</strong>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default ProductSpecifications;