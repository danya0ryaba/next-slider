import React from 'react'

import { CardType } from '@/public/data/data'

export const Card: React.FC<CardType> = ({
    id,
    img,
    title,
    description
}) => {
    return (
        <li className="flex-none cursor-grab" id={String(id)}>
            <article className="flex flex-col rounded-[8px] bg-darkWhite p-4 w-[358px] h-[212px] lg:w-[412px] lg:h-[256px] lg:p-6">

                <div className='flex flex-row content-start items-stretch gap-6 flex-grow h-full tablet:flex-col tablet:gap-0 tablet:items-start'>
                    <div className='w-[60px] h-[60px] tablet:w-[80px] tablet:h-[80px]'>
                        <img src={img} alt="image slider" />
                    </div>
                    <h4 className="card">{title}</h4>
                </div>

                <p className="cardDescMobile tablet:hidden">
                    {description}
                </p>

            </article>
        </li>
    )
}
