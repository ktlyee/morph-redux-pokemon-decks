import React from 'react'
import './avatar.css'

interface Istyle {
  text: string
  textColor: string
}

export interface AvatarTextProps {
  name: Istyle
  text: Istyle
  href: string
  src: string
  alt?: string
}

const Avatar = ({href, src, name, text, alt}: AvatarTextProps) => {
  return (
    <a href={href} className="flex-shrink-0 group block">
      <div className="flex items-center">
        <div className="mr-3">
          <p className={`avatar-text ${text.textColor}`}>{text.text}</p>
          <p className={`avarat-name ${name.textColor}`}>{name.text}</p>
        </div>
        <div>
          <img className="avatar-img" src={src} alt={alt}/>
        </div>
      </div>
    </a>
  )
}

export default Avatar

