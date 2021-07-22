import React, { useState } from "react";
import { MailIcon, QuestionMarkCircleIcon } from "@heroicons/react/solid";
import { Avatar, InputWithChild, Toggle, CardShow } from "./components";
import axios from "axios";

export const pokemon = [
  {
    id: "1",
    name: "Pokemon1",
    isFav: true,
    imageUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png",
    bgCard: 'bg-purple'
  },
  {
    id: "2",
    name: "Pokemon2",
    isFav: true,
    imageUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png",
    bgCard: 'bg-purple'
  },
  {
    id: "3",
    name: "Pokemon3",
    isFav: false,
    imageUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png",
    bgCard: 'bg-purple'
  },
  {
    id: "4",
    name: "Pokemon4",
    isFav: false,
    imageUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png",
    bgCard: 'bg-purple'  
  },
];

const handleClick = ({}) => {
  axios.get("https://pokeapi.co/api/v2/pokemon/ditto").then((res) => {
    console.log(res.data);
  }) 
}

const goInfo = () => {
  return console.log("click Info");
}

const clickFav = () => {
  return console.log("click Fav");
}

const TestComponent = () => {
  const [enabled, setEnabled] = useState(false)

  return (
    <>
      <div className="p-5 bg-white grid justify-end">
        <Avatar
          href="#"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          text={{ text: "Welcome!", textColor: "text-blue font-bold" }}
          name={{ text: "Pokemon", textColor: "text-blue font-bold" }}
        />
      </div>
      <div className="p-5 grid justify-start">
        <Toggle enabled={enabled} setEnabled={() => setEnabled(!enabled)}/>
      </div>
      <div className="p-3 flex items-center justify-center bg-white">
        <div className="w-full max-w-xs mx-auto">
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
        <CardShow showData={pokemon} handleInfo={goInfo} handleFav={clickFav}/>
      </div>
      <button className="h-10 w-20 text-white bg-blue-dark rounded-md hover:bg-blue-dark" onClick={handleClick}> Test this </button>
    </>
  );
};

export default TestComponent;
