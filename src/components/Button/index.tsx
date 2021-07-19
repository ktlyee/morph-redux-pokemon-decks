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
    size?: 'small' | 'medium' | 'large' | 'full'
    handleClick?: () => void
}

const Button = ({
    text,
    buttonColor,
    icon,
    borderColor,
    hoverButton,
    focusButton = 'focus:ring-transparent',
    size = 'medium',
    handleClick
}: ButtonProps) => (
    <button
        type="button"
        onClick={handleClick}
        className={`button button-${size} ${text.color} ${borderColor} ${buttonColor} ${hoverButton} ${focusButton}`}
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