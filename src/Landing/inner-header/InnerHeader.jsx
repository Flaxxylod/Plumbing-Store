import "./innerHeader.css"
import logo from "./../../assets/Common/navigation/logo.svg"
import SearchButton from "../../Styles/elements/searchbutton/SearchButton"
import BucketShopButton from "../../Styles/elements/bucketshopbutton/BucketShopButton"
import UserButton from "../../Styles/elements/userbutton/UserButton"
import { useState } from "react"
import { useEffect } from "react"
const InnerHeader = () => {

    const [isHidden, setIsHidden] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    useEffect(() => {
        console.log("Работаю")
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Если скроллим вниз и прокрутка больше 100px — скрываем
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsHidden(true);
            }
            // Если скроллим вверх — показываем
            else if(currentScrollY < 100) {
                setIsHidden(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);
    return (
        <div style={isHidden ? { display: "flex" } : { display: "none" }} className="innerheader__content">
            <div className="container">
                <section className="innerheader__commonblock">
                    <div className="innerheader__leftblock">
                        <a style={{ marginRight: "36px" }} href="#!"><img src={logo} alt="" /></a>
                        <ul className="innerheader_listbox">
                            <li><a href="#!">О компании</a></li>
                            <li><a href="#!">О продукции</a></li>
                            <li className="ih__catalogproducts">Каталог товаров</li>
                        </ul>
                    </div>

                    <div className="inner__header__rightblock">
                        <a className="ih__rightblock__tel" href="tel:+">+7 (905) 543 23 45</a>
                        <div className="ih__rightblock__buttons__block">
                            <SearchButton />
                            <BucketShopButton />
                            <UserButton />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default InnerHeader;