import Button from "../../Styles/elements/Button/Button";
import AdvantagesCards from "../../Landing/main/Ouradvantages/advantagesCards/AdvantagesCards";
import "./productCard_Info.css"
const ProductCard_Info = () => {
    return (
        <div className="flex flex-col max-w-[482px] p-[28px_32px] border-[var(--orange-color)] border-[2px]">
            <h3 className="tracking-normal!">
                <span className="w-full text-[#424242] font-[400] text-[20px]">Orange Fenix M31-021cr - двухвентильный смеситель для раковины без донного клапана (подходит донный клапан Orange X1-004 cr)</span>
            </h3>

            <div className="relative flex flex-col">
                <strong>
                    4 480,00 ₽ {/* Потом сделать передачу через API*/}
                </strong>
                <a href="!#"><span className="text-[var(--orange-color)] text-[14px] font-bold">Доставка в <span className="underline decoration-[var(--orange-color)]">Москву</span> – 110 ₽  </span></a>
                <Button styling="max-w-[219px] mt-[16px]">В корзину</Button>
                <div className="h-px w-full bg-[#ECECEC] mt-[24px] mb-[28px]"></div>
                <AdvantagesCards type="column" />
            </div>
        </div>
    );
}

export default ProductCard_Info;