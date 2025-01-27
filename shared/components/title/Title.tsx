import React from 'react'

interface TitleProps {
    children: React.ReactNode
    value?: string
}

export const Title: React.FC<TitleProps> = ({ children, value }) => {
    return (
        <div className="title">
            <span>{value}</span>
            <h3>{children}</h3>
        </div>
    )
}
