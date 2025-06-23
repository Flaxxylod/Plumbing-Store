import "./Promotionalcard.css"

import { PromCardData } from "./PromCardData";
const PromotionalCard = ({ discount }) => {
    const Card = PromCardData.map(obj => (
        <article className="PromotionalCard__content">
            {obj.discount && <div className="Promo__DiscountProcent">{obj.discount}</div>}
            <div className="PromoCommon__block">

                <div className="PromoCard__picture">
                    <img src={obj.picture} alt="" />
                </div>
                <div className="PromoCard__text">
                    <p>
                        {obj.title}
                    </p>
                </div>
                <div className="PromoCard_price">
                    <strong style={{ fontSize: "20px" }}>
                        {obj.price}
                    </strong>
                    {obj.discountPrice && <p className="PromoCard_discount">{obj.discountPrice}</p>}
                </div>
            </div>
        </article>
    ))
    return (
        <>
            {Card}
        </>
    );
}

export default PromotionalCard;