import "./cardProduct.css"

import blueshift from "./../../assets/Common/Product-Card/BlueprintsShifters.png"
import chrome from "./../../assets/Common/filter/shifters/Ellipse-1.svg"
import closer from "./../../assets/Common/Product-Card/Vector.svg"
import Button from "../../Styles/elements/Button/Button"

type CardProductProps = {
    product?: {
        imageUrl: string;
        title: string;
        price: number;
        discount_price?: number;
        discount_percents?: number;
        id?: number;
        name?: string;
    };
    onClose: () => void;
    testid?: string;
}


const CardProduct = ({ product, onClose, testid }: CardProductProps) => {
    // Если нет продукта, не рендерим компонент
    if (!product) return null;

    const {
        imageUrl: picture,
        title: name,
        price,
        discount_price: discountprice,
        discount_percents: discount
    } = product;


    return (
        <article data-testid={testid} className="bg-[var(--white-color)] rounded-[4px] p-[13px_13px_28px_24px]">
            <div className="cardproduct__commonblock">
                <div className="flex justify-end">
                    <button className="bg-none" onClick={onClose}><img src={closer} alt="" /></button>
                </div>

                <div className="flex mt-[5px] p-[0px_11px_19px_0px] gap-x-[32px]">
                    <div className="flex gap-x-[20px]">
                        <div className="cardproduct__imagesblock">
                            <img src={picture} alt="" />
                            <img src={blueshift} alt="" />
                        </div>

                        <div className="cardproduct__heroblock">
                            <img src={picture} alt="" />
                        </div>
                    </div>
                    <div className="max-w-[378px]">
                        <section className="cardproduct__descriptionblock">
                            <h4>
                                {name}
                            </h4>

                            <div className="mt-[16px] max-w-[300px]">
                                <ul className="info-list">
                                    <li>
                                        <span className="info-label">Цвет</span>
                                        <span className="info-value"><img src={chrome} alt="" /> Хром</span>
                                    </li>
                                    <li>
                                        <span className="info-label">Тип</span>
                                        <span className="info-value">двухвентильный</span>
                                    </li>
                                    <li>
                                        <span className="info-label">Назначение</span>
                                        <span className="info-value">для раковины</span>
                                    </li>
                                    <li>
                                        <span className="info-label">Тип картриджа</span>
                                        <span className="info-value">керамический</span>
                                    </li>
                                    <li>
                                        <span className="info-label">Гарантия</span>
                                        <span className="info-value">5 лет</span>
                                    </li>
                                </ul>
                                <a href="#!" style={{ fontSize: "16px", color: "#FE5B00", marginTop: "16px" }}>Комлектация, преимущества и доставка →
                                </a>
                            </div>
                        </section>
                    </div>


                </div>


                <div className="flex justify-end gap-x-[68px] p-[24px_0px_0px_0px] bg-[#FCFCFC] border-t-[1px] border-t-[#ECECEC]">
                    <div className="flex  items-center">
                        <strong className="text-[PT_Sans]! leading-[32px] text-[2rem]!">{price + "₽"}</strong>
                        {discount && <span className="line-through text-[#A5A5A5] ml-[1rem]">{discountprice + "₽"}</span>}
                    </div>
                    <Button>Добавить в корзину</Button>
                </div>

            </div>

        </article>

    );
}

export default CardProduct;