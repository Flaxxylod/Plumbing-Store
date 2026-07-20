import { AdvantagesCardData } from "./advantagesData";

type AdvantagesCardDataType = {
    type?: string
}

const AdvantagesCards = ({ type }: AdvantagesCardDataType) => {
    const Cards = AdvantagesCardData.map(obj => {

        const title = <h3 className="black">{obj.subheader}</h3>;
        const description = (
            <p className="text-[#7B7B7B] leading-5 text-[0.875rem] m-0">
                {obj.text}
            </p>
        );
        switch (type) {
            case "column":
                return (
                    <div className="flex justify-center gap-x-[119px] flex-col gap-y-[32px]">
                        < div className="flex flex-row gap-[14px] items-start  w-full" >
                            <img className="w-[48px] max-h-[90px] flex-shrink-0" src={obj.picture} alt="" />
                            <div className="flex flex-col items-start flex-1">
                                {title}
                                <div className="mt-3 max-w-[260px]">{description}</div>
                            </div>
                        </div >
                    </div>
                )
            default:
                return (
                    <div className="flex justify-center gap-x-[119px] lg:items-start max-md:flex-col">
                        <div key={obj.id} className="mt-[54px] flex flex-col w-full">

                            {/* ДЕСКТОП */}
                            <div className="hidden lg:flex flex-col items-center w-full">
                                <img className="max-h-[90px]" src={obj.picture} alt="" />
                                <div className="mt-[24px] text-center">{title}</div>
                                <div className="mt-3 max-w-[200px] text-center flex-1">{description}</div>
                            </div>

                            {/* МОБИЛКА */}
                            <div className="lg:hidden flex flex-row gap-[14px] items-start w-full">
                                <img className="w-[48px] max-h-[90px] flex-shrink-0" src={obj.picture} alt="" />
                                <div className="flex flex-col flex-1">
                                    {title}
                                    <div className="mt-3 max-w-[260px]">{description}</div>
                                </div>
                            </div>

                        </div>
                    </div>

                );

        }


    });

    return (
        <div className={`${type === "column" ? "flex flex-col gap-y-[32px]" : ""}`}>
            <>{Cards}</>
        </div>


    );
};

export default AdvantagesCards