
import PromotionalCard from "../../../CommonElements/PromotionalCard/PromotionalCard";
import Carosuel from "../../../CommonElements/Carosuel/Carosuel";
import axios from "axios";
import { FC, useEffect, useState } from "react";



interface PromotionalItem {
    title: string,
    image_name: string,
    price: number,

    discount_percents?: number
}

const PromotionalItems = () => {
    const [PromProductsData, SetPromProductsData] = useState<PromotionalItem[]>([])
    const [DataLoaded, SetDataLoaded] = useState<boolean>(false)

    const GetPromotionalProductsData = async (): Promise<void> => {
        try {
            const PostPromProducts = await axios.get("https://backendplubmingstore.onrender.com/api/Shifters/get");
            SetPromProductsData(PostPromProducts.data)
            SetDataLoaded(true)
        }
        catch (error) {
            console.log("Ошибка:", error)
            SetDataLoaded(false)
        }
    }

    useEffect(() => {
        GetPromotionalProductsData()
    }, [])

    if (DataLoaded) {
        return (
            <div className="mt-[80px]">
                <section className="container max-md:!w-[1180px]">
                    <h2>Акционные товары</h2>
                    <div className="mt-[20px]">
                        <Carosuel>
                            {PromProductsData.slice(0, 4).map((item) =>
                                <PromotionalCard
                                    title={item.title}
                                    picture={`https://backendplubmingstore.onrender.com/img/${item.image_name}`}
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