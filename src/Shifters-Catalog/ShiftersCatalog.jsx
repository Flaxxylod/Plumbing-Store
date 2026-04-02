import "./shiftersCatalog.css"
import InnerHeader from "../Landing/inner-header/InnerHeader";
import Footer from "../CommonElements/footer/Footer";
import ShifterHead from "./ShifterHead/ShifterHead";
import ShifterCatalogProducts from "./ShifterCatalogProducts/ShifterCatalogProducts";
import ByShifters from "./ByShifters/ByShifters";
import { useParams } from "react-router-dom";
const ShiftersCatalog = () => {
    const {Shifters} = useParams();
    console.log(Shifters)
    return (
        <div className="shifterscatalog__content">
            <nav>
                <InnerHeader Visibility={true} />
            </nav>
            <main>
                <ShifterHead />
                <ShifterCatalogProducts />
                <ByShifters />

            </main>
            <Footer />
        </div>
    );
}

export default ShiftersCatalog;