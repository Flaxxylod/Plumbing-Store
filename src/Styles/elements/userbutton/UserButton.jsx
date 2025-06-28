import "./userButton.css"
import user from "./../../../assets/Common/innerheader/user.svg"
const UserButton = () => {
    return (
        <button className="UserButton__content">
            <img src={user} alt="" />
        </button>
    );
}

export default UserButton;