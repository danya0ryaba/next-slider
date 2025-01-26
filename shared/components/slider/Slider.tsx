'use client'

import { Card } from '../card/Card';
import { Switch } from '../switch/Switch';
import { data } from '@/public/data/data';
import { useResize } from '@/shared/hook/useResize';
import React, { useLayoutEffect, useRef, useState } from 'react';

export const Slider: React.FC = () => {

    const width = useResize();
    const itemWidth = width < 900 ? 358 + 16 : 412; // ширина одного элемента слайдера

    const [offsetX, setOffsetX] = useState(0);
    const totalWidth = itemWidth * data.length; // общая ширина всех элементов
    const requestRef = useRef(0); // ссылка на requestAnimationFrame
    const lastUpdateTime = useRef(Date.now()); // время последнего обновления
    const delay = 1000 / 60; // задержка для 60 FPS

    const refUl = React.useRef<HTMLUListElement>(null);

    const animate = () => {
        const currentTime = Date.now();
        const elapsedTime = currentTime - lastUpdateTime.current;
        if (elapsedTime > delay) {
            setOffsetX(prev => {
                const newOffset = prev - 1;
                return newOffset <= -totalWidth ? 0 : newOffset;
            });
            lastUpdateTime.current = currentTime;
        }
        requestRef.current = requestAnimationFrame(animate);
    };

    useLayoutEffect(() => {
        if (width < 900) return;
        requestRef.current = requestAnimationFrame(animate);
        return () => {
            cancelAnimationFrame(requestRef.current);
        };
    }, [width]);

    // ДЛЯ МОБИЛЬНОГО ВИДА (Switch)
    const [activeDot, setActiveDot] = React.useState(1);

    const handleChangeSlider = (id: number) => {
        const offsetX = itemWidth * (id - 1);
        setActiveDot(id);
        setOffsetX(-offsetX);
    };

    // ДЛЯ ТАЧ-СКРИНОВ
    let x1: number | null = null
    let y1: number | null = null

    const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
        const firstTouch = event.touches[0]
        x1 = firstTouch.clientX
        y1 = firstTouch.clientY
    };

    const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
        if (!x1 || !y1) return;
        let x2 = e.changedTouches[0].clientX;
        let y2 = e.changedTouches[0].clientY;
        let xDiff = x2 - x1;
        let yDiff = y2 - y1;
        const maxOffsetX = itemWidth * (data.length - 1);

        if (Math.abs(xDiff) > Math.abs(yDiff)) {
            if (xDiff > 0) {
                if (offsetX === 0) return;
                setActiveDot(prev => prev - 1)
                refUl.current!.style.transform = `translateX(${setOffsetX(prev => prev + itemWidth)}px)`
            }
            else {
                if (offsetX === -maxOffsetX) return;
                setActiveDot(prev => prev + 1)
                refUl.current!.style.transform = `translateX(${setOffsetX(prev => prev - itemWidth)}px)`
            }
        }
        x1 = null
        y1 = null
    };

    return (
        <div
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="w-full mx-auto overflow-hidden max-w-[100%] pl-4"
        >
            <Switch cards={data} activeDot={activeDot} changeSlider={handleChangeSlider} />
            <ul
                ref={refUl}
                style={{ transform: `translateX(${offsetX}px)` }}
                className="flex gap-4 transition-transform duration-500 ease-in-out"
            >
                {data.map(item => (<Card key={item.id} {...item} />))}
                {width > 900 && data.map(item => (<Card key={`${item.id}-copy`} {...item} />))}
            </ul>
        </div>
    );
};














































// import { Card } from '../card/Card';
// import { Switch } from '../switch/Switch';
// import { data } from '@/public/data/data'; // Предполагается, что данные загружаются с сервера
// import { useResize } from '@/shared/hook/useResize';
// import React, { useEffect, useRef, useState } from 'react';

// const Slider: React.FC<{ initialData: any }> = ({ initialData }) => {
//     const width = useResize();
//     const itemWidth = width < 900 ? 358 + 16 : 412; // ширина одного элемента слайдера

//     const [offsetX, setOffsetX] = useState(0);
//     const totalWidth = itemWidth * initialData.length; // общая ширина всех элементов
//     const requestRef = useRef(0); // ссылка на requestAnimationFrame
//     const lastUpdateTime = useRef(Date.now()); // время последнего обновления
//     const delay = 1000 / 60; // задержка для 60 FPS

//     const refUl = React.useRef<HTMLUListElement>(null);

//     const animate = () => {
//         const currentTime = Date.now();
//         const elapsedTime = currentTime - lastUpdateTime.current;
//         if (elapsedTime > delay) {
//             setOffsetX(prev => {
//                 const newOffset = prev - 1;
//                 return newOffset <= -totalWidth ? 0 : newOffset;
//             });
//             lastUpdateTime.current = currentTime;
//         }
//         requestRef.current = requestAnimationFrame(animate);
//     };

//     useEffect(() => {
//         if (width < 900) return;
//         requestRef.current = requestAnimationFrame(animate);
//         return () => {
//             cancelAnimationFrame(requestRef.current);
//         };
//     }, [width]);

//     // ДЛЯ МОБИЛЬНОГО ВИДА (Switch)
//     const [activeDot, setActiveDot] = React.useState(1);

//     const handleChangeSlider = (id: number) => {
//         const offsetX = itemWidth * (id - 1);
//         setActiveDot(id);
//         setOffsetX(-offsetX);
//     };

//     // ДЛЯ ТАЧ-СКРИНОВ
//     let x1: number | null = null;
//     let y1: number | null = null;

//     const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
//         const firstTouch = event.touches[0];
//         x1 = firstTouch.clientX;
//         y1 = firstTouch.clientY;
//     };

//     const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
//         if (!x1 || !y1) return;
//         let x2 = e.changedTouches[0].clientX;
//         let y2 = e.changedTouches[0].clientY;
//         let xDiff = x2 - x1;
//         let yDiff = y2 - y1;
//         const maxOffsetX = itemWidth * (initialData.length - 1);

//         if (Math.abs(xDiff) > Math.abs(yDiff)) {
//             if (xDiff > 0) {
//                 if (offsetX === 0) return;
//                 setActiveDot(prev => prev - 1);
//                 setOffsetX(prev => prev + itemWidth);
//             } else {
//                 if (offsetX === -maxOffsetX) return;
//                 setActiveDot(prev => prev + 1);
//                 setOffsetX(prev => prev - itemWidth);
//             }
//         }
//         x1 = null;
//         y1 = null;
//     };

//     return (
//         <div
//             onTouchStart={handleTouchStart}
//             onTouchEnd={handleTouchEnd}
//             className="w-full mx-auto overflow-hidden max-w-[100%] pl-4"
//         >
//             <Switch cards={initialData} activeDot={activeDot} changeSlider={handleChangeSlider} />
//             <ul
//                 ref={refUl}
//                 style={{ transform: `translateX(${offsetX}px)` }}
//                 className="flex gap-4 transition-transform duration-500 ease-in-out"
//             >
//                 {initialData.map(item => (<Card key={item.id} {...item} />))}
//                 {width > 900 && initialData.map(item => (<Card key={`${item.id}-copy`} {...item} />))}
//             </ul>
//         </div>
//     );
// };

// export const getServerSideProps = async () => {
//     // Здесь вы можете загрузить данные, которые нужны для слайдера
//     const response = await fetch('/api/data'); // замените на ваш URL
//     const initialData = await response.json(); // предположим, что данные приходят в формате JSON

//     return {
//         props: {
//             initialData,
//         },
//     };
// };

// export default Slider;
