import "./productsCard.css"
import { CardsData } from "./DataOurproducts";

const ProductCard = () => {

    const Card = CardsData.map((obj) => (

        <div style={{ backgroundImage: `url(${obj.picture})` }} className="md:min-w-[500px] bg-cover ProductsCard__card  flex flex-col justify-end min-w-[287px] max-w-[287px] h-[350px] max-lg:max-w-[500px] max-lg:max-h-[275px]">
            <span className="ProductsCard__card__text">
                <span className="highline text-[var(--white-color)] text-[1.25rem]">
                    {obj.title}
                </span>
            </span>
        </div>


    ))
    return (

        <div className=" mt-[28px] flex items-center justify-center lg:gap-x-[14px] gap-y-[16px]  lg:transform lg:skew-x-2 skew-x-0 max-lg:flex-col">
            {Card}
        </div>
    );
}

export default ProductCard;