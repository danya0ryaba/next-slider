import React from 'react'
import { CardType } from '@/app/api/slider/data';

interface SwitchProps {
    cards: CardType[];
    activeDot: number;
    changeSlider: (id: number) => void
}
export const Switch: React.FC<SwitchProps> = ({
    cards,
    activeDot,
    changeSlider,
}) => {
    return (
        <ul className='gap-2 mb-6 flex tablet:hidden'>
            {
                cards.map((item) => (<li
                    key={item.id}
                    onClick={() => changeSlider(item.id)}
                    className={activeDot === item.id ? 'dot active' : 'dot'}
                />))
            }
        </ul>
    )
}
