interface AdvantagesCard {
    id: number,
    picture: string,
    subheader: string,
    text: string
}

export const AdvantagesCardData: AdvantagesCard[] = [
    {
        id: 0,
        picture: new URL('./assets/Landing/main/Ouradvantages/Picture1.svg', import.meta.url).href,
        subheader: "Бесплатный возврат",
        text: "Если товар вам не подходит, вы можете верунть его в течении 30 дней.",
    },
    {
        id: 1,
        picture: new URL('./assets/Landing/main/Ouradvantages/Picture2.svg', import.meta.url).href,
        subheader: "Гарантия10 лет",
        text: "Стандарты ISO9001 и двойной контроль качества гарантируют долгосрочную безупречную работу изделий.",
    },
    {
        id: 2,
        picture: new URL('./assets/Landing/main/Ouradvantages/Picture3.svg', import.meta.url).href,
        subheader: "Безопасная оплата",
        text: "Банковской картой или наличными при получении. ",
    },
];