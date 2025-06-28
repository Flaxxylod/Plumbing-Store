import shopbucket from "./../../../assets/Common/innerheader/cart.svg"
import "./BucketShopButton.css"
const BucketShopButton = ({Price}) => {
    return (
        <button className="BucketShopButton__content">
            <img src={shopbucket} alt="" />
            <span className="BucketShop__Price">
                {Price ??= 0} ₽
            </span>
        </button>
    );
}

export default BucketShopButton;