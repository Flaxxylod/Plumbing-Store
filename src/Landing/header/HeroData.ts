interface HeroData {
    id: number;
    picture: string;
}

export const heroData: HeroData[] = [
    {
        id: 0,
        picture: new URL('./../../assets/Landing/Header/header-hero1.png', import.meta.url).href
    },
    {
        id: 1,
        picture: new URL('./../../assets/Landing/Header/header-hero2.png', import.meta.url).href
    },
    {
        id: 2,
        picture: new URL('./../../assets/Landing/Header/header-hero3.png', import.meta.url).href
    },
];