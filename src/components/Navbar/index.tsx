import React from 'react'
import Avatar from '../Avatar'
import Toggle from '../Toggle'
import './navbar.css'

interface IToggle {
    enabled: boolean
    setEnabled: () => void
}

interface NavbarProps {
    username: string
    toggle: IToggle
}

const Navbar = ({ username, toggle }: NavbarProps) => (
    <header className="Home-header grid grid-cols-1">
        <div className="p-5 col-start-1">
          <Toggle enabled={toggle.enabled} setEnabled={toggle.setEnabled} />
        </div>
        <div>
          <img
            className="h-auto w-72 ml-36"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png"
            alt="pokemon-logo"
          />
        </div>
        <div className="p-5 bg-white col-end-7 col-span-2">
          <Avatar
            href="#"
            src="https://www.slot1234.com/asset/web/images/icon/icon-default-avatar.png"
            text={{ text: "Welcome!", textColor: "text-blue font-bold" }}
            name={{ text: `${username}`, textColor: "text-blue font-bold" }}
          />
        </div>
    </header>
)

export default Navbar