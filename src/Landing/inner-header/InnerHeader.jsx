import "./innerHeader.css"
import logo from "./../../assets/Common/navigation/logo.svg"
import SearchButton from "../../Styles/elements/searchbutton/SearchButton"
import BucketShopButton from "../../Styles/elements/bucketshopbutton/BucketShopButton"
import UserButton from "../../Styles/elements/userbutton/UserButton"
import { useState } from "react"
import { useEffect } from "react"
import CatalogProducts from "./catalogProducts/CatalogProducts"
import SearchInput from "./SearchInput/SearchInput"
import { useLocation } from "react-router-dom"
import BreadCrumbs from "./BreadCrumbs/BreadCrumbs"
const InnerHeader = ({ Visibility }) => {
    const location = useLocation()
    Visibility ??= false
    const [isHidden, setIsHidden] = useState(Visibility);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [productsHidden, setProductsHidden] = useState(false)
    const [searchInputHidden, setsearchInputHidden] = useState(false)
    const [directoryHidden, setDirectoryHidden] = useState(true)
    if (Visibility === true) {

    }
    else {
        useEffect(() => {
            console.log("Работаю")
            const handleScroll = () => {
                const currentScrollY = window.scrollY;

                // Если скроллим вниз и прокрутка больше 100px — скрываем
                if (currentScrollY > lastScrollY && currentScrollY > 100) {
                    setIsHidden(true);
                }
                // Если скроллим вверх — показываем
                else if (currentScrollY < 100) {
                    setIsHidden(false);
                }

                setLastScrollY(currentScrollY);
            };

            window.addEventListener("scroll", handleScroll, { passive: true });
            return () => window.removeEventListener("scroll", handleScroll);
        }, [lastScrollY]);
    }

    return (
        <div className="innerheader__wrap">
            <div style={isHidden ? { display: "flex" } : { display: "none" }} className="innerheader__content">
                <div className="container">
                    <section className="innerheader__commonblock">
                        <div className="innerheader__leftblock">
                            <a style={{ marginRight: "36px" }} href="#!"><img src={logo} alt="" /></a>
                            <ul className="innerheader_listbox">
                                <li><a href="#!">О компании</a></li>
                                <li><a href="#!">О продукции</a></li>
                                <li className={productsHidden ? "ih__catalogproducts active" : "ih__catalogproducts"} onClick={() => { setProductsHidden(!productsHidden), setsearchInputHidden(false) }}>Каталог товаров</li>
                            </ul>
                        </div>

                        <div className="inner__header__rightblock">
                            <a className="ih__rightblock__tel" href="tel:+">+7 (905) 543 23 45</a>
                            <div className="ih__rightblock__buttons__block">
                                <SearchButton Click={() => { setsearchInputHidden(!searchInputHidden), setProductsHidden(false) }} />
                                <BucketShopButton />
                                <UserButton />
                            </div>
                        </div>

                    </section>
                </div>
            </div>
            {location.pathname !== '/' && (
                <BreadCrumbs
                    isActive={productsHidden || searchInputHidden}
                    items={["Главная", "Товары"]}
                />
            )}
            <CatalogProducts isActive={isHidden && productsHidden} />
            <SearchInput isActive={isHidden && searchInputHidden} />
        </div>
    );
}

export default InnerHeader;