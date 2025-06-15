import "./productsCard.css"
import { CardsData } from "./DataOurproducts";
const ProductCard = () => {

    const Card = CardsData.map((obj) => (
        <a href="!#">
            <div key={obj.id} className="ProductsCard__cards__block">
                <section style={{ background: `url(${obj.picture})` }} className="ProductsCard__card">
                    <span className="ProductsCard__card__text">
                        <strong className="white">
                            {obj.title}
                        </strong>
                    </span>
                </section>
            </div>
        </a>
    ))
    return (

        <div className="ProductsCard__content">
            {Card}
        </div>
    );
}

export default ProductCard;