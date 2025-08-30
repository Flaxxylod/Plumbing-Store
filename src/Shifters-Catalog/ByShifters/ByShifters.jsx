import "./byShifters.css"
import CardProduct from "../../CommonElements/CardProduct/CardProduct";
import Modal from "../../CommonElements/Modal/Modal";
import { useState } from "react";

const ByShifters = () => {
    const [isModalOpen, setIsModalOpen] = useState(true)
    return (
        <div className="byshifters__content">
            <div className="container">
                <section >
                    <header>
                        <h2>Cместители</h2>
                    </header>
                    <div className="byshifters__commonblock">


                        <div className="byshifters__leftblock">
                            <p>
                                Немецкие смесители <span style={{ color: "#FE5B00" }}>Orange</span> — превосходный выбор для тех, кто ценит качество и надежность. У нас представлены удобные, практичные и эргономичные модели для раковин, биде, ванн, душа и кухни. Основа коллекции — смесители с никель-хромовым покрытием, керамическими картриджами и силиконовыми аэраторами.
                            </p>

                            <div className="byshifters__listblock">
                                <h4>Преимущества сантехнического оборудования:</h4>
                                <ul className="byshifters__Advantages__list">
                                    <li>
                                        длительный срок гарантии (до 10 лет на отсутствие протечек в корпусе, 2–3 года на все виды картриджей);
                                    </li>
                                    <li>
                                        лаконичный дизайн, который подойдет для любого помещения;
                                    </li>
                                    <li>
                                        абсолютная безопасность используемых материалов, состав которых позволяет подавать чистую воду;
                                    </li>
                                    <li>
                                        мягкий напор воды и экономный расход, который обеспечивает аэратор.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="byshifters__rightblock">
                            <p>Все смесители Orange просты в обслуживании, устойчивы к образованию и отложению налета. При производстве происходит двойной контроль качества для всей линейки, что исключает появление брака. Выбирая <span style={{ color: "#FE5B00" }}>продукцию Orange</span>, вы можете быть на 100 % уверенными в их исправности и долговечности.</p>
                        </div>
                    </div>

                </section>


            </div>
        </div>
    );
}

export default ByShifters;