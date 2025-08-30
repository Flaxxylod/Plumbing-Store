import "./Promotionalcard.css"

const PromotionalCard = ({ discount, picture, title, price, discountPrice, onClick }) => {

    
    return (
        <>
            <article className="PromotionalCard__content" onClick={onClick}>
            {discount && <div className="Promo__DiscountProcent">{discount}</div>}
            <div className="PromoCommon__block">

                <div className="PromoCard__picture">
                    <img src={picture} alt="" />
                </div>
                <div className="PromoCard__text">
                    <p>
                        {title}
                    </p>
                </div>
                <div className="PromoCard_price">
                    <strong style={{ fontSize: "20px" }}>
                        {price}
                    </strong>
                    {discountPrice && <p className="PromoCard_discount">{discountPrice}</p>}
                </div>
            </div>
        </article>
        </>
    );
}

export default PromotionalCard;