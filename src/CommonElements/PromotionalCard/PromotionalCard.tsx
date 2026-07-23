


interface PromotionalCardProps {
    discount?: number | undefined,

    price: number,
    picture: string,
    title: string,
    onClick?: () => void
    testid?: string | undefined

}

const PromotionalCard = ({ discount, picture, title, price, onClick, testid }: PromotionalCardProps) => {


    return (

        <article data-testid={testid} className="relative flex  cursor-pointer min-w-[262px] max-w-[300px] lg:min-h-[354px] max-md:max-w-[360px]" onClick={onClick}>
            {discount && <div className="absolute max-md:hidden right-[12px] top-[12px] rounded-xs  py-[8px] px-[11px] bg-[var(--orange-color)]"><span className="text-[var(--white-color)]">{discount + "%"}</span></div>}
            <div className="py-[24px] px-[20px] flex md:flex-col flex-grow-[1] max-md:items-center border border-solid border-[#ECECEC]">

                <div className="max-md:relative max-md:mr-[12px]">
                    {discount && <div className="absolute md:hidden rounded-xs py-[4px] px-[6px] font-bold bg-[var(--orange-color)]"><span className="text-[var(--white-color)] text-[1rem]">{discount + "%"}</span></div>}

                    <img src={picture} alt="" className="" />
                </div>
                <div className="mt-[20px] text-[0.875rem]
                    leading-[1.375] max-w-[260px] flex-grow-[1] 
                    ">
                    <p>
                        {title}
                    </p>
                    <div className="flex  items-center gap-[9px] mt-4 ">
                        <strong className="font-['PT_Sans']" style={{ fontSize: "20px" }}>
                            {price + "₽"}
                        </strong>
                        {discount && <p className="text-[1rem] leading-[1] text-[#A5A5A5] line-through">{price - (price * (discount / 100)) + "₽"}</p>}
                    </div>
                </div>



            </div>
        </article>

    );
}

export default PromotionalCard;