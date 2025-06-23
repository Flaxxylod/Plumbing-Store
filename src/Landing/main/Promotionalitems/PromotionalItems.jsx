import "./promotionalItems.css"
import PromotionalCard from "./PromotionalCard/PromotionalCard";
const PromotionalItems = () => {
    return (
        <div className="PromotionalItems__content">
            <div className="container">
            <header>
                <h2>Акционные товары</h2>
            </header>

            <section className="Promotional__products">
                <PromotionalCard discount={"15%"}/>
            </section>
            </div>
        </div>
    );
}

export default PromotionalItems;