import React from 'react'

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
          <p className={`text-2xl font-quicksand m-0 ${text.textColor}`}>{name.text}</p>
          <p className={`text-xl font-quicksand m-0 ${text.textColor}`}>{text.text}</p>
        </div>
        <div>
          <img className="inline-block h-20 w-20 rounded-full" src={src} alt={alt}/>
        </div>
      </div>
    </a>
  )
}

export default Avatar

