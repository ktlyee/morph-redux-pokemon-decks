import React from 'react'
import './button.css'

interface IText {
    text: string
    color: string
}

interface IIcon {
    icon?: React.ReactNode
    color?: string
}

interface ButtonProps {
    text: IText
    buttonColor: string
    icon?: IIcon
    borderColor?: string
    hoverButton?: string
    focusButton?: string
    size?: 'small' | 'medium' | 'large'
    handleClick?: () => void
    positionStyle?: string
}

const Button = ({
    text,
    buttonColor,
    icon,
    hoverButton,
    focusButton = 'focus:ring-transparent',
    size = 'medium',
    handleClick,
    positionStyle
}: ButtonProps) => (
    <button
        type="button"
        onClick={handleClick}
        className={`button button-${size} ${text.color} ${buttonColor} ${hoverButton} ${focusButton} ${positionStyle}`}
    >
        {
            icon !== undefined && 
            <div className={`icon-${size} ${icon.color}`} aria-hidden="true">
                {icon.icon}  
            </div>
        }
        {text.text}
    </button>
)

export default Button