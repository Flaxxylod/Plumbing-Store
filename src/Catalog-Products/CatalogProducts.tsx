
import InnerHeader from "../Landing/inner-header/InnerHeader";
import Footer from "../CommonElements/footer/Footer.js";

import Ourproducts from "../CommonElements/Ourproducts/Ourproducts.jsx";
import Products from "./main/Products/Products.jsx";
import ByProduction from "./main/ByProduction/ByProduction.jsx";

const CatalogProducts = () => {

    return (
        <div>
            <InnerHeader />
            <div >



                <main >
                    <Ourproducts>Каталог товаров</Ourproducts>
                    <Products />
                    <ByProduction />
                </main>

                <Footer />
            </div>
        </div>
    );
}

export default CatalogProducts;