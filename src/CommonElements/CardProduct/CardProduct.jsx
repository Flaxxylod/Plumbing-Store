import "./cardProduct.css"
import shifter from "./../../assets/Common/Product-Card/image.png"
import blueshift from "./../../assets/Common/Product-Card/BlueprintsShifters.png"
import chrome from "./../../assets/Common/filter/shifters/Ellipse-1.svg"
import closer from "./../../assets/Common/Product-Card/Vector.svg"

const CardProduct = ({ product, onClose }) => {
    // Если нет продукта, не рендерим компонент
    if (!product) return null;

    const { picture, name, price, discountprice, discount } = product;

    return (
        <article className="cardproduct__content">
            <div className="cardproduct__commonblock">
                <div className="cardproduct__closerblock">
                    <button onClick={onClose}><img src={closer} alt="" /></button>
                </div>

                <div className="cardproduct__topblock">
                    <div className="cardproduct__leftblock">
                        <div className="cardproduct__imagesblock">
                            <img src={picture} alt="" />
                            <img src={blueshift} alt="" />
                        </div>

                        <div className="cardproduct__heroblock">
                            <img src={picture} alt="" />
                        </div>
                    </div>
                    <div className="cardproduct__rightblock">
                        <section className="cardproduct__descriptionblock">
                            <h4>
                                {name}
                            </h4>

                            <div className="cardproduct__infoblock">
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


                <div className="cardproduct__bottomblock">
                    <span className="cardproduct__price">
                        <strong>{discountprice || price}</strong>
                        {discount && <span className="discount">{discount}</span>}
                    </span>
                    <button className="orange">Добавить в корзину</button>
                </div>

            </div>

        </article>

    );
}

export default CardProduct;