import React from 'react'

interface TitleProps {
    children: React.ReactNode
}

export const Title: React.FC<TitleProps> = ({ children }) => {
    return (
        <div className="title">
            <span>1.0</span>
            <h3>{children}</h3>
        </div>
    )
}
