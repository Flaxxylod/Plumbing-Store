import "./searchButton.css"
import search from "./../../../assets/Common/navigation/icon/group.svg"

const SearchButton = ({Click}) => {
    return (
        <button onClick={Click} className="SearchButton__content">
            <img src={search} alt="" />
        </button>
    );
}

export default SearchButton;