

const PromotionalCard = ({ discount, picture, title, price, discountPrice, onClick }) => {


    return (

        <article className="relative flex cursor-pointer min-w-[262px] max-w-[300px] min-h-[354px] max-md:max-w-[262px] max-md:max-h-[347px]" onClick={onClick}>
            {discount && <div className="absolute right-[12px] top-[12px]  py-[8px] px-[11px] bg-[var(--orange-color)]"><span className="text-[var(--white-color)]">{discount + "%"}</span></div>}
            <div className="py-[24px] px-[20px] flex flex-col flex-grow-[1] border border-solid border-[#ECECEC]">

                <div className="PromoCard__picture">
                    <img src={picture} alt="" />
                </div>
                <div className="mt-[20px] text-[0.875rem]
                    leading-[1.375] max-w-[260px] flex-grow-[1]
                    ">
                    <p>
                        {title}
                    </p>
                </div>
                <div className="flex items-center gap-[9px] mt-4 ">
                    <strong className="font-['PT_Sans']" style={{ fontSize: "20px" }}>
                        {price + "₽"}
                    </strong>
                    {discountPrice && <p className="text-[1rem] leading-[1] text-[#A5A5A5] line-through">{discountPrice + "₽"}</p>}
                </div>
            </div>
        </article>

    );
}

export default PromotionalCard;