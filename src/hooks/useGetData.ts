import { useEffect, useState } from "react";
import axios from "axios";
const useGetData = <T,>(URL: string) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState<T[] | null>(null);

    const GetData = async () => {
        const abortController = new AbortController();

        try {
            setLoading(true);
            const response = await axios.get(URL, {
                signal: abortController.signal,
            });
            setData(response.data);
        } catch (error) {
            if (error.name !== 'AbortError') {
                setError(error);
            }
        } finally {
            setLoading(false);
        }


        return abortController;
    };

    return { data, loading, error, GetData };
};

export default useGetData