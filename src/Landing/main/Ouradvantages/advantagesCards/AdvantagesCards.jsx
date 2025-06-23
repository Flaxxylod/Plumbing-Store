import "./advantagesCard.css"
import { AdvantagesCardData } from "./advantagesData";
const AdvantagesCards = () => {

    const Cards = AdvantagesCardData.map(obj => (

        <div className="advantages__commonblock">
            <div className="advantage__block">
                <img src={obj.picture} alt="" />
                <div className="advantages__headerblock">
                    <h3 className="black">{obj.subheader}</h3>
                </div>
                <div className="advantage__text">
                    <p>
                        {obj.text}
                    </p>
                </div>
            </div>
        </div>

    ))
    return (
        <div className="AdvantagesCard__content">
            {Cards}
        </div>
    );
}

export default AdvantagesCards;