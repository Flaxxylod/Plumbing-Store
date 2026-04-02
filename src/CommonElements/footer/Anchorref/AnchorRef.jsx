import "./anchorRef.css"
import arrow from "./../../../assets/Landing/footer/Vector.svg"
const AnchorRef = () => {
    return (
        <>
            <a href="#nav">

                <div className="duration-300 flex justify-center mt-6 py-[43px] bg-[#272829] border-4 border-[#484848] hover:duration-500 hover:brightness-150">
                    <div className="">
                        <img src={arrow} alt="" />
                    </div>
                </div>
            </a>
        </>
    );
}

export default AnchorRef;