import "./Collections.css"

const Collections = () => {
    return (
        <section className="flex justify-center max-lg:flex-col-reverse max-w-[1500px] h-full lg:max-h-[638px]  m-[0_auto]">

            <div className="collections__bgblock__left h-[544px] ">



                <section className="collections__left__block max-w-[712px]  justify-center">

                    <h2 className="white psb-[20px]">Коллекции</h2>

                    <div className="flex flex-col mt-[20px] h-full max-h-[514px] justify-between">
                        <div className="lg:max-w-[486px] max-md:min-w-[260px]">
                            <p className="text__block__left ">
                                Чувственность и элегантность, пуризм и эксклюзивность, а может уют и романтичность? Наши коллекции, разработанные лучшими дизайнерами отрасли, помогут создать вам именно ту атмосферу ванной комнаты, которую вы всегда искали.
                            </p>
                        </div>
                        <div className="allcollection__block">
                            <a className="collection__ref" href="#!">Все коллекции</a>
                        </div>
                    </div>
                </section>



            </div>

            <div className="collections__bgblock__right h-[544px] lg:w-[808px]  max-md:h-[248px]">

                <div className="collections__right__block ml-[43px]">
                    <h3>ARISTO</h3>
                    <div className="collections__price__block">

                        <strong className="white">от 4 990 ₽</strong>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Collections;