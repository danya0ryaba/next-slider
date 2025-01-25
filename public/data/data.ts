export type CardType = {
    id: number;
    img: string;
    title: string;
    description: string;
}

export const data: CardType[] = [
    {
        id: 1,
        img: "/images/cards/1.svg",
        title: "Анализ текущего состояния карьеры",
        description: "Проведем оценку вашего кейса и создадим стратегию для дальнейшего карьерного развития.",
    },
    {
        id: 2,
        img: "/images/cards/2.svg",
        title: "Сопроводительные письма и резюме",
        description: "Поможем сформировать профессиональный портфель, которые выделит вас среди других кандидатов.",
    },
    {
        id: 3,
        img: "/images/cards/3.svg",
        title: "Поиск работы",
        description: "Определим вашу карьерную цель и разработаем стратегию для трудоустройства. ",
    },
    {
        id: 4,
        img: "/images/cards/4.svg",
        title: "Тренинг по презентации личного бренда",
        description: "Подсветим сильные стороны и грамотно выстроим самопрезентацию.",
    },
    {
        id: 5,
        img: "/images/cards/5.svg",
        title: "Подготовка к собеседованию",
        description: "Научим говорить о себе кратко, ярко и профессионально.",
    },
    {
        id: 6,
        img: "/images/cards/6.svg",
        title: "Рекомендация по базе STEMPS Career",
        description: "Поможем встретиться соискателю и работодателю.",
    },
]