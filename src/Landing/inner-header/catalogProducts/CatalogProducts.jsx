import "./catalogProducts.css"
import Picture4 from "./../../../assets/Common/innerheader/catalogproducts/ceramics.svg"
import Picture3 from "./../../../assets/Common/innerheader/catalogproducts/douche.svg"
import Picture2 from "./../../../assets/Common/innerheader/catalogproducts/Furniture.svg"
import Picture1 from "./../../../assets/Common/innerheader/catalogproducts/Two-handle.svg"
const CatalogProducts = ({ isActive }) => {
    return (
        <div style={isActive ? { display: "block" } : { display: "none" }} className="catalogproducts__content">
            <div className="container">
                <div className="catalogproducts__commonblock">
                    <a href="">
                        <div className="catalogproducts__card">
                            <img src={Picture1} />
                            <strong>Сместители</strong>
                        </div>
                    </a>

                    <a href="">
                        <div className="catalogproducts__card">
                            <img src={Picture2} />
                            <strong>Сместители</strong>
                        </div>
                    </a>

                    <a href="">
                        <div className="catalogproducts__card">
                            <img src={Picture3} />
                            <strong>Сместители</strong>
                        </div>
                    </a>

                    <a href="">
                        <div className="catalogproducts__card">
                            <img src={Picture4} />
                            <strong>Сместители</strong>
                        </div>
                    </a>

                </div>
            </div>
        </div>
    );
}

export default CatalogProducts;