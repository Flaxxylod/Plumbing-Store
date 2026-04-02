import { useState } from "react";
import UserButton from "../userbutton/UserButton";
const MenuBar = ({ isActive = false }) => {

    const [OpenCatalog, SetOpenCatalog] = useState(false)

    if (isActive)
        return (
            <div className="lg:hidden h-[100vh] bg-[var(--inner-header)] p-[40px_0px_28px_15px] flex flex-col ">
                <ul className="flex flex-col gap-y-[20px] text-[var(--white-gray-color)] max-lg:text-[2rem]">
                    <li>О компании</li>
                    <li>О продукции</li>
                    <span onClick={() => SetOpenCatalog(!OpenCatalog)} className="ih__catalogproducts cursor-pointer">Каталог товаров</span>
                    {OpenCatalog ? (
                        <>
                            <ul className="[&>li]:text-[1rem]">
                                <li>Смесители</li>
                                <li>Мебель</li>
                                <li>Душевая программа</li>
                                <li>Аксессуары</li>
                            </ul>

                        </>
                    ) : null}

                </ul>

                <div className="flex ">
                    <UserButton />
                    <span className="text-[var(--gray-color)]"><a href="#tel+79055432345">+7 (905) 543 23 45</a></span>
                </div>
            </div>
        );


}

export default MenuBar;