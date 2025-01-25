import Image from 'next/image'
import React from 'react'

export const Card: React.FC = () => {
    return (
        <li className="flex-none">
            <article className="rounded-[8px] bg-darkWhite p-6 max-w-[412px] w-[100%] h-[256px]">

                <div className='flex flex-col flex-grow h-full'>
                    <div>
                        <Image src="/images/cards/1.svg" width={80} height={80} alt="image" />
                    </div>
                    <h4 className="card">Анализ текущего состояния карьеры</h4>
                </div>

                <p className="cardDescMobile lg:hidden">Проведем оценку вашего кейса и создадим стратегию для дальнейшего карьерного развития.</p>

            </article>
        </li>
    )
}
