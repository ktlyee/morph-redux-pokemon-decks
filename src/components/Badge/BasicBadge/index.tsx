import React from 'react'

interface BasicBadgeProps {
    text: string
    textStyle: string
    backgroundColor: string
    positionStyle?: string
}

const BasicBadge = ({
    text,
    textStyle,
    backgroundColor,
    positionStyle
}: BasicBadgeProps) => (
    <span className={`inline-flex items-center px-3 rounded-xl shadow-md ${positionStyle} ${textStyle} ${backgroundColor}`}>
        {text}
    </span>
)

export default BasicBadge
