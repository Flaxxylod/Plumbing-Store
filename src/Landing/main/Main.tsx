import "./main.css"
import Bycompany from "./Bycompany/Bycompany";
import Ourproducts from "../../CommonElements/Ourproducts/Ourproducts";
import Collections from "./Collections/Collections";
import PromotionalItems from "./Promotionalitems/PromotionalItems";
import Advantages from "./Ouradvantages/Advantages";
import EndBlock from "./Endblock/EndBlock";
const Main = () => {
    return (
        <main className="main__content">
            <Bycompany />
            <Ourproducts>Наша продукция</Ourproducts>
            <Collections />
            <PromotionalItems />
            <Advantages />
            <EndBlock />
        </main>
    );
}

export default Main;