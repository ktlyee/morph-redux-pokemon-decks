import React, { useState } from "react";
import { useAppDispatch } from "../../../app/hooks";
import './cardShow.css'
import { InformationCircleIcon, HeartIcon } from "@heroicons/react/solid";
import CardInfo from "../CardInfo";
import { addFavorite, removeFavorite } from "../../../reducers/favorite";

export interface Idata {
  id: string
  name: string
  imageUrl: string
  bgCard: string
  key?: string
}

export interface CardShowProp {
  showData: Idata[]
  isFav: boolean
}

interface IHandleFavorite {
  name: string
  image: string
}

const CardShow = ({ showData, isFav }: CardShowProp) => {
  const dispatch = useAppDispatch()
  const [openCard, setOpenCard] = useState(false)
  const [favoriteCard, setFavoriteCard] = useState(isFav)

  const handleFavorite = (pokemon: IHandleFavorite) => {
      dispatch(addFavorite(pokemon))
      setFavoriteCard(true)
  }

  const handleRemoveFavorite = (key: string) => {
    dispatch(removeFavorite(key))
    // setFavoriteCard(false)
  }

  return (
    <ul className="card-show">
      {showData.map((showData) => (
        <>
          {
            openCard &&
            <CardInfo pokemonName={showData.name} isOpen={openCard} handleClose={() => setOpenCard(false)} />
          }
          <li
            key={showData.id}
            className={`card-poke ${showData.bgCard} transform hover:scale-110 motion-reduce:transform-none`}
          >
            <div>
              <div className="-mt-px flex">
                <button className="w-0 flex-1 flex p-2" onClick={() => setOpenCard(true)}>
                  <InformationCircleIcon className="h-7 w-7 text-blue-darkest hover:text-blue"/>
                </button>
                <button className="-ml-px w-0 flex-1 flex flex-row-reverse p-2" onClick={() => favoriteCard ? handleRemoveFavorite(`${showData.key}`) : handleFavorite({name: showData.name, image: showData.imageUrl})}>
                  <HeartIcon className={`h-7 w-7 ${favoriteCard ? 'text-red' : 'text-blue-darkest hover:text-red-dark'}`}/>
                </button> 
              </div>
            </div>
            <div className="flex-1 flex flex-col p-7" onClick={() => setOpenCard(true)}>
              <img
                className="w-36 h-36 flex-shrink-0 mx-auto bg-black rounded-md"
                src={showData.imageUrl}
                alt=""
              />
              <h3 className="mt-6 text-gray-900 font-press-start text-sm font-medium capitalize ">
                {showData.name}
              </h3>
              <h3 className="mt-4 text-gray-900 font-quicksand text-base font-medium">
                {showData.name}
              </h3>
            </div>
          </li>
        </>      
      ))}
    </ul>
  );
};

export default CardShow;
