import "./shifterCatalogProducts.css"
import ShiftersFilter from "../ShiftersFilter/ShiftersFilter";
import ReactPaginate from "react-paginate";
import { useState } from "react";
import PromotionalCard from "../../CommonElements/PromotionalCard/PromotionalCard";
import { ShiftersData } from "./ShifterCatalogData";
import Modal from "../../CommonElements/Modal/Modal";
import CardProduct from "../../CommonElements/CardProduct/CardProduct";
import { useRef } from "react";
const ShifterCatalogProducts = () => {

    // Настройки пагинации
    const itemsPerPage = 9; // Жёстко фиксируем 9 элемента на страницу
    const [currentPage, setCurrentPage] = useState(0);

    // Вычисляем элементы для текущей страницы
    const offset = currentPage * itemsPerPage;
    const currentItems = ShiftersData.slice(offset, offset + itemsPerPage);
    const pageCount = Math.ceil(ShiftersData.length / itemsPerPage);

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    // Настройки модального окна
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null); // хранит данные об кардочке

    const handleProductClick = (product) => { 
        setSelectedProduct(product); // сохраняет данные в карточку
        setIsModalOpen(true); //открывает модальное окно
        console.log(product);
    };

    const handleCloseModal = () => { // закрывает и сбрасывает данные модального окна
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

                                    key={`${item.name}-${index}`}
                                    picture={item.picture}
                                    title={item.name}
                                    price={item.price}
                                    discountPrice={item.discountprice}
                                    discount={item.discount}
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