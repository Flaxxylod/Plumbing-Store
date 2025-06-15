import "./main.css"
import Bycompany from "./Bycompany/Bycompany";
import Ourproducts from "./Ourproducts/Ourproducts";
const Main = () => {
    return (
        <main className="main__content">
            <Bycompany/>
            <Ourproducts/>
        </main>
    );
}

export default Main;