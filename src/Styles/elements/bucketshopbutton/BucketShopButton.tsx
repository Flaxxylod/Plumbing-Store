import shopbucket from "./../../../assets/Common/innerheader/cart.svg"
import "./BucketShopButton.css"

interface BucketShopButtonProps {
    Price: number | string;
}

const BucketShopButton = ({ Price }: BucketShopButtonProps) => {
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