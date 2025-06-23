import "./advantages.css"
import picture1 from "./../../../assets/Landing/main/Ouradvantages/Picture1.svg"
import AdvantagesCards from "./advantagesCards/AdvantagesCards";
const Advantages = () => {
    return (
        <section className="advantages__content">
            <div className="container">
                <header><h2>Наши преимущества</h2></header>
                <AdvantagesCards />
            </div>

        </section>
    );
}

export default Advantages;