import React, { useState } from "react";
import { Avatar, InputWithChild, Toggle, CardShow } from "../components";
import { QuestionMarkCircleIcon } from "@heroicons/react/solid";
import { pokemon } from "../testComponent";
import axios from "axios";
import "../styles/home.css";

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
        <div className="p-5 col-start-1 col-end-2">
          <Toggle enabled={enabled} setEnabled={() => setEnabled(!enabled)} />
        </div>
        <div className="p-5 bg-white col-end-7 col-span-2">
          <Avatar
            href="#"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            text={{ text: "Welcome!", textColor: "text-blue font-bold" }}
            name={{ text: "Pokemon", textColor: "text-blue font-bold" }}
          />
        </div>
      </header>
      <div className="p-3 flex items-start justify-start bg-white">
        <div className="w-full max-w-xs">
          <InputWithChild
            input={{
              type: "text",
              name: "text",
              id: "Input",
              placeholder: "placeholder",
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
                    className="h-5 w-5 text-blue-dark"
                    aria-hidden="true"
                  />
                </a>
              </button>
            }
          />
        </div>
      </div>
      <div className="p-10">
        <CardShow showData={pokemon} handleInfo={goInfo} handleFav={clickFav} />
      </div>
    </>
  );
};

export default Homepage;
