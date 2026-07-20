import InnerHeader from "../Landing/inner-header/InnerHeader";
import Footer from "../CommonElements/footer/Footer";
import ProductCard_Info from "./ProductInfo/ProductCard_Info";
import picture from "../assets/Common/Product-Card/image.png"
import ProductSet from "./ProductSet/ProductSet";
import ProductDescription from "./ProductInfo/ProductDescription/ProductDescription";
import AdvantagesList from "./ProductAdvantages/AdvantagesList";
import ProductSpecifications from "./ProductSpecification/ProductSpecifications";
import EndBlock from "../Landing/main/Endblock/EndBlock";
import Garanty from "../components/Garanty";
const ProductPage = () => {
    return (
        <section>
            <InnerHeader />

            <div className="display flex flex-col ">
                <header className="flex! lg:max-w-[1200px] w-full justify-between container">
                    <img className="w-[480px]" src={picture} alt="" />
                    <ProductCard_Info />
                </header>

                <main className="">
                    <div className="bg-[#F6F6F6] py-[60px]">
                        <div className="container ">
                            <ProductSet />
                            <ProductDescription />
                        </div>
                    </div>
                    <section className="bg-none  py-[60px]">
                        <div className="container flex flex-col gap-y-[26px]">
                            {/* cделать подгрузку из бд */}
                            <h2>Преимущества</h2>
                            <AdvantagesList header={"Экологичный и долговечный корпус"}>Смеситель изготовлены из пищевой латуни с повышенным содержанием меди (61%), что делает корпус смесителя прочнее и надежнее. </AdvantagesList>
                            <AdvantagesList header={"Керамическая кран-букса"}>Сердце смесителя — керамическая кран-букса с пластинами из высокопрочного оксида алюминия. Она обеспечивает плавный ход рычага и надёжно защищает от протечек на протяжении всего срока службы.</AdvantagesList>
                            <AdvantagesList header={"Керамический дивертер"}>Встроенный керамический дивертер позволяет мгновенно переключать поток воды между изливом и душем. Керамические пластины внутри обеспечивают износостойкость и герметичность без лишнего трения.</AdvantagesList>
                            <AdvantagesList header={"Превышает стандарты"}>Смеситель разработан по усиленным техническим требованиям, превышающим европейские нормы качества. Каждая модель проходит многоступенчатый контроль давления и герметичности перед отправкой.</AdvantagesList>
                            <AdvantagesList header={"Аэратор NEOPERL"}>Встроенный аэратор немецкого бренда NEOPERL® насыщает воду кислородом, формируя мягкую и объёмную струю. Это снижает шум при работе и предотвращает разбрызгивание.</AdvantagesList>
                            <AdvantagesList header={"Экономия воды"}>Благодаря аэратору и продуманной гидравлике смеситель расходует до 45% меньше воды без потери напора. Вы получаете комфортный поток и экономите ресурсы с каждым открытием крана.</AdvantagesList>
                        </div>
                    </section>

                    <section>
                        <div className="container">
                            <ProductSpecifications />
                        </div>
                    </section>
                    <EndBlock />
                    <div className="bg-[#FFF6EF]">
                        <div className="container">
                            <Garanty />
                        </div>
                    </div>
                </main>
            </div >

            <Footer />
        </section >

    );
}

export default ProductPage;