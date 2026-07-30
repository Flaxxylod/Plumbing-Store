import { useContext, useRef, useState, useLayoutEffect } from "react"
import { useLocation } from "react-router-dom"
import { AppContext } from '../../Context'
const useInnerHeader = () => {

    const { Directory } = useContext(AppContext)
    const location = useLocation()
    const navRef = useRef<HTMLElement>(null)
    const [spacerHeight, setSpacerHeight] = useState(0)
    const [MenubarHidden, SetMenuBarHidden] = useState<Boolean>(false)

    const [productsHidden, setProductsHidden] = useState<Boolean>(false)
    const [searchInputHidden, setsearchInputHidden] = useState<Boolean>(false)

    useLayoutEffect(() => {
        const nav = navRef.current
        if (!nav) return

        const updateHeight = () => setSpacerHeight(nav.offsetHeight)
        updateHeight()

        if (typeof ResizeObserver !== "undefined") {
            const observer = new ResizeObserver(updateHeight)
            observer.observe(nav)
            return () => observer.disconnect()
        }

        window.addEventListener("resize", updateHeight)
        return () => window.removeEventListener("resize", updateHeight)
    }, [location.pathname, MenubarHidden, productsHidden, searchInputHidden, Directory])

    return (
        {
            MenubarHidden, SetMenuBarHidden,
            productsHidden, setProductsHidden,
            searchInputHidden, setsearchInputHidden,
            spacerHeight, setSpacerHeight,
            Directory, navRef
        }
    );
}

export default useInnerHeader;