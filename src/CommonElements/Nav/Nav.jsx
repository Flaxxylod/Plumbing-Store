
import logo from "./../../assets/Common/navigation/Logo.svg"
import phone from "./../../assets/Common/navigation/icon/iphone.svg"
import SearchButton from "../../Styles/elements/searchbutton/SearchButton"
import MenuButton from "../../Styles/elements/MenuButton/MenuButton"
import UI_store from "./../../Store/UI_Store"
import { useState } from "react"
const Nav = () => {
    const [OpenSearchInput, SetOpenSearchInput] = useState(false)
    const OpeningSearchInput = UI_store((state) => state.OpeningSearchInput)
    return (
        <nav id="nav" className="text-[var(--gray-color)] mx-[16px]">
            <div className="!flex justify-center">

                <div className="lg:max-w-[1440px] lg:w-full w-full max-w-[360px]">
                    <div className="lg:px-[40px] lg:pt-[37px] lg:pb-[38px] py-[12px]  flex justify-between items-center lg:max-w-[1440px] ">
                        <div style={{ display: "flex", alignItems: "center", columnGap: "26px" }}>
                            <img src={logo} className="max-w-[118px] lg:max-w-[126px]" alt="" />
                            <span className="hidden lg:block">Разработано в Германии. Сделано в россии.</span>
                        </div>

                        <div className="flex  gap-x-[32px] items-center">
                            <div className="lg:flex hidden  gap-x-[9px]">
                                <img className="max-w-[20px]" src={phone} alt="" />
                                <a href="tel:+7-905-543-23-45">+7 (905) 543 23 45</a>
                            </div>
                            <div className="flex gap-x-[12px]">
                                <SearchButton Click={OpeningSearchInput} />
                                <MenuButton />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <span className="block lg:hidden">Разработано в Германии. Сделано в россии.</span>
        </nav>
    );
}

export default Nav;