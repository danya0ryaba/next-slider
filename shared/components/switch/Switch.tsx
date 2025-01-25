'use client';

import { CardType } from '@/public/data/data';
import React from 'react'

interface SwitchProps {
    cards: CardType[];
}

export const Switch: React.FC<SwitchProps> = ({
    cards
}) => {
    return (
        <div>
            <ul className='flex gap-2 mb-6'>
                {/* может быть делигировать клик */}
                <li className='dot active'></li>
                {cards.map((item) => (<li onClick={() => console.log(item.id)} key={item.id} className='dot'></li>))}
            </ul>
        </div>
    )
}
