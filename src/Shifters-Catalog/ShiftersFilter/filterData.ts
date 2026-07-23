
type ColorType = {
    id: number;
    color: string;
}
type CheckboxsType = {
    id: number;
    label: string
}
type FilterDataType = {
    colors: ColorType[];
    checkBoxes: CheckboxsType[];
}


type FilterDataTypeArray = FilterDataType[]

export const filterData: FilterDataTypeArray = [
    {
        colors: [
            {
                id: 0,
                color: new URL('./../../assets/Common/filter/shifters/Ellipse-1.svg', import.meta.url).href
            },
            {
                id: 1,
                color: new URL('./../../assets/Common/filter/shifters/Ellipse-2.svg', import.meta.url).href
            },
            {
                id: 2,
                color: new URL('./../../assets/Common/filter/shifters/Ellipse-3.svg', import.meta.url).href
            },
            {
                id: 3,
                color: new URL('./../../assets/Common/filter/shifters/Ellipse-4.svg', import.meta.url).href
            },
            {
                id: 4,
                color: new URL('./../../assets/Common/filter/shifters/Ellipse-5.svg', import.meta.url).href
            },
            {
                id: 5,
                color: new URL('./../../assets/Common/filter/shifters/Ellipse-6.svg', import.meta.url).href
            },
            {
                id: 6,
                color: new URL('./../../assets/Common/filter/shifters/Ellipse-7.svg', import.meta.url).href
            },
            {
                id: 7,
                color: new URL('./../../assets/Common/filter/shifters/Ellipse-8.svg', import.meta.url).href
            },
            {
                id: 8,
                color: new URL('./../../assets/Common/filter/shifters/Ellipse.svg', import.meta.url).href
            },
        ],
        checkBoxes: [
            { id: 0, label: "Акционные товары" },
            { id: 1, label: "Двухвентильный" },
            { id: 2, label: "Однорычажный" },
            { id: 3, label: "Alfi" },
            { id: 4, label: "Archi" },
            { id: 5, label: "Aristo" },
            { id: 6, label: "Astin" },
            { id: 7, label: "Berti" },
            { id: 8, label: "Boni" },
        ]
    }
]

// const Checkbox_Value = [

//     ]