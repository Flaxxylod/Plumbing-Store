
import PromotionalCard from "../../../CommonElements/PromotionalCard/PromotionalCard";
import Carosuel from "../../../CommonElements/Carosuel/Carosuel";
import axios from "axios";

import { API } from "../../../api.config";
import useGetData from "../../../hooks/useGetData";
import usePromotionalItems from "./usePromotionalItems";
interface PromotionalItem {
    id: number,
    title: string,
    image_name: string,
    price: number,

    discount_percents?: number
}

const PromotionalItems = () => {

    const data = useGetData<PromotionalItem>(API.Get_ProductURL("Shifters")).data || []
    const promo = usePromotionalItems()

    if (promo.DataLoaded) {
        return (
            <div className="mt-[80px]">
                <section className="container max-md:!w-[1180px]">
                    <h2>Акционные товары</h2>
                    <div className="mt-[20px]">
                        <Carosuel>
                            {data.slice(0, 4).map((item) =>
                                <PromotionalCard
                                    title={item.title}
                                    picture={API.Get_ImageURL(item.id)}
                                    price={item.price}
                                    discount={item.discount_percents}
                                />
                            )}
                        </Carosuel>
                    </div>
                </section>
            </div>
        );
    }
    else {
        return (
            <div className="PromotionalItems__content">
                <div className="container">

                    <h2>Акционные товары</h2>
                    <span>Тут должны были быть акционные товары, но бэкенд отключен</span>

                </div>
            </div>
        )
    }


}

export default PromotionalItems;