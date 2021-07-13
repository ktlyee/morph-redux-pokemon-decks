import React from 'react'

interface BadgeProps {
    text: string
    textStyle: string
    backgroundColor: string
}

const Badge = ({
    text,
    textStyle,
    backgroundColor
}: BadgeProps) => (
    <span className={`inline-flex items-center px-5 py-1.5 rounded-full ${textStyle} ${backgroundColor}`}>
        {text}
    </span>
)

export default Badge