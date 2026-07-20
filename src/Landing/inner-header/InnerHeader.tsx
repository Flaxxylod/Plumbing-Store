import "./innerHeader.css"
import logo from "./../../assets/Common/navigation/logo.svg"
import { useContext, useLayoutEffect, useRef, useState } from "react"
import CatalogProducts from "./catalogProducts/CatalogProducts"
import SearchInput from "./SearchInput/SearchInput"
import { useLocation } from "react-router-dom"
import BreadCrumbs from "./BreadCrumbs/BreadCrumbs"
import { AppContext } from '../../Context'
import UserButton from "../../Styles/elements/userbutton/UserButton"
import MenuButton from "../../Styles/elements/MenuButton/MenuButton"
import BucketShopButton from "../../Styles/elements/bucketshopbutton/BucketShopButton"
import SearchButton from "../../Styles/elements/searchbutton/SearchButton"
import MenuBar from "../../Styles/elements/MenuButton/MenuBar"

const InnerHeader = () => {
    const { Directory } = useContext(AppContext)
    const location = useLocation()
    const navRef = useRef<HTMLElement>(null)
    const [spacerHeight, setSpacerHeight] = useState(0)
    const [MenubarHidden, SetMenuBarHidden] = useState<Boolean>(false)

    const [productsHidden, setProductsHidden] = useState<Boolean>(false)
    const [searchInputHidden, setsearchInputHidden] = useState<Boolean>(false)

    useLayoutEffect(() => {
        const nav = navRef.current
        if (!nav) return

        const updateHeight = () => setSpacerHeight(nav.offsetHeight)
        updateHeight()

        if (typeof ResizeObserver !== "undefined") {
            const observer = new ResizeObserver(updateHeight)
            observer.observe(nav)
            return () => observer.disconnect()
        }

        window.addEventListener("resize", updateHeight)
        return () => window.removeEventListener("resize", updateHeight)
    }, [location.pathname, MenubarHidden, productsHidden, searchInputHidden, Directory])

    return (
        <>
        <nav ref={navRef} id="nav" className="fixed top-0 left-0 right-0 z-20 w-full bg-white shadow-md ">
            <div

                className="innerheader__content w-full"
            >
                <div className="container mx-auto px-4 w-full max-w-[1180px]">
                    <div className="flex items-center justify-between gap-4">
                        {/* Левая часть с лого и навигацией */}
                        <div className="flex items-center shrink-0">
                            <a className="mr-[36px] shrink-0" href="#!">
                                <img src={logo} alt="" className="h-8 w-auto" />
                            </a>
                            <ul className="text-[var(--white-gray-color)] lg:flex hidden gap-6">
                                <li role="button"><a href="#!">О компании</a></li>
                                <li role="button"><a href="#!">О продукции</a></li>
                                <li role="button"
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
                                    onClick={() => {
                                        setsearchInputHidden(!searchInputHidden)
                                        setProductsHidden(false)
                                    }}
                                />
                                <BucketShopButton Price={0} />
                                <UserButton />
                            </div>
                        </div>

                        {/* Кнопка меню для мобильных */}
                        <div className="lg:hidden flex">
                            <MenuButton onClick={() => SetMenuBarHidden(!MenubarHidden)} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Хлебные крошки */}
            {location.pathname !== '/' && !MenubarHidden && (
                <BreadCrumbs
                    isActive={productsHidden || searchInputHidden}
                    items={Directory}
                />
            )}

            {/* Выпадающие компоненты */}
            <CatalogProducts isActive={productsHidden} />
            <SearchInput isActive={searchInputHidden} />
            <MenuBar isActive={MenubarHidden} />
        </nav>
        <div
            className="innerheader__spacer shrink-0"
            style={{ height: spacerHeight }}
            aria-hidden="true"
        />
        </>
    )
}

export default InnerHeader