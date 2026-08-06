import { useParams } from "react-router-dom";
import { API } from "../api.config";
import useCacheData from "../hooks/useCacheData";
import { Product } from "../types/Product";
const useProductPage = () => {
    const { Category, ProductId } = useParams()
    const {
        data: products,
        isLoading,
        error
    } = useCacheData<Product>(API.Get_ProductURL(Category));

    if (!Category || !ProductId) {
        return {
            isLoading: false,
            error: "Товар не найден",
            product: null,
            productProp: null,
            Category,
            ProductId,
            products: null,
            data: null

        }
    }
    const data = products?.find(p => p.id === Number(ProductId));
    if (isLoading || !products) {
        return {
            isLoading,
            error: isLoading ? null : "Товар не найден",
            product: null,
            productProp: null,
            Category,
            ProductId,
            products: null,
            data: null
        }
    }
    const productProp = {
        price: data.price,
        title: data.title
    }
    return (
        {
            productProp,
            ProductId,
            Category,
            data,
            products,
            isLoading,

        }
    );
}

export default useProductPage;