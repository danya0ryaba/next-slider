'use client';

import React from 'react'

export const Switch: React.FC = () => {
    return (
        <div>
            <ul onClick={(e) => { console.log(e.currentTarget) }} className='flex gap-2 mb-6'>
                <li className='w-2 h-2 bg-gray rounded-full cursor-pointer'></li>
                <li className='w-2 h-2 bg-gray rounded-full cursor-pointer'></li>
                <li className='w-2 h-2 bg-gray rounded-full cursor-pointer'></li>
                <li className='w-2 h-2 bg-gray rounded-full cursor-pointer'></li>
                <li className='w-2 h-2 bg-gray rounded-full cursor-pointer'></li>
                <li className='w-2 h-2 bg-gray rounded-full cursor-pointer'></li>
            </ul>
        </div>
    )
}
