import { Link } from "react-router-dom"
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
                    <Link to={"/catalog/Shifters"}>
                        <div className="catalogproducts__card">
                            <img src={Picture1} />
                            <strong>Сместители</strong>
                        </div>
                    </Link>

                    <a href="">
                        <div className="catalogproducts__card">
                            <img src={Picture2} />
                            <strong>Мебель</strong>
                        </div>
                    </a>



                    <a href="">
                        <div className="catalogproducts__card">
                            <img src={Picture3} />
                            <strong>Душевая программа</strong>
                        </div>
                    </a>

                    <a href="">
                        <div className="catalogproducts__card">
                            <img src={Picture4} />
                            <strong>Фаянс</strong>
                        </div>
                    </a>

                </div>
            </div>
        </div>
    );
}

export default CatalogProducts;