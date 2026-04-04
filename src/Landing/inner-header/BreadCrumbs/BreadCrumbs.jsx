import "./breadCrumbs.css"
const BreadCrumbs = ({ items, isActive }) => {
    return (
        <div style={isActive ? { display: "none" } : { display: "flex" }} className="breadcrumbs__content flex gap-x-[32px] lg:p-[24px_0_24px_40px] p-[16px_14px_14px_16px] ">
            {items.map((item, index) => (
                <span key={index} className="crubms__text lg:text-[1.25rem] text-[0.875rem] text-[#7B7B7B]">
                    {item}
                    {index < items.length - 1 && ' '}
                </span>
            ))}
        </div>
    );
}

export default BreadCrumbs;