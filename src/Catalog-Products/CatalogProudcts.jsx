import "./CatalogProducts.css"
import InnerHeader from "../Landing/inner-header/InnerHeader";
import OurProducts from "./../Landing/main/Ourproducts/Ourproducts.jsx"
const CatalogProducts = () => {
    return (
        <div className="wrap">
            <div className="catalogproducts__content">
            <InnerHeader Visibility={true}/>
            <OurProducts>Каталог товаров</OurProducts>
            </div>
        </div>
    );
}

export default CatalogProducts;