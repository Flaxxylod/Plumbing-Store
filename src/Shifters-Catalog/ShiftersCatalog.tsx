
import InnerHeader from "../Landing/inner-header/InnerHeader";
import Footer from "../CommonElements/footer/Footer";
import ShifterHead from "./ShifterHead/ShifterHead";
import ShifterCatalogProducts from "./ShifterCatalogProducts/ShifterCatalogProducts";
import ByShifters from "./ByShifters/ByShifters";
import Button from "../Styles/elements/Button/Button";

import UI_Store from "../Store/UI_Store";
const ShiftersCatalog = () => {

    const MobileFilter_IsActive: () => void = UI_Store((state) => state.Activating_Filter)
    return (
        <div className="">
            <nav>
                <InnerHeader />
            </nav>
            <main className="relative">
                <ShifterHead />
                <ShifterCatalogProducts />
                <div className="sticky flex justify-center top-0 bottom-0  lg:hidden block">
                    <Button type={"Rounded"} onClick={MobileFilter_IsActive}>Фильтры</Button>
                </div>

                <ByShifters />

            </main>
            <Footer />
        </div>
    );
}

export default ShiftersCatalog;