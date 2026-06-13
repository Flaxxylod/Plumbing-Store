import Menu from "./../../../assets/Common/navigation/icon/MenuButton.svg"

interface MenuButtonProps {
    onClick: () => void

}

const MenuButton = ({ onClick }: MenuButtonProps) => {
    return (
        <button onClick={onClick} className="border border-[#494949] border-[1px] rounded-[2px] p-[12px] lg:hidden inline-flex items-center gap-x-[12px] max-w-[95px] max-h-[32px]">
            <img src={Menu} className="max-w-[17px] max-h-[12px]" />
            <span className="font-['PT_Sans'] font-bold text-[var(--white-color)]">Меню</span>
        </button>
    );
}

export default MenuButton;