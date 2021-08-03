import React, { useState } from 'react'
import { useAppSelector } from '../../app/hooks'
import Avatar from '../Avatar'
import Toggle from '../Toggle'
import './navbar.css'

const Navbar = () => {
  const [enabled, setEnabled] = useState<boolean>(false)
  
  const user = useAppSelector(state => state.auth)

 return (
    <header className="Home-header grid grid-cols-1">
        <div className="p-5 col-start-1">
          <Toggle enabled={enabled} setEnabled={() => setEnabled(!enabled)} />
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
            name={{ text: `${user.username}`, textColor: "text-blue font-bold" }}
          />
        </div>
    </header>
  )
}

export default Navbar