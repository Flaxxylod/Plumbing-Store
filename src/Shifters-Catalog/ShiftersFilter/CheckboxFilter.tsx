
interface CheckboxFilter {
    children: string,
    isChecked: boolean,
    Key?: number
    isChanged: () => void
}
const CheckboxFilter = ({ children, isChecked, isChanged, Key }: CheckboxFilter) => {
    return (

        <li key={Key}>
            <input onChange={isChanged} checked={isChecked} type="checkbox" />
            <label>{children}</label>
        </li>

    );
}

export default CheckboxFilter;