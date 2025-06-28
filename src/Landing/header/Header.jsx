import Nav from "../../CommonElements/Nav/Nav";
import Hero_1 from "./../../assets/Landing/Header/header-hero1.png"
import "./header.css"
const Header = () => {
    return (
        <header className="Header-content">

            <Nav />
            <div className="container">
                <div className="header__common__block">
                    <div className="header__left__block">
                        <h1 style={{ color: "var(--white-color)", marginBottom: "54px" }}>Сантехника и мебель для ванной комнаты</h1>
                        <ul className="combobox__block link">
                            <li className="combobox__element"><a href="!#">О компании</a></li>
                            <li className="combobox__element"><a href="!#">Продукции</a></li>
                            <li className="combobox__element"><a href="!#">Каталог товаров</a></li>
                        </ul>
                        <div className="header__slider">
                            <ul>
                                <li></li>
                                <li className="active"></li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                    <div className="header__right__block">
                        <img src={Hero_1} alt="" />
                    </div>
                </div>
            </div>
            
        </header>
    );
}

export default Header;