import Nav from "../../CommonElements/Nav/Nav";
import { heroData } from "./HeroData";
import "./header.css";
import { useEffect, useState } from "react";
import { Transition } from "react-transition-group";

const Header = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {

            setTimeout(() => {
                setCurrentIndex(prev => (prev + 1) % heroData.length);

            }, 500);
        }, 5000);

        return () => clearInterval(interval);
    }, [heroData.length]);

    return (
        <header className="Header-content">
            <Nav />
            <div className="container">
                <div className="header__common__block">
                    <div className="header__left__block">
                        <h1 style={{ color: "var(--white-color)", marginBottom: "54px" }}>
                            Сантехника и мебель для ванной комнаты
                        </h1>
                        <ul className="combobox__block link">
                            <li className="combobox__element"><a href="/about">О компании</a></li>
                            <li className="combobox__element"><a href="/products">Продукции</a></li>
                            <li className="combobox__element"><a href="/catalog">Каталог товаров</a></li>
                        </ul>
                        <div className="header__slider">
                            <ul className="slider-dots">
                                {heroData.map((item, index) => (
                                    <li
                                        key={item.id}
                                        className={`${index === currentIndex ? 'active' : ''}`}
                                        onClick={() => {
                                            setCurrentIndex(index);

                                        }}

                                    />
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="header__right_Wrap">
                        <div className="header__right__block">
                            <Transition in={isAnimating} timeout={500}>
                                {state => (
                                    <img
                                        className={`HeroImg ${state}`}
                                        height="655"
                                        src={heroData[currentIndex].picture}


                                    />
                                )}
                            </Transition>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;