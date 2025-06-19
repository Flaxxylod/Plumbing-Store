import "./main.css"
import Bycompany from "./Bycompany/Bycompany";
import Ourproducts from "./Ourproducts/Ourproducts";
import Collections from "./Collections/Collections";
const Main = () => {
    return (
        <main className="main__content">
            <Bycompany/>
            <Ourproducts/>
            <Collections/>
        </main>
    );
}

export default Main;