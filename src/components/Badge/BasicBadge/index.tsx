import React from 'react'

interface BasicBadgeProps {
    text: string
    textStyle: string
    backgroundColor: string
}

const BasicBadge = ({
    text,
    textStyle,
    backgroundColor
}: BasicBadgeProps) => (
    <span className={`inline-flex items-center px-5 py-2 rounded-full shadow-md ${textStyle} ${backgroundColor}`}>
        {text}
    </span>
)

export default BasicBadge
