import "./ourproducts.css"
import ProductCard from "./ProductsCards/ProductCard";
const Ourproducts = () => {
    return (
        <div className="ourproducts__content">
            <div className="container">
                <div className="ourproducts__common__block">
                    <span className="ourproducts__common__title">
                        <h2>
                            Наша продукция
                        </h2>
                    </span>
                    <ProductCard/>
                </div>
            </div>
        </div>
    );
}

export default Ourproducts;