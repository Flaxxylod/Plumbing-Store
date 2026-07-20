
interface ButtonProps {
    children: string,
    type?: string,
    onClick?: () => void
    styling?: string
}

const Button = ({ children, type, onClick, styling }: ButtonProps) => {


    switch (type) {
        case "Rounded":
            return (
                <button onClick={onClick} className={`${styling} rounded-sm font-bold px-[0.695em] py-[0.687em] rounded-[30px]! px-[24px]! text-[var(--white-color)] bg-[var(--orange-color)]`}>{children}</button>
            );


        default:
            return (
                <button onClick={onClick} className={`${styling} rounded-sm font-bold px-[0.695em] py-[0.687em] text-[var(--white-color)] bg-[var(--orange-color)]`}>{children}</button>
            );
    }

}

export default Button;