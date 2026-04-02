import "./innerHeader.css"
import logo from "./../../assets/Common/navigation/logo.svg"
import SearchButton from "../../Styles/elements/searchbutton/SearchButton"
import BucketShopButton from "../../Styles/elements/bucketshopbutton/BucketShopButton"
import UserButton from "../../Styles/elements/userbutton/UserButton"
import { useContext, useState } from "react"
import CatalogProducts from "./catalogProducts/CatalogProducts"
import SearchInput from "./SearchInput/SearchInput"
import { useLocation } from "react-router-dom"
import BreadCrumbs from "./BreadCrumbs/BreadCrumbs"
import { AppContext } from './../../Context'
import MenuButton from "../../Styles/elements/MenuButton/MenuButton"
import MenuBar from "../../Styles/elements/MenuButton/MenuBar"

const InnerHeader = () => {
    const { Directory } = useContext(AppContext)
    const location = useLocation()
    const [MenubarHidden, SetMenuBarHidden] = useState(false)
    const [isHidden, setIsHidden] = useState(true)
    const [productsHidden, setProductsHidden] = useState(false)
    const [searchInputHidden, setsearchInputHidden] = useState(false)

    return (
        <div className="sticky top-0 z-20 w-full bg-white shadow-md">
            <div
                style={isHidden ? { display: "flex" } : { display: "none" }}
                className="innerheader__content w-full"
            >
                <div className="container mx-auto px-4 w-full max-w-[1180px]">
                    <div className="flex items-center justify-between gap-4">
                        {/* Левая часть с лого и навигацией */}
                        <div className="flex items-center shrink-0">
                            <a className="mr-[36px] shrink-0" href="#!">
                                <img src={logo} alt="" className="h-8 w-auto" />
                            </a>
                            <ul className="innerheader_listbox lg:flex hidden gap-6">
                                <li><a href="#!">О компании</a></li>
                                <li><a href="#!">О продукции</a></li>
                                <li
                                    className={`cursor-pointer ${productsHidden ? "ih__catalogproducts active" : "ih__catalogproducts"}`}
                                    onClick={() => {
                                        setProductsHidden(!productsHidden)
                                        setsearchInputHidden(false)
                                    }}
                                >
                                    Каталог товаров
                                </li>
                            </ul>
                        </div>

                        {/* Правая часть для десктопа */}
                        <div className="lg:flex hidden items-center gap-6">
                            <a className="ih__rightblock__tel whitespace-nowrap" href="tel:+">
                                +7 (905) 543 23 45
                            </a>
                            <div className="flex gap-4">
                                <SearchButton
                                    Click={() => {
                                        setsearchInputHidden(!searchInputHidden)
                                        setProductsHidden(false)
                                    }}
                                />
                                <BucketShopButton />
                                <UserButton />
                            </div>
                        </div>

                        {/* Кнопка меню для мобильных */}
                        <div className="lg:hidden flex">
                            <MenuButton Click={() => SetMenuBarHidden(!MenubarHidden)} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Хлебные крошки */}
            {location.pathname !== '/' && (
                <BreadCrumbs
                    isActive={productsHidden || searchInputHidden}
                    items={Directory}
                />
            )}

            {/* Выпадающие компоненты */}
            <CatalogProducts isActive={isHidden && productsHidden} />
            <SearchInput isActive={isHidden && searchInputHidden} />
            <MenuBar isActive={MenubarHidden} />
        </div>
    )
}

export default InnerHeader