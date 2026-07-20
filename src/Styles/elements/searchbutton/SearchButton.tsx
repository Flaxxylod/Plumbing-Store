
import search from "@/assets/Common/navigation/icon/group.svg"

interface SearchButtonProps {
    onClick: () => void
}

const SearchButton = ({ onClick }: SearchButtonProps) => {
    return (
        <button onClick={onClick} className="border border-[#494949] border-[1px] rounded-[2px] p-[10px]">
            <img src={search} className="filter grayscale lg:grayscale-0" alt="" />
        </button>
    );
}

export default SearchButton;