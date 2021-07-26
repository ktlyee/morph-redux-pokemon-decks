import React, { useState } from "react";
import { Avatar, InputWithChild, Toggle, CardShow, Pagination } from "../components";
import { QuestionMarkCircleIcon } from "@heroicons/react/solid";
import { pokemon } from "../testComponent";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { Redirect } from "react-router";
import "../styles/home.css";

const goInfo = () => {
  return console.log("click Info");
};

const clickFav = () => {
  return console.log("click Fav");
};

const Homepage = () => {
  const [enabled, setEnabled] = useState(false);

  const user = useAppSelector(state => state.auth)

  if(user === null) {
    return <Redirect to='/' />
  }

  return (
    <>
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
            src={user.avatar == {} ? user.avatar : "https://image.flaticon.com/icons/png/512/147/147144.png"}
            text={{ text: "Welcome!", textColor: "text-blue font-bold" }}
            name={{ text: `${user.username}`, textColor: "text-blue font-bold" }}
          />
        </div>
      </header>
      <div className="p-3 flex items-start justify-start bg-white">
        <div className="w-full max-w-xs ml-32">
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
      <div className="p-14 mb-14">
        <CardShow showData={pokemon} handleInfo={goInfo} handleFav={clickFav} />
      </div>
      <p>{user.email}</p>
      <div>
          {/* <Pagination pages={[{pageNumber: 1, href: "", currentPage: true }]} text={} borderColor="" activePage={} prevButton={} nextButton={}/> */}
      </div>
    </>
  );
};

export default Homepage;
