
import ShiftersFilter from "../ShiftersFilter/ShiftersFilter";
import ReactPaginate from "react-paginate";
import PromotionalCard from "../../CommonElements/PromotionalCard/PromotionalCard";
import Modal from "../../CommonElements/Modal/Modal";
import CardProduct from "../../CommonElements/CardProduct/CardProduct";
import { useParams } from "react-router-dom";
import { API } from "../../api.config";
import useModal from "../../hooks/useModal";
import useGetData from "../../hooks/useGetData";
import usePagination from "../../hooks/usePagination";

interface product {
    id: number,
    title: string,
    name: string,
    price: number,
    discount_percents?: number,
    imageUrl: string
}

const ShifterCatalogProducts = () => {
    const { Category } = useParams()

    const modal = useModal<product>()
    const ShifterData = useGetData<product>(API.Get_ProductURL(Category)).data || [];

    const paginator = usePagination(ShifterData, 9);

    return (
        <div className="flex mt-[32px]">
            <div className="container">
                <div className="flex max-lg:justify-center gap-x-[42px]">
                    <ShiftersFilter />
                    <div className="min-h-[1170px]">
                        {/* Сетка товаров (4 в строку) */}
                        <div className="grid lg:grid-cols-[repeat(3,minmax(275px,1fr))] md:grid-cols-2">
                            {paginator.currentItems.map((item) => (
                                <PromotionalCard
                                    key={item.id}
                                    picture={API.Get_ImageURL(item.id)}
                                    title={item.title}
                                    price={item.price}
                                    discount={item.discount_percents}
                                    onClick={() => modal.open({
                                        ...item,
                                        imageUrl: API.Get_ImageURL(item.id)
                                    })

                                    }
                                    testid={"PromotionalCard"}
                                />
                            ))}
                        </div>

                        {/* Пагинация (только если страниц больше 1) */}
                        {paginator.pageCount > 1 && (
                            <ReactPaginate
                                pageCount={paginator.pageCount}
                                pageRangeDisplayed={3}
                                marginPagesDisplayed={1}
                                onPageChange={paginator.PageClick}
                                containerClassName="pagination"
                                activeClassName="active"
                                previousLabel="← Назад"
                                nextLabel="Вперед →"
                                breakLabel="..."
                                forcePage={paginator.currentPage}
                            />
                        )}
                    </div>
                    {modal.isOpen && (
                        <Modal testid={"Modal"}>
                            <CardProduct
                                product={modal.select}
                                onClose={modal.close}
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