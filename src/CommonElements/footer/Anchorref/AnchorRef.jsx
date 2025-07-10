import "./anchorRef.css"
import arrow from "./../../../assets/Landing/footer/Vector.svg"
const AnchorRef = () => {
    return (
        <>
            <a href="#nav">
                <div className="anchor__ref__content">
                    <div className="container">
                        <img src={arrow} alt="" />
                    </div>
                </div>
            </a>
        </>
    );
}

export default AnchorRef;