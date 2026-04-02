
import PromotionalCard from "../../../CommonElements/PromotionalCard/PromotionalCard";
import Carosuel from "../../../CommonElements/Carosuel/Carosuel";
import axios from "axios";
import { useEffect, useState } from "react";
const PromotionalItems = () => {
    const [PromProductsData, SetPromProductsData] = useState([])
    const [DataLoaded, SetDataLoaded] = useState(false)

    const GetPromotionalProductsData = async () => {
        try {
            const PostPromProducts = await axios.get("http://localhost:8081/api/Shifters/get");
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
                                    picture={`http://localhost:8081/img/${item.image_name}`}
                                    price={item.price}
                                    discountPrice={item.discount_price}
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