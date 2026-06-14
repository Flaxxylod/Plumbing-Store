
import ShiftersFilter from "../ShiftersFilter/ShiftersFilter";
import ReactPaginate from "react-paginate";
import { useEffect, useState, useMemo } from "react";
import PromotionalCard from "../../CommonElements/PromotionalCard/PromotionalCard";
import Modal from "../../CommonElements/Modal/Modal";
import CardProduct from "../../CommonElements/CardProduct/CardProduct";
import axios from "axios";


interface ShifterDatasType {
    id: number,
    title: string,
    image_name: string,
    imageUrl: string,
    name: string,
    price: number,
    discount_price?: number,
    discount_percents?: number,
    onClick?: () => void,
    testid?: string
}



const ShifterCatalogProducts = () => {
    const [shiftersDatas, setShiftersDatas] = useState<ShifterDatasType[]>([])

    const ShiftersData = async (): Promise<void> => {
        try {
            const shiftersData = await axios.get("http://localhost:8081/api/Shifters/get");

            // Добавляем полный URL к каждой картинке
            const dataWithImageUrls = shiftersData.data.map(item => ({
                ...item,
                imageUrl: `http://localhost:8081/img/${item.image_name}`
            }));


            setShiftersDatas(dataWithImageUrls);
        } catch (error) {
            console.error("Ошибка загрузки данных:", error);
        }
    }

    useEffect(() => {
        ShiftersData()
    }, [])

    // Настройки пагинации
    const itemsPerPage: number = 9;
    const [currentPage, setCurrentPage] = useState<number>(0);

    // Вычисляем элементы для текущей страницы
    const offset: number = currentPage * itemsPerPage;
    const currentItems = useMemo(() => {

        return shiftersDatas.slice(offset, offset + itemsPerPage);
    }, [shiftersDatas, offset, currentPage])


    const pageCount = useMemo(() => {
        return Math.ceil(shiftersDatas.length / itemsPerPage);

    }, [shiftersDatas.length, itemsPerPage])

    const handlePageClick = ({ selected }): void => {
        setCurrentPage(selected);
    };

    // Настройки модального окна
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [selectedProduct, setSelectedProduct] = useState<ShifterDatasType | null>(null);

    const handleProductClick = (product: ShifterDatasType): void => {
        setSelectedProduct(product);
        setIsModalOpen(true);

    };

    const handleCloseModal = (): void => {
        setIsModalOpen(false);
        setSelectedProduct(null);
    };

    return (
        <div className="flex mt-[32px]">
            <div className="container">
                <div className="flex max-lg:justify-center gap-x-[42px]">
                    <ShiftersFilter />
                    <div className="shifter__catalog__wrap">
                        {/* Сетка товаров (4 в строку) */}
                        <div className="grid lg:grid-cols-[repeat(3,minmax(275px,1fr))] md:grid-cols-2">
                            {currentItems.map((item, index) => (
                                <PromotionalCard
                                    key={`${item.id || item.name}-${index}`} // лучше использовать id
                                    picture={`http://localhost:8081/img/${item.image_name}`}
                                    title={item.title}
                                    price={item.price}
                                    discountPrice={item.discount_price}
                                    discount={item.discount_percents}
                                    onClick={() => handleProductClick(item)}
                                    testid={"PromotionalCard"}
                                />
                            ))}
                        </div>

                        {/* Пагинация (только если страниц больше 1) */}
                        {pageCount > 1 && (
                            <ReactPaginate
                                pageCount={pageCount}
                                pageRangeDisplayed={3}
                                marginPagesDisplayed={1}
                                onPageChange={handlePageClick}
                                containerClassName="pagination"
                                activeClassName="active"
                                previousLabel="← Назад"
                                nextLabel="Вперед →"
                                breakLabel="..."
                                forcePage={currentPage}
                            />
                        )}
                    </div>
                    {isModalOpen && selectedProduct && (
                        <Modal testid={"Modal"}>
                            <CardProduct {...selectedProduct}
                                product={selectedProduct}
                                onClose={handleCloseModal}
                                testid={"CardProduct"}
                            />
                        </Modal>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ShifterCatalogProducts;