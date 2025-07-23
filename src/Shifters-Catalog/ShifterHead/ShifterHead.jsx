import "./shifterHead.css"

import ComboBox from '../../Styles/elements/Combobox/ComboBox';
const ShifterHead = () => {
    
    return (
        <div className="shifterhead__content">
            <div className="container">
                <section className="shifterhead__commonblock">

                    <header><h2>Смесители</h2></header>
                    <div className="shifterhead__leftblock">
                        <ul>
                            <li><a href="#!">Для раковин</a></li>
                            <li><a href="#!">Для ванн</a></li>
                            <li><a href="#!">На борт ванн</a></li>
                            <li><a href="#!">Для душа</a></li>
                            <li><a href="#!">Для биде</a></li>
                            <li><a href="#!">Для кухни</a></li>
                        </ul>
                        <div className="shifterhead__rightblock">
                            <ComboBox />
                        </div>
                    </div>
                </section>


            </div>
        </div>
    );
}

export default ShifterHead;