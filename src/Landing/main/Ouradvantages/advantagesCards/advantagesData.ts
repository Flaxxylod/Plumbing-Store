interface AdvantagesCard {
    id: number,
    picture: string,
    subheader: string,
    text: string
}

export const AdvantagesCardData: AdvantagesCard[] = [
    {
        id: 0,
        picture: "src/assets/Landing/main/Ouradvantages/Picture1.svg",
        subheader: "Бесплатный возврат",
        text: "Если товар вам не подходит, вы можете верунть его в течении 30 дней.",
    },
    {
        id: 1,
        picture: "src/assets/Landing/main/Ouradvantages/Picture2.svg",
        subheader: "Гарантия10 лет",
        text: "Стандарты ISO9001 и двойной контроль качества гарантируют долгосрочную безупречную работу изделий.",
    },
    {
        id: 2,
        picture: "src/assets/Landing/main/Ouradvantages/Picture3.svg",
        subheader: "Безопасная оплата",
        text: "Банковской картой или наличными при получении. ",
    },
]