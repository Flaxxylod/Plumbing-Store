import React from 'react';
import { useSelect } from 'downshift';
import './comboBox.css';

const options = [
    { value: 'option1', label: 'Сначала популярные' },
    { value: 'option2', label: 'Сначала недавние' },
    { value: 'option3', label: 'Сначала дешевые' },
];

function MySelect() {
    const {
        isOpen,
        getToggleButtonProps,
        getMenuProps,
        highlightedIndex,
        getItemProps,
        selectedItem,
    } = useSelect({
        items: options,
        initialSelectedItem: options[0],
        itemToString: item => (item ? item.label : ''),
    });

    return (
        <div className="ComboBox__Content">
            <button
                type="button"
                className="custom-select__control"
                {...getToggleButtonProps()}
            >
                {selectedItem ? selectedItem.label : 'Выберите вариант'}
            </button>
            <ul
                className="custom-select__menu"
                {...getMenuProps()}
                style={{ display: isOpen ? 'block' : 'none', margin: 0, padding: 0, position: 'absolute', zIndex: 10 }}
            >
                {isOpen &&
                    options.map((item, index) => (
                        <li
                            className={[
                                'custom-select__option',
                                highlightedIndex === index ? 'custom-select__option--is-focused' : '',
                                selectedItem === item ? 'custom-select__option--is-selected' : '',
                            ].join(' ')}
                            key={item.value}
                            {...getItemProps({ item, index })}
                        >
                            {item.label}
                        </li>
                    ))}
            </ul>
        </div>
    );
}

export default MySelect;