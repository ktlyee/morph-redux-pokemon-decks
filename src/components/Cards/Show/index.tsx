import React from "react";
import './cardShow.css'
import { InformationCircleIcon, HeartIcon } from "@heroicons/react/solid";

interface Idata {
  id: string
  name: string
  isFav: boolean
  imageUrl: string
  bgCard: string
}

export interface CardShowProp {
  showData: Idata[]
  handleInfo: () => void
  handleFav: () => void
}

const CardShow = ({showData, handleInfo, handleFav}: CardShowProp) => {
  return (
    <ul className="card-show">
      {showData.map((showData) => (
        <li
          key={showData.id}
          className={`card-poke ${showData.bgCard} transform hover:scale-110 motion-reduce:transform-none`}
        >
          <div>
            <div className="-mt-px flex">
              <button className="w-0 flex-1 flex p-2" onClick={handleInfo}>
                <InformationCircleIcon className="h-7 w-7 text-blue-darkest hover:text-blue"/>
              </button>
              <button className="-ml-px w-0 flex-1 flex flex-row-reverse p-2" onClick={handleFav}>
                <HeartIcon className={`h-7 w-7 ${showData.isFav? 'text-red-dark hover:text-red' : ''}`}/>
              </button>
            </div>
          </div>
          <div className="flex-1 flex flex-col p-7">
            <img
              className="w-36 h-36 flex-shrink-0 mx-auto bg-black rounded-md"
              src={showData.imageUrl}
              alt=""
            />
            <h3 className="mt-6 text-gray-900 font-press-start text-sm font-medium">
              {showData.name}
            </h3>
            <h3 className="mt-4 text-gray-900 font-quicksand text-base font-medium">
              {showData.name}
            </h3>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CardShow;
