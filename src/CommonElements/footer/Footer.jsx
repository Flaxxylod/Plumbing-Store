import logo from "./../../assets/Common/navigation/logo.svg"
import social from "./../../assets/Landing/footer/instagram.svg"
import "./footer.css"
import AnchorRef from "./Anchorref/AnchorRef"
const Footer = () => {
    return (
        <div className="pt-[60px] bg-[#202122] text-[var(--white-gray-color)] text-[1rem]">
            <div className="flex justify-center">
                <div className="container ">
                    <div className="grid md:grid-flow-col   items-start justify-evenly max-md:gap-y-[65px]">
                        <img className="" src={logo} alt="" />
                        <div className="flex gap-x-[32px]">
                            <ul className=" link flex flex-col gap-y-[20px]">
                                <li>О компании</li>
                                <li>Сотрудничество</li>
                                <li>Покупателям</li>
                            </ul>

                            <ul className="link flex flex-col gap-y-[20px]">
                                <li>Где купить</li>
                                <li>Сервисное обслуживание</li>
                                <li>Контакты</li>
                            </ul>
                        </div>
                        <div>
                            <address className=" flex flex-col gap-y-[20px] align-middle">
                                <strong style={{ fontSize: "16px" }} className="white">Есть вопросы?</strong>
                                <a className="footer__ref__mail inline-flex items-center" href="mailto:hello@orangemixers.ru">hello@orangemixers.ru</a>
                                <a className="footer__ref__tel inline-flex items-center" href="tel:+74955432345">+7 (495) 543 23 45</a>
                            </address>
                        </div>
                        <div>
                            <div className="contact__social">
                                <strong style={{ fontSize: "16px" }} className="white">Мы в соцсетях</strong>
                                <div className="mt-[15px]"><a href="#!"><img src={social} alt="" /></a></div>

                            </div>
                        </div>
                    </div>

                    <div className="footer__other flex items-center gap-x-[24px] mt-[79px] text-[#747474] justify-end">
                        <p>© 2019 Orange Mixers</p>
                        <button >Разработано в bitberry.ru</button>
                    </div>
                </div>
            </div>
            <AnchorRef />
        </div>
    );
}

export default Footer;