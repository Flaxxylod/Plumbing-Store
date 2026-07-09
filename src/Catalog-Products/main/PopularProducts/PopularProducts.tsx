import "./PopularProducts.css";
import "./../../../Styles/elements/Pagination/pagination.css";
import ReactPaginate from "react-paginate";
import PromotionalCard from "../../../CommonElements/PromotionalCard/PromotionalCard";
import { useState } from "react";
import { PromCardData } from "../../../CommonElements/PromotionalCard/PromCardData";

type currentItemsType =
    {
        picture: string;
        title: string;
        price: number;
        discountPrice?: number;
        discount?: number;
    }



const PopularProducts = () => {
    // Настройки пагинации
    const itemsPerPage: number = 8; // Жёстко фиксируем 8 элемента на страницу
    const [currentPage, setCurrentPage] = useState<number>(0);

    // Вычисляем элементы для текущей страницы
    const offset: number = currentPage * itemsPerPage;
    const currentItems = PromCardData.slice(offset, offset + itemsPerPage);
    const pageCount: number = Math.ceil(PromCardData.length / itemsPerPage);

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    return (
        <div className="">
            <div className="container max-w-[1240px]!">
                <section className="max-w[1200px] ">
                    <div className="flex justify-center">
                        <h2>Популярные товары</h2>
                    </div>

                    {/* Сетка товаров (4 в строку) */}
                    <div className="flex justify-center">
                        <div className="lg:grid md:grid max-md:flex max-md:flex-col lg:grid-cols-[repeat(4,minmax(300px,1fr))]  md:grid-cols-2">
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