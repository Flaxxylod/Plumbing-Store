import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UserButton from "../userbutton/UserButton";
const MenuBar = ({ isActive = false }) => {

    const [OpenCatalog, SetOpenCatalog] = useState(false)

    useEffect(() => {

        if (isActive) {
            document.body.style.overflow = 'hidden';
        }
        else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        }
    }, [isActive])



    if (isActive)
        return (
            <div className="lg:hidden h-screen bg-[var(--inner-header)] p-[40px_15px_28px_15px] flex flex-col gap-y-[241px]">
                <ul className="flex flex-col gap-y-[20px] text-[var(--white-gray-color)] max-lg:text-[2rem]">
                    <li>О компании</li>
                    <li>О продукции</li>
                    <span onClick={() => SetOpenCatalog(!OpenCatalog)} className="ih__catalogproducts cursor-pointer">Каталог товаров</span>
                    {OpenCatalog ? (
                        <>
                            <ul className="[&>li]:text-[1rem]">
                                <Link to={"/catalog/Shifters"}><li>Смесители</li></Link>
                                <li>Мебель</li>
                                <li>Душевая программа</li>
                                <li>Аксессуары</li>
                            </ul>

                        </>
                    ) : null}

                </ul>

                <div className="flex justify-between items-center ">
                    <span className="text-[var(--gray-color)]"><a href="#tel+79055432345">+7 (905) 543 23 45</a></span>
                    <UserButton />
                </div>
            </div>
        );


}

export default MenuBar;