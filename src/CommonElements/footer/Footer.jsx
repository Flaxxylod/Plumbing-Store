import logo from "./../../assets/Common/navigation/logo.svg"
import social from "./../../assets/Landing/footer/instagram.svg"
import "./footer.css"
import AnchorRef from "./Anchorref/AnchorRef"
const Footer = () => {
    return (
        <div className="footer__content">
            <div className="container">
                <section className="footer__commonblock">
                    <img src={logo} alt="" />

                    <ul className="footer__firstlist link">
                        <li>О компании</li>
                        <li>Сотрудничество</li>
                        <li>Покупателям</li>
                    </ul>

                    <ul className="footer__secondlist link">
                        <li>Где купить</li>
                        <li>Сервисное обслуживание</li>
                        <li>Контакты</li>
                    </ul>

                    <address className="contact__data">
                        <strong style={{ fontSize: "16px" }} className="white">Есть вопросы?</strong>
                        <a className="footer__ref__mail" href="mailto:hello@orangemixers.ru">hello@orangemixers.ru</a>
                        <a className="footer__ref__tel" href="tel:+74955432345">+7 (495) 543 23 45</a>
                    </address>

                    <div className="contact__social">
                        <strong style={{ fontSize: "16px" }} className="white">Мы в соцсетях</strong>
                        <div className="footer__ref__social"><a href="#!"><img src={social} alt="" /></a></div>

                    </div>
                </section>

                <div className="footer__other">
                    <p>© 2019 Orange Mixers</p>
                    <button>Разработано в bitberry.ru</button>
                </div>
            </div>
            <AnchorRef/>
        </div>
    );
}

export default Footer;