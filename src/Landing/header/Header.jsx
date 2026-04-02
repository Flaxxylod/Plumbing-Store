import { Link } from "react-router-dom";

import { heroData } from "./HeroData";
import "./header.css";
import UI_Store from "../../Store/UI_Store"
import { useEffect, useState } from "react";
import SearchInput from "../inner-header/SearchInput/SearchInput";
import { Transition } from "react-transition-group";

const Header = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(true);
    const OpenSearchInput = UI_Store((state) => state.OpenSearchInput)

    useEffect(() => {
        const interval = setInterval(() => {

            setTimeout(() => {
                setCurrentIndex(prev => (prev + 1) % heroData.length);

            }, 500);
        }, 5000);

        return () => clearInterval(interval);
    }, [heroData.length]);

    return (


        <header className="max-md:relative max-md:z-10 Header-content  ">


            <div className="container">

                <SearchInput isActive={OpenSearchInput} />

                <section className=" flex justify-between pt-[188px] ">
                    <div className=" w-full h-full  lg:min-w-[592px] ">
                        <div className="lg:max-w-[592px] md:max-w-[528px] max-md:max-w-[528px]">
                            <h1 className=" text-[var(--white-color)] ">
                                Сантехника и мебель для ванной комнаты
                            </h1>
                        </div>


                        <div className=" max-md:flex max-md:flex-col lg:block h-full w-full  mt-[54px] ">
                            <div className="lg:block md:flex md:max-lg:justify-between lg:w-auto ">
                                <ul className="text-gray-400 lg:text-[1.25rem] max-md:text-[1rem] flex flex-col  min-w-[150px] max-w-[328px] w-full gap-y-[24px]  link flex-col lg:space-y-[24px] space-y-[16px]">
                                    <li className="combobox__element"><Link to="/products">Продукции</Link></li>
                                    <li className="combobox__element"><Link to="/catalog">Каталог товаров</Link></li>
                                    <li className="combobox__element"><Link to="/about">О компании</Link></li>
                                </ul>

                                <div className="max-md:absolute  max-md:bottom-0 max-md:left-[200px] max-md:-z-1  lg:hidden md:flex flex-col justify-end ">
                                    <div className="flex flex-col justify-end  h-full max-md:max-w-[248px] max-md:max-h-[292px] lg:max-w-[564px] md:max-h-[444px] md:max-w-[444px]">
                                        <Transition in={isAnimating} timeout={500}>
                                            {state => (
                                                <img
                                                    className={`HeroImg ${state} object-cover min-h-[290px] min-w-[248px]`}

                                                    src={heroData[currentIndex].picture}


                                                />
                                            )}
                                        </Transition>
                                    </div>
                                </div>
                            </div>

                            <div className="header__slider">
                                <ul className="flex gap-x-[10px]  max-md:mt-[139px] lg:mt-[164px]">
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
                    </div>

                    <div className="hidden lg:flex flex-col justify-end">
                        <div className="flex flex-col justify-end  h-full max-md:max-w-[242px] max-md:max-h-[292px] lg:max-w-[564px] lg:max-h-[552px]">
                            <Transition in={isAnimating} timeout={500}>
                                {state => (
                                    <img
                                        className={`HeroImg ${state} object-cover`}

                                        src={heroData[currentIndex].picture}


                                    />
                                )}
                            </Transition>
                        </div>
                    </div>


                </section>
            </div>

        </header>

    );
}

export default Header;