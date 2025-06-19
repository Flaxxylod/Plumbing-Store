import "./Collections.css"
const Collections = () => {
    return (
        <div className="collections__content">
            <div className="container">
                <div className="collections__common__block">
                    <div className="collections__left__block">
                        <h2 className="white">Коллекции</h2>
                        <p className="text__block__left">
                            Чувственность и элегантность, пуризм и эксклюзивность, а может уют и романтичность? Наши коллекции, разработанные лучшими дизайнерами отрасли, помогут создать вам именно ту атмосферу ванной комнаты, которую вы всегда искали.
                        </p>

                        <div className="allcollection__block">
                            <a className="collection__ref" href="#!">Все коллекции</a>
                        </div>
                    </div>

                    <div className="collections__right__block">
                        <h3>ARISTO</h3>
                        <div className="collections__price__block">

                            <strong className="white">от 4 990 ₽</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Collections;