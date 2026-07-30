import { useState} from "react"

const usePromotionalItems = <T,>() => {

    const [DataLoaded, SetDataLoaded] = useState<boolean>(false)


    return (
        { DataLoaded }
    );
}

export default usePromotionalItems;