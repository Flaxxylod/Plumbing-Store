
import search from "./../../../assets/Common/navigation/icon/group.svg"

const SearchButton = ({Click}) => {
    return (
        <button onClick={Click} className="border border-[#494949] border-[1px] rounded-[2px] p-[10px]">
            <img src={search} className="filter grayscale lg:grayscale-0" alt="" />
        </button>
    );
}

export default SearchButton;