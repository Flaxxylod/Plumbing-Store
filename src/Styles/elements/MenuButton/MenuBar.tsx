
import { Link } from "react-router-dom";
import UserButton from "../userbutton/UserButton";
import useMenuBar from "./useMenuBar";
interface MenuBarButton {
    isActive?: Boolean
}

const MenuBar = ({ isActive }: MenuBarButton) => {
    const MenuBar = useMenuBar(isActive)




    if (isActive)
        return (
            <div className="lg:hidden h-screen bg-[var(--inner-header)] p-[40px_15px_28px_15px] flex flex-col gap-y-[241px]">
                <ul className="flex flex-col gap-y-[20px] text-[var(--white-gray-color)] max-lg:text-[2rem]">
                    <li>О компании</li>
                    <li>О продукции</li>
                    <span onClick={() => MenuBar.SetOpenCatalog(!MenuBar.OpenCatalog)} className="ih__catalogproducts cursor-pointer">Каталог товаров</span>
                    {MenuBar.OpenCatalog ? (
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