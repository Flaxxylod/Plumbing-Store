import "./shifterCatalogProducts.css"
import ShiftersFilter from "../ShiftersFilter/ShiftersFilter";
import ReactPaginate from "react-paginate";
import { useState } from "react";
import PromotionalCard from "../../CommonElements/PromotionalCard/PromotionalCard";
import { PromCardData } from "../../CommonElements/PromotionalCard/PromCardData";

const ShifterCatalogProducts = () => {

    // Настройки пагинации
    const itemsPerPage = 9; // Жёстко фиксируем 8 элемента на страницу
    const [currentPage, setCurrentPage] = useState(0);

    // Вычисляем элементы для текущей страницы
    const offset = currentPage * itemsPerPage;
    const currentItems = PromCardData.slice(offset, offset + itemsPerPage);
    const pageCount = Math.ceil(PromCardData.length / itemsPerPage);

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
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
                                    key={`${item.title}-${index}`}
                                    picture={item.picture}
                                    title={item.title}
                                    price={item.price}
                                    discountPrice={item.discountPrice}
                                    discount={item.discount}
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
                </div>
            </div>
        </div>
    );
}

export default ShifterCatalogProducts;