import "./advantagesCard.css"
import { AdvantagesCardData } from "./advantagesData";
const AdvantagesCards = () => {

    const Cards = AdvantagesCardData.map(obj => (

        <div className="mt-[54px] flex flex-col min-h-[100%]">
            <div className="flex flex-col items-center h-[100%]">
                <img className="h-[90px]" src={obj.picture} alt="" />
                <div className="mt-[24px] m-h-[60px] flex items-center text-center">
                    <h3 className="black">{obj.subheader}</h3>
                </div>
                <div className="advantage__text">
                    <p className="text-[0.975rem] m-[0px]">
                        {obj.text}
                    </p>
                </div>
            </div>
        </div>

    ))
    return (
        <div className="flex justify-center gap-x-[119px] lg:items-start max-md:flex-col">
            {Cards}
        </div>
    );
}

export default AdvantagesCards;