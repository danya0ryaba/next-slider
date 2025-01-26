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

    return (
        <div className="w-full mx-auto overflow-hidden max-w-[100%] pl-4">
            <Switch cards={data} activeDot={activeDot} changeSlider={handleChangeSlider} />
            <ul
                style={{ transform: `translateX(${offsetX}px)` }}
                className="flex gap-4 transition-transform duration-500 ease-in-out"
            >
                {data.map(item => (<Card key={item.id} {...item} />))}
                {data.map(item => (<Card key={`${item.id}-copy`} {...item} />))}
            </ul>
        </div>
    );
};
