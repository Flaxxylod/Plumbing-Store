import Star from "./../../assets/Common/ProductPage/ProductAdvantages/Star.svg"
import Stroke from "./../../assets/Common/ProductPage/ProductAdvantages/Stroke.svg"
import { useState } from "react"
interface ChildrinType {
    children: string
    header: string

}
const AdvantagesList = ({ children, header }: ChildrinType) => {
    const [isOpen, SetisOpen] = useState<boolean>(false)
    return (
        <div className="cursor-pointer max-w-[486px] min-h-[80px]" onClick={() => SetisOpen(!isOpen)}>
            <div className="flex items-center justify-between ">
                <div>
                    <div className={`flex justify-between transition duration-150` + (isOpen ? "" : " items-center")}>
                        <div className="mr-[25px]">
                            <img className="max-w-[40px] w-full" src={Star} alt="" />
                        </div>
                        <div>
                            <h4>{header}</h4>
                            {isOpen ?
                                <div className="flex flex-col max-w-[366px] mt-[8px]">
                                    <p className="text-[#7B7B7B]">{children}</p>
                                </div> : null}
                        </div>
                    </div>
                </div>
                <span>
                    <img className={"transition duration-150" + (isOpen ? " rotate-180" : "")} src={Stroke} alt="" />
                </span>
            </div>
            <div className="h-px w-full bg-[#ECECEC] mt-[26px]" />
        </div >
    );
}

export default AdvantagesList;