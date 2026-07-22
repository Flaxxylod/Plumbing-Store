interface CardsData {
    id: number;
    title: string;
    picture: string;
}

export const CardsData: CardsData[] = [
    {
        id: 0,
        title: "Сместители",
        picture: new URL('./../../../assets/Landing/main/Ourcompany/image1.png', import.meta.url).href
    },
    {
        id: 1,
        title: "Мебель",
        picture: new URL('./../../../assets/Landing/main/Ourcompany/image2.png', import.meta.url).href
    },
    {
        id: 2,
        title: "Душевая программа",
        picture: new URL('./../../../assets/Landing/main/Ourcompany/image3.png', import.meta.url).href
    },
    {
        id: 3,
        title: "Фаянс",
        picture: new URL('./../../../assets/Landing/main/Ourcompany/image4.png', import.meta.url).href
    },
];