'use client'

// import React from 'react'
// import { Switch } from '../switch/Switch'
// import { data } from '@/public/data/data'
// import { Card } from '../card/Card'
// import { useResize } from '@/shared/hook/useResize'

// export const Slider: React.FC = () => {

//     console.log(useResize())

//     const [offsexX, setOffsexX] = React.useState(0)

//     React.useEffect(() => {

//         const hendleOffsetX = () => {
//             // const width = useResize()
//             const offset = 412 //width / 2 - 60
//             setOffsexX(prev => prev + offset)
//         }

//         const intervalId = setInterval(hendleOffsetX, 1000)

//         return () => clearInterval(intervalId)

//     }, [])


//     return (
//         <div className="w-full mx-auto overflow-hidden max-w-[100%] pl-4">
//             <Switch cards={data} />
//             <ul className="flex gap-4" style={{ transform: `translateX(-${offsexX}px)` }}>
//                 {data.map((item) => (<Card key={item.id} {...item} />))}
//             </ul>
//         </div>
//     )
// }


// import React from 'react';
// import { Switch } from '../switch/Switch';
// import { data } from '@/public/data/data';
// import { Card } from '../card/Card';
// import { useResize } from '@/shared/hook/useResize';

// export const Slider: React.FC = () => {
//     const [offsexX, setOffsexX] = React.useState(0);
//     const itemWidth = 412; // Ширина одного элемента слайдера
//     const totalWidth = itemWidth * data.length; // Общая ширина всех элементов

//     React.useEffect(() => {
//         const handleOffsetX = () => {
//             setOffsexX(prev => prev - itemWidth); // Сдвиг влево
//         };

//         const intervalId = setInterval(() => {
//             handleOffsetX();
//             // Если сдвинутый элемент вышел за пределы, сбросим его в начало
//             if (offsexX <= -totalWidth) {
//                 setOffsexX(0);
//             }
//         }, 3000);

//         return () => clearInterval(intervalId);
//     }, [offsexX, totalWidth]);

//     return (
//         <div className="w-full mx-auto overflow-hidden max-w-[100%] pl-4">
//             <Switch cards={data} />
//             <ul className="flex gap-4 transition-transform duration-1 ease" style={{ transform: `translateX(${offsexX}px)` }}>
//                 {data.map((item) => (<Card key={item.id} {...item} />))}
//                 {data.map((item) => (<Card key={`${item.id}-copy`} {...item} />))} {/* Дублируем элементы */}
//             </ul>
//         </div>
//     );
// }



// import React, { useEffect, useRef, useState } from 'react';
// import { Switch } from '../switch/Switch';
// import { data } from '@/public/data/data';
// import { Card } from '../card/Card';

// export const Slider: React.FC = () => {
//     const [offsetX, setOffsetX] = useState(0);
//     const itemWidth = 412 / 2;
//     const totalWidth = itemWidth * data.length;
//     const requestRef = useRef(0);

//     const animate = () => {
//         setOffsetX(prev => {
//             const newOffset = prev - itemWidth;
//             return newOffset <= -totalWidth ? 0 : newOffset; // Сброс в начало
//         });
//         requestRef.current = requestAnimationFrame(animate);
//     };

//     useEffect(() => {
//         requestRef.current = requestAnimationFrame(animate); // Запуск анимации

//         return () => {
//             cancelAnimationFrame(requestRef.current); // Очистка при размонтировании
//         };
//     }, []);

//     return (
//         <div className="w-full mx-auto overflow-hidden max-w-[100%] pl-4">
//             <Switch cards={data} />
//             <ul className="flex gap-4 transition-transform duration-500 ease-in-out" style={{ transform: `translateX(${offsetX}px)` }}>
//                 {data.map(item => (<Card key={item.id} {...item} />))}
//                 {data.map(item => (<Card key={`${item.id}-copy`} {...item} />))} {/* Дублируем элементы для бесконечного эффекта */}
//             </ul>
//         </div>
//     );
// };


// import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
// import { Switch } from '../switch/Switch';
// import { data } from '@/public/data/data';
// import { Card } from '../card/Card';

// export const Slider: React.FC = () => {
//     const [offsetX, setOffsetX] = useState(0);
//     const itemWidth = 412 / 1.2; // Ширина одного элемента слайдера
//     const totalWidth = itemWidth * data.length; // Общая ширина всех элементов
//     const requestRef = useRef(0); // Ссылка на requestAnimationFrame
//     const lastUpdateTime = useRef(Date.now()); // Время последнего обновления
//     const delay = 2000; // Задержка в миллисекундах между обновлениями

//     const animate = () => {
//         const currentTime = Date.now();
//         const elapsedTime = currentTime - lastUpdateTime.current;

//         if (elapsedTime > delay) {
//             setOffsetX(prev => {
//                 const newOffset = prev - itemWidth;
//                 return newOffset <= -totalWidth ? 0 : newOffset; // Сброс в начало
//             });
//             lastUpdateTime.current = currentTime; // Обновляем время последнего обновления
//         }

//         requestRef.current = requestAnimationFrame(animate);
//     };

//     useLayoutEffect(() => {
//         requestRef.current = requestAnimationFrame(animate); // Запуск анимации

//         return () => {
//             cancelAnimationFrame(requestRef.current); // Очистка при размонтировании
//         };
//     }, []);

//     return (
//         <div className="w-full mx-auto overflow-hidden max-w-[100%] pl-4">
//             <Switch cards={data} />
//             <ul className="flex gap-4 transition-transform duration-500 ease-in-out" style={{ transform: `translateX(${offsetX}px)` }}>
//                 {data.map(item => (<Card key={item.id} {...item} />))}
//                 {data.map(item => (<Card key={`${item.id}-copy`} {...item} />))}
//             </ul>
//         </div>
//     );
// };


import React, { useEffect, useRef, useState } from 'react';
import { Switch } from '../switch/Switch';
import { data } from '@/public/data/data';
import { Card } from '../card/Card';

export const Slider: React.FC = () => {

    const [offsetX, setOffsetX] = useState(0);
    const itemWidth = 412; // Ширина одного элемента слайдера
    const totalWidth = itemWidth * data.length; // Общая ширина всех элементов
    const requestRef = useRef(0); // Ссылка на requestAnimationFrame
    const lastUpdateTime = useRef(Date.now()); // Время последнего обновления
    const delay = 1000 / 60; // Задержка для 60 FPS

    const animate = () => {
        const currentTime = Date.now();
        const elapsedTime = currentTime - lastUpdateTime.current;
        if (elapsedTime > delay) {
            setOffsetX(prev => {
                const newOffset = prev - 1; // Сдвигаем на 1 пиксель
                // Если достигли конца, сбрасываем в начало
                return newOffset <= -totalWidth ? 0 : newOffset;
            });
            lastUpdateTime.current = currentTime; // Обновляем время последнего обновления
        }
        requestRef.current = requestAnimationFrame(animate);
    };

    useEffect(() => {
        requestRef.current = requestAnimationFrame(animate); // Запуск анимации
        return () => {
            cancelAnimationFrame(requestRef.current); // Очистка при размонтировании
        };
    }, []);

    return (
        <div className="w-full mx-auto overflow-hidden max-w-[100%] pl-4">
            <Switch cards={data} />
            <ul className="flex gap-4 transition-transform duration-500 ease-in-out" style={{ transform: `translateX(${offsetX}px)` }}>
                {/* Дублируем элементы для бесконечного эффекта */}
                {data.map(item => (<Card key={item.id} {...item} />))}
                {data.map(item => (<Card key={`${item.id}-copy`} {...item} />))}
            </ul>
        </div>
    );
};
