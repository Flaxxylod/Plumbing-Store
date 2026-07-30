import "./innerHeader.css"
import logo from "./../../assets/Common/navigation/logo.svg"
import CatalogProducts from "./catalogProducts/CatalogProducts"
import SearchInput from "./SearchInput/SearchInput"
import BreadCrumbs from "./BreadCrumbs/BreadCrumbs"
import UserButton from "../../Styles/elements/userbutton/UserButton"
import MenuButton from "../../Styles/elements/MenuButton/MenuButton"
import BucketShopButton from "../../Styles/elements/bucketshopbutton/BucketShopButton"
import SearchButton from "../../Styles/elements/searchbutton/SearchButton"
import MenuBar from "../../Styles/elements/MenuButton/MenuBar"
import useInnerHeader from "./useInnerHeader"
const InnerHeader = () => {
    const inner = useInnerHeader()
    return (
        <>
            <nav ref={inner.navRef} id="nav" className="fixed top-0 left-0 right-0 z-20 w-full bg-white shadow-md ">
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
                                        className={`cursor-pointer ${inner.productsHidden ? "ih__catalogproducts active" : "ih__catalogproducts"}`}
                                        onClick={() => {
                                            inner.setProductsHidden(!inner.productsHidden)
                                            inner.setsearchInputHidden(false)
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
                                            inner.setsearchInputHidden(!inner.searchInputHidden)
                                            inner.setProductsHidden(false)
                                        }}
                                    />
                                    <BucketShopButton Price={0} />
                                    <UserButton />
                                </div>
                            </div>

                            {/* Кнопка меню для мобильных */}
                            <div className="lg:hidden flex">
                                <MenuButton onClick={() => inner.SetMenuBarHidden(!inner.MenubarHidden)} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Хлебные крошки */}
                {location.pathname !== '/' && !inner.MenubarHidden && (
                    <BreadCrumbs
                        isActive={inner.productsHidden || inner.searchInputHidden}
                        items={inner.Directory}
                    />
                )}

                {/* Выпадающие компоненты */}
                <CatalogProducts isActive={inner.productsHidden} />
                <SearchInput isActive={inner.searchInputHidden} />
                <MenuBar isActive={inner.MenubarHidden} />
            </nav>
            <div
                className="innerheader__spacer shrink-0"
                style={{ height: inner.spacerHeight }}
                aria-hidden="true"
            />
        </>
    )
}

export default InnerHeader