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
    type?: 'button' | 'submit' | 'reset'
    icon?: IIcon
    borderColor?: string
    hoverButton?: string
    focusButton?: string
    positionStyle?: string
    size?: 'small' | 'medium' | 'large' | 'full'
    handleClick?: () => void
}

const Button = ({
    text,
    buttonColor,
    type,
    icon,
    borderColor,
    hoverButton,
    positionStyle,
    focusButton = 'focus:ring-transparent',
    size = 'medium',
    handleClick
}: ButtonProps) => (
    <button
        type={type}
        onClick={handleClick}
        className={`button button-${size} ${text.color} ${borderColor} ${buttonColor} ${hoverButton} ${focusButton} ${positionStyle}`}
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