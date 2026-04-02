import "./CatalogProducts.css"
import InnerHeader from "../Landing/inner-header/InnerHeader";
import Footer from "../CommonElements/footer/Footer.jsx";

import Ourproducts from "../CommonElements/Ourproducts/Ourproducts.jsx";
import PopularProducts from "./main/PopularProducts/PopularProducts.jsx";
import ByProduction from "./main/ByProduction/ByProduction.jsx";

const CatalogProducts = () => {

    return (
        <div className="wrap">
            <div className="catalogproducts__content">
                <nav id="nav">
                    <InnerHeader   />
                </nav>

                <main>
                    <Ourproducts>Каталог товаров</Ourproducts>
                    <PopularProducts />
                    <ByProduction />
                </main>

                <Footer />
            </div>
        </div>
    );
}

export default CatalogProducts;