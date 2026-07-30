import { useState, useEffect } from "react";
const useMenuBar = (isActive: Boolean) => {
    const [OpenCatalog, SetOpenCatalog] = useState<boolean>(false)

    useEffect(() => {

        if (isActive) {
            document.body.style.overflow = 'hidden';
        }
        else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        }
    }, [isActive])

    return (
        {
            OpenCatalog, SetOpenCatalog,
            isActive
        }
    );
}

export default useMenuBar;