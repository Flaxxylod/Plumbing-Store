import "./breadCrumbs.css"
const BreadCrumbs = ({ items, isActive }) => {
    return (
        <div style={isActive ? { display: "none" } : { display: "flex" }} className="breadcrumbs__content">
            {items.map((item, index) => (
                <span key={index} className="crubms__text">
                    {item}
                    {index < items.length - 1 && ' '}
                </span>
            ))}
        </div>
    );
}

export default BreadCrumbs;