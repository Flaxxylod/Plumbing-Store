
import { useEffect, useState } from "react";

import axios from "axios";


const useGetData = <T,>(URL: string) => {
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<object | null>(null)
    const [data, setData] = useState<T[] | null>(null)

    useEffect(() => {
        const GetData = async (): Promise<void> => {
            try {
                setLoading(true)

                const response = await axios.get(URL);

                const URLData = response.data.map((item: T) => ({
                    ...item,

                }));
                console.log(URLData)
                setData(URLData);





            } catch (error) {
                console.error("Ошибка загрузки данных:", error);
                setError(error)
                setLoading(false)
            }

            finally {
                setLoading(false)
            }
        }

        GetData()
    }, [])
    return ({ data, loading, error });
}

export default useGetData;