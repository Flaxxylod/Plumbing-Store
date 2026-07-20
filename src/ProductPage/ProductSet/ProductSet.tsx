import ProductTag from "./ProductTag/ProductTag";

const ProductSet = () => {
    return (
        <section>
            <h2>
                Что в комплекте
            </h2>
            <div className="max-w-[480px]">
                <ul className="inline-flex flex-wrap gap-[12px]">
                    <ProductTag>Смеситель</ProductTag>
                    <ProductTag>Гибкая подводка</ProductTag>
                    <ProductTag>Крепеж</ProductTag>
                    <ProductTag>Гарантийный талон</ProductTag>
                    <ProductTag>Инструкция</ProductTag>
                </ul>
                <div className="mt-[20px]">
                    <span className="text-[var(--orange-color)] border-dotted  border-b-[1px] border-[var(--orange-color)]">Посмотреть схему подключения</span>
                </div>
            </div>
        </section>
    );
}

export default ProductSet;