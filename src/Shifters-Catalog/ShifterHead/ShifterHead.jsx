import "./shifterHead.css"

import ComboBox from '../../Styles/elements/Combobox/ComboBox';
const ShifterHead = () => {

    return (
        <div className="mt-[150px]">
            <div className="container">
                <section className="flex flex-col whitespace-nowrap">

                    <header><h2>Смесители</h2></header>
                    <div className="flex gap-x-[375px]">
                        <ul className="flex items-end gap-x-[24px] align-middle
                        leading-[28px] text-[var(--orange-color)">
                            <li><a href="#!">Для раковин</a></li>
                            <li><a href="#!">Для ванн</a></li>
                            <li><a href="#!">На борт ванн</a></li>
                            <li><a href="#!">Для душа</a></li>
                            <li><a href="#!">Для биде</a></li>
                            <li><a href="#!">Для кухни</a></li>
                        </ul>
                        <div className="flex">
                            <ComboBox />
                        </div>
                    </div>
                </section>


            </div>
        </div>
    );
}

export default ShifterHead;