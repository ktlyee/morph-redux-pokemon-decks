import React, { useState } from "react";
import { Avatar, InputWithChild, Toggle, CardShow } from "../components";
import { QuestionMarkCircleIcon } from "@heroicons/react/solid";
import { pokemon } from "../testComponent";
import axios from "axios";
import "../styles/home.css";

const user = {
  username: 'John Doe',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  email: 'JohnDoe@gmail.com'
}

const goInfo = () => {
  return console.log("click Info");
};

const clickFav = () => {
  return console.log("click Fav");
};

const Homepage = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <>
    <header className="Home-header grid grid-cols-1">
      <div className="p-5 col-end-1 justify-self-start self-center">
        <Toggle enabled={enabled} setEnabled={() => setEnabled(!enabled)} />
      </div>
      <div className="col-start-1 justify-self-center">
        <img
          className="h-auto w-72 ml-36"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png"
          alt="pokemon-logo"
        />
      </div>
      <div className="p-5 bg-white col-end-7 col-span-2">
        <Avatar
          href="#"
          alt="img loading..."
          src={user.avatar? user.avatar : "https://image.flaticon.com/icons/png/512/147/147144.png"}
          text={{ text: "Welcome!", textColor: "text-blue font-bold" }}
          name={{ text: `${user.username}`, textColor: "text-blue font-bold" }}
        />
      </div>
    </header>
    <div className="p-3 mt-3 flex items-start justify-start bg-white">
      <div className="w-full max-w-xs">
        <InputWithChild
          input={{
            type: "text",
            name: "text",
            id: "Input",
            placeholder: "",
            style: "border-blue p-3 text-blue-darkest",
            focusStyle:
              "focus:ring-2 focus:ring-blue-darkest focus:border-blue-dark",
          }}
          isCheckValid={false}
          CheckValidation={{
            ariaInvalid: false,
            defaultValue: "asdfgg",
            ariaDescribedby: "input-error",
          }}
          invalidText={{
            text: "Invalid search",
            style: "mt-2 text-sm text-red",
            id: "input-error",
          }}
          RigthChild={
            <button className="absolute inset-y-0 right-0 pt-1 pr-3 flex items-center cursor-pointer">
              <a href="#">
                <QuestionMarkCircleIcon
                  className="w-7 h-7 text-blue-dark"
                  aria-hidden="true"
                />
              </a>
            </button>
          }
        />
      </div>
    </div>
    <div className="p-12 mb-14">
      <CardShow showData={pokemon} handleInfo={goInfo} handleFav={clickFav} />
    </div>
    <div>
        {/* <Pagination pages={[{pageNumber: 1, href: "", currentPage: true }]} text={} borderColor="" activePage={} prevButton={} nextButton={}/> */}
    </div>
  </>
  );
};

export default Homepage;
