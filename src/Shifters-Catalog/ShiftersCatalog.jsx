
import InnerHeader from "../Landing/inner-header/InnerHeader";
import Footer from "../CommonElements/footer/Footer";
import ShifterHead from "./ShifterHead/ShifterHead";
import ShifterCatalogProducts from "./ShifterCatalogProducts/ShifterCatalogProducts";
import ByShifters from "./ByShifters/ByShifters";
import { useParams } from "react-router-dom";
const ShiftersCatalog = () => {
    const { Shifters } = useParams();

    return (
        <div className="">
            <nav>
                <InnerHeader Visibility={true} />
            </nav>
            <main className="relative">
                <ShifterHead />
                <ShifterCatalogProducts />
                <div className="sticky flex justify-center top-0 bottom-0  lg:hidden block">
                    <button className="orange rounded-[30px]! px-[24px]!">Фильтры</button>
                </div>

                <ByShifters />

            </main>
            <Footer />
        </div>
    );
}

export default ShiftersCatalog;