type PATHDataType = {
    ImageURL: string
    ProductURL: string
}

type APIDataType = {
    BASE_URL: string;
    PATH: PATHDataType
    Get_ProductURL: (Product: string) => string
    Get_PartProduct_URL: () => string
    Get_ImageURL: (id: number) => string
}

let ProductPart_URL: string = ""
export const API: APIDataType = {
    BASE_URL: "https://backendplubmingstore.onrender.com",
    PATH: {
        ProductURL: `/api/`,
        ImageURL: `/api/images/`
    },
    Get_ProductURL: (Product) => {
        ProductPart_URL = Product
        return `${API.BASE_URL}${API.PATH.ProductURL}${Product}/get`
    }, //https://backendplubmingstore.onrender.com/api/Shifters/get} Если Product == Shifters
    Get_PartProduct_URL: () => ProductPart_URL,
    Get_ImageURL: (id) => `${API.BASE_URL}${API.PATH.ImageURL}${id}/data` //https://backendplubmingstore.onrender.com/api/images/1/data
}