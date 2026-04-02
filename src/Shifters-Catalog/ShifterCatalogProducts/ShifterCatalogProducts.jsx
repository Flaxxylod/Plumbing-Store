import "./shifterCatalogProducts.css"
import ShiftersFilter from "../ShiftersFilter/ShiftersFilter";
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
import PromotionalCard from "../../CommonElements/PromotionalCard/PromotionalCard";
import Modal from "../../CommonElements/Modal/Modal";
import CardProduct from "../../CommonElements/CardProduct/CardProduct";
import axios from "axios";

const ShifterCatalogProducts = () => {
    const [shiftersDatas, setShiftersDatas] = useState([])

    const ShiftersData = async () => {
        try {
            const shiftersData = await axios.get("http://localhost:8081/api/Shifters/get");

            // Добавляем полный URL к каждой картинке
            const dataWithImageUrls = shiftersData.data.map(item => ({
                ...item,
                imageUrl: `http://localhost:8081/img/${item.image_name}`
            }));

            console.log("Обновленные данные:", dataWithImageUrls); // ← ЛОГ ПЕРЕД setState
            setShiftersDatas(dataWithImageUrls);
        } catch (error) {
            console.error("Ошибка загрузки данных:", error);
        }
    }

    useEffect(() => {
        ShiftersData()
    }, [])

    // Настройки пагинации
    const itemsPerPage = 9;
    const [currentPage, setCurrentPage] = useState(0);

    // Вычисляем элементы для текущей страницы
    const offset = currentPage * itemsPerPage;
    const currentItems = shiftersDatas.slice(offset, offset + itemsPerPage);
    const pageCount = Math.ceil(shiftersDatas.length / itemsPerPage);

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    // Настройки модального окна
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleProductClick = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
        console.log(product);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
    };

    return (
        <div className="shiftercatalogproducts__content">
            <div className="container">
                <div className="shifter__catalog__commonblock">
                    <ShiftersFilter />
                    <div className="shifter__catalog__wrap">
                        {/* Сетка товаров (4 в строку) */}
                        <div className="shifter__products__block">
                            {currentItems.map((item, index) => (
                                <PromotionalCard
                                    key={`${item.id || item.name}-${index}`} // лучше использовать id
                                    picture={`http://localhost:8081/img/${item.image_name}`}
                                    title={item.title}
                                    price={item.price}
                                    discountPrice={item.discount_price}
                                    discount={item.discount_percents}
                                    onClick={() => handleProductClick(item)}
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
                        <Modal>
                            <CardProduct
                                product={selectedProduct}
                                isOpen={isModalOpen}
                                onClose={handleCloseModal}
                            />
                        </Modal>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ShifterCatalogProducts;