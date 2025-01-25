import Image from 'next/image'
import React from 'react'

export const Card: React.FC = () => {
    return (
        <li className="flex-none cursor-grab" >
            <article className="flex flex-col rounded-[8px] bg-darkWhite p-4 max-w-[358px] w-[100%] h-[212px] lg:max-w-[412px] lg:h-[256px] lg:p-6">

                <div className='flex flex-row content-start items-stretch gap-6 flex-grow h-full tablet:flex-col tablet:gap-0 tablet:items-start'>
                    <div className='w-[60px] h-[60px] tablet:w-[80px] tablet:h-[80px]'>
                        {/* <Image
                            src="/images/cards/1.svg"
                            width={80}
                            height={80}
                            alt="image"
                        /> */}
                        <img src="/images/cards/1.svg" alt="image slider" />
                    </div>
                    <h4 className="card ml-auto">Тренинг по презентации личного бренда</h4>
                </div>

                <p className="cardDescMobile tablet:hidden">
                    Проведем оценку вашего кейса и создадим стратегию для дальнейшего карьерного развития.
                </p>

            </article>
        </li>
    )
}
