import React from "react";
import { InformationCircleIcon, HeartIcon } from "@heroicons/react/solid";

interface Idata {
  id: string
  name: string
  isFav: boolean
  imageUrl: string
}

export interface CardShowProp {
  showData: Idata[]
  handleInfo: () => void
  handleFav: () => void
}

const CardShow = ({showData, handleInfo, handleFav}: CardShowProp) => {
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {showData.map((showData) => (
        <li
          key={showData.id}
          className="col-span-1 flex flex-col text-center bg-white-smoke rounded-2xl shadow-lg"
        >
          <div>
            <div className="-mt-px flex">
              <button className="w-0 flex-1 flex p-2" onClick={handleInfo}>
                <InformationCircleIcon className="h-6 w-6 text-blue-darkest hover:text-blue"/>
              </button>
              <button className="-ml-px w-0 flex-1 flex flex-row-reverse p-2" onClick={handleFav}>
                <HeartIcon className={`h-6 w-6 ${showData.isFav? 'text-red-dark hover:text-red' : ''}`}/>
              </button>
            </div>
          </div>
          <div className="flex-1 flex flex-col p-8">
            <img
              className="w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-md"
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
