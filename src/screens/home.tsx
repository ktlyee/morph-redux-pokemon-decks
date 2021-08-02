import React, { useEffect, useState } from "react";
import { SearchIcon, HeartIcon } from "@heroicons/react/solid";
import { useAppSelector } from "../app/hooks";
import "../styles/home.css";
import axios from "axios";

import { Avatar, InputWithChild, Toggle, CardShow, Button } from "../components";

const Homepage = (props: any) => {
  const [enabled, setEnabled] = useState(false)
  const [allData, setAllData] = useState([])
  const [filteredData,setFilteredData] = useState(allData)
  const user = useAppSelector(state => state.auth)

  let cardMax: number = 20

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${cardMax}&offset=1`)
    .then((res) => {
      const api = res.data;
      getPokemonData(api.results)
    })
  }, [])

  const getPokemonData = async (result: any) => {
    const pokemonArr: any = [];
    await Promise.all(
      result.map((pokemonItem: any) => {
        return axios
          .get(`https://pokeapi.co/api/v2/pokemon/${pokemonItem.name}`)
          .then((result) => {
            pokemonArr.push(result.data)
          });
        })
    );
    setAllData(pokemonArr)
    setFilteredData(pokemonArr)
  }

  const handleSearch = (event: any) => {
    let value = event.target.value.toLowerCase()
    let result = []
    result = allData.filter((data: any) => {
        return data.name.search(value) != -1
    })
    setFilteredData(result)
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
            src="https://www.slot1234.com/asset/web/images/icon/icon-default-avatar.png"
            text={{ text: "Welcome!", textColor: "text-blue font-bold" }}
            name={{ text: `${user.username}`, textColor: "text-blue font-bold" }}
          />
        </div>
      </header>
      <div className="relative inline-flex bg-white w-full">
        <div className="w-full max-w-xs absolute left-36 top-3">
          <InputWithChild
            input={{
              type: "text",
              name: "search",
              id: "search",
              placeholder: "",
              style: "border-blue p-3 text-blue-darkest",
              focusStyle:
                "focus:ring-2 focus:ring-blue-darkest focus:border-blue-dark",
            }}
            RightChild={
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <SearchIcon className="w-5 h-5 text-blue-dark" aria-hidden="true" />
              </div>
            }
            onChange={(event) => handleSearch(event)}
          />
        </div>
        <div className='absolute top-6 right-32'>
          <Button 
            type='button'
            text={{ text: 'Favorite Cards', color: 'text-yellow-light font-medium' }}
            icon={{ icon: <HeartIcon />, color: 'text-yellow-light' }}
            buttonColor='bg-blue-dark'
            borderColor='rounded-lg'
            hoverButton='hover:bg-blue'
            handleClick={() => props.history.push('/favorite')}
          />
        </div>
      </div>
      <div className="mt-28 mb-14 ml-60">
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {
            filteredData.map((data: any, index: number) => (
              <div key={index}>
                <CardShow 
                  showData={[
                    { id: `${index}`, name: `${data.name}`, imageUrl: `${data.sprites.other.dream_world.front_default}`, bgCard: 'bg-purple' }
                  ]} 
                  // handleFav={() => handleFavorite(`${data.name}`)} 
                />
              </div> 
            ))
          }
        </div> 
      </div>
    </>
  );
};

export default Homepage;