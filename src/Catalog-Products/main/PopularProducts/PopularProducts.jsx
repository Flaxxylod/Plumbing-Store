import "./PopularProducts.css";
import "./../../../Styles/elements/Pagination/pagination.css";
import ReactPaginate from "react-paginate";
import PromotionalCard from "../../../CommonElements/PromotionalCard/PromotionalCard";
import { useState } from "react";
import { PromCardData } from "../../../CommonElements/PromotionalCard/PromCardData";

const PopularProducts = () => {
    // Настройки пагинации
    const itemsPerPage = 8; // Жёстко фиксируем 8 элемента на страницу
    const [currentPage, setCurrentPage] = useState(0);

    // Вычисляем элементы для текущей страницы
    const offset = currentPage * itemsPerPage;
    const currentItems = PromCardData.slice(offset, offset + itemsPerPage);
    const pageCount = Math.ceil(PromCardData.length / itemsPerPage);

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    return (
        <div className="popularproducts__content">
            <div className="container">
                <section className="popularproducts__commonblock">
                    <header>
                        <h2>Популярные товары</h2>
                    </header>

                    {/* Сетка товаров (4 в строку) */}
                    <div className="popular__products__block">
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
                </section>
            </div>
        </div>
    );
}

export default PopularProducts;