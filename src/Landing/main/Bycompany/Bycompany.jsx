import "./bycompany.css"
import picture1 from "./../../../assets/Landing/main/Bycompany/Group2.svg"
import picture2 from "./../../../assets/Landing/main/Bycompany/Group36.svg"
const Bycompany = () => {
    return (
        <div className="bycompany__content pt-[80px] pb-[99px]
        ">
            <div className="container">
                <div className="flex lg:flex-row md:gap-y-[40px] lg:gap-y-0 flex-col h-full space-between w-full justify-between">
                    <div className="w-full lg:max-w-[648px] max-md:max-w-[328px] flex flex-col">
                        <div className="leading-[2] w-full flex flex-col items-center gap-y-[24px] md:text-[1rem]">

                            <p className="">
                                <span className="text-[var(--orange-color)]">Orange</span> – немецкая торговая марка. Главный офис и основное производство расположены в Германии. Производим смесители,  душевые кабины,
                                ванны и мебель для ванных комнат.
                            </p>
                            <p>
                                Мы предлагаем качественную продукцию немецкого производства, которая полностью адаптирована к реалиям российскиого рынка.
                            </p>
                        </div>

                    </div>
                    <div className="h-full min-w-[300px] w-full flex flex-col gap-y-[32px] max-w-[407px]">
                        <div className="flex gap-x-[25px] ">
                            <img className="svg" src={picture2} alt="" />
                            <div className="flex flex-col text-[#7B7B7B]">
                                <span className="highline text-[var(--black-color)]">Cобственное производство</span>
                                <p className="text-[0.9375rem]  mt-[4px] max-w-[290px]">Выский уровнень технологий позволяет гарантировать качество продукции на протяжении 10 лет</p>
                            </div>
                        </div>

                        <div className="flex w-full max-w-[407px] gap-x-[25px] mt-[32px] text-[#7B7B7B]">
                            <img className="svg" src={picture1} alt="" />
                            <div className="flex flex-col">
                                <span className="highline text-[var(--black-color)]">Экологичность и доступность</span>
                                <p className="text-[0.9375rem]  mt-[4px] max-w-[290px]">Уникальный состав сплава делает продукцию Orange безопасной для потребителя</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
}

export default Bycompany;