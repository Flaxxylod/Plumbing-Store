import axios from "axios";
import { useQuery, keepPreviousData } from "@tanstack/react-query";

const useCacheData = <T,>(URL: string) => {


    return useQuery<T[], Error>({
        queryKey: [URL], //ключ запроса
        queryFn: async () => { // кэширование axios
            const response = await axios.get(URL)
            return response.data
        },
        staleTime: 5 * 60 * 1000, // первое число это минуты актуальности данных и только её трогать надо.
        placeholderData: keepPreviousData
    });
}

export default useCacheData;