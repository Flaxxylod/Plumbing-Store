type PATHDataType = {
    ImageURL: string
    ProductURL: string
}

type APIDataType = {
    BASE_URL: string;
    PATH: PATHDataType
    Get_ProductURL: (Product: string) => string
    Get_ImageURL: (id: number) => string
}


export const API: APIDataType = {
    BASE_URL: "https://backendplubmingstore.onrender.com",
    PATH: {
        ProductURL: `/api/`,
        ImageURL: `/api/images/`
    },
    Get_ProductURL: (Product) => `${API.BASE_URL}${API.PATH.ProductURL}${Product}/get`, //https://backendplubmingstore.onrender.com/api/Shifters/get} Если Product == Shifters
    Get_ImageURL: (id) => `${API.BASE_URL}${API.PATH.ImageURL}${id}/data` //https://backendplubmingstore.onrender.com/api/images/1/data
}