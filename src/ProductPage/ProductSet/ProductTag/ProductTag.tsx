import "./productTag.css"

interface productTagType {
    children?: string;
}

const ProductTag = ({ children }: productTagType) => {
    return (
        <li className="ProductTag-content inline-flex
        bg-[var(--white-color)] p-[8px_16px] rounded-[48px] ">
            <span>{children}</span>
        </li>
    );
}

export default ProductTag;