import "./shifterHead.css"

import ComboBox from '../../Styles/elements/Combobox/ComboBox';
const ShifterHead = () => {

    return (
        <div className="mt-[150px]">
            <div className="container">
                <div className="flex flex-col whitespace-nowrap">

                    <header><h2>Смесители</h2></header>
                    <div className="flex max-lg:flex-col justify-between">
                        <ul className="flex lg:flex-nowrap flex-wrap items-end gap-x-[24px] align-middle
                        leading-[28px] text-[var(--orange-color)]">
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
                </div>


            </div>
        </div>
    );
}

export default ShifterHead;