import "./ourproducts.css"
import ProductCard from "./ProductsCards/ProductCard";
const Ourproducts = ({ children }) => {
    return (
        <div className="mb-[100px] ">
            <div className="container">
                <div className="">

                    <h2>
                        {children}
                    </h2>
                    
                    <ProductCard />
                </div>
            </div>
        </div>
    );
}

export default Ourproducts;