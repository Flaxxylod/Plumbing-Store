import "./bycompany.css"
import picture1 from "./../../../assets/Landing/main/Bycompany/Group2.svg"
import picture2 from "./../../../assets/Landing/main/Bycompany/Group36.svg"
const Bycompany = () => {
    return (
        <div className="bycompany__content">
            <div className="container">
                <div className="bycompany__common__block">
                    <div className="bycompany__left__block">
                        <section>
                            <span className="bycompany__text__left">
                                <p>
                                    Orange – немецкая торговая марка. Главный офис и основное производство расположены в Германии. Производим смесители,  душевые кабины,
                                    ванны и мебель для ванных комнат.
                                </p>
                                <p>
                                    Мы предлагаем качественную продукцию немецкого производства, которая полностью адаптирована к реалиям российскиого рынка.
                                </p>
                            </span>
                        </section>

                    </div>
                    <div className="bycompany__right__block">
                        <section>
                            <img src={picture1} alt="" />
                            <span className="bycompany__text__right">
                                <strong>Собственное производство</strong>
                                <p>
                                    Выский уровнень технологий позволяет гарантировать качество продукции на протяжении 10 лет
                                </p>
                            </span>
                        </section>
                        <section>
                            <img src={picture2} alt="" />
                            <span className="bycompany__text__right">
                                <strong >Экологичность и доступонсть</strong>
                                <p>
                                    Уникальный состав сплава делает продукцию Orange безопасной для потребителя
                                </p>
                            </span>
                        </section>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Bycompany;