/*
 * @TODO: remove console.log statements
 */
import React, { useEffect, useState } from "react";
import { SearchIcon } from "@heroicons/react/solid";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import axios from "axios";

import {
  Avatar,
  InputWithChild,
  Toggle,
  CardShow,
  Pagination,
} from "../components";
import { pokemon } from "../testComponent";
import "../styles/home.css";

const goInfo = () => {
  return console.log("click Info");
};

const clickFav = () => {
  return console.log("click Fav");
};

const Homepage = () => {
  const [enabled, setEnabled] = useState(false)
  const [allData, setAllData] = useState([])
  const [card, setCard] = useState(pokemon)
  const [filteredData,setFilteredData] = useState(allData)
  const user = useAppSelector(state => state.auth)

  let cardMax: number = 20

  useEffect(() => {
    try {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon?limit=${cardMax}&offset=1`)
        .then(async (res) => {
          const api = res.data;
          console.log(api.results);
          await getPokemonData(api.results);
        });
    } catch (err) {
      console.error(err.message);
    }
  }, []);

  const getPokemonData = async (result: any) => {
    const pokemonArr: any = [];
    await Promise.all(
      result.map((pokemonItem: any) => {
        return axios
          .get(`https://pokeapi.co/api/v2/pokemon/${pokemonItem.name}`)
          .then((result) => {
            // console.log(result.data);
            pokemonArr.push(result.data);
          });
      })
    );
    pokemonArr.sort((a: any, b: any) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0))
    console.log(pokemonArr);
    setAllData(pokemonArr);
    setCardData(allData);
  };

  const setCardData = (allData: any) => {
    let count = 0;
    const cardArr: any = [];
    console.log(allData);
    allData.forEach((element: any) => {
      let card = {
        id: count.toString(),
        name: element.species.name as string,
        isFav: false,
        imageUrl: element.sprites.front_default as string,
        bgCard: "bg-purple",
      };
      cardArr.push(card);
      count++;
    });
    setCard(cardArr);
  };

  const handleSearch = (event: any) => {
    let value = event.target.value.toLowerCase()
    let result = []
    result = allData.filter((data: any) => {
        return data.name.search(value) != -1
    })
    // setCard(result)
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
            src={
              user.avatar
                ? user.avatar
                : "https://www.slot1234.com/asset/web/images/icon/icon-default-avatar.png"
            }
            text={{ text: "Welcome!", textColor: "text-blue font-bold" }}
            name={{
              text: `${user.username}`,
              textColor: "text-blue font-bold",
            }}
          />
        </div>
      </header>
      <div className="p-3 flex items-start justify-start bg-white">
        <div className="w-full max-w-xs ml-32">
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
      </div>
      <div className="p-14 mb-14">
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {
            filteredData.map((data: any, index: number) => (
              <div key={index}>
                <CardShow 
                  showData={[
                    { id: `${index}`, name: `${data.name}`, isFav: false, imageUrl: `${data.sprites.front_default}`, bgCard: 'bg-yellow'}
                  ]} 
                  handleInfo={goInfo} 
                  handleFav={clickFav} 
                />
              </div> 
            ))
          }
        </div> 
        {/* <CardShow showData={card} handleInfo={goInfo} handleFav={clickFav} /> */}
      </div>
      <div className="p-14">
        <Pagination
          pages={[{ pageNumber: 1, href: "", currentPage: true }]}
          text={{
            textColor: "",
            fontWeight: "font-medium",
            fontSize: "text-sm",
          }}
          borderColor=""
          activePage="1"
          prevButton={() => {}}
          nextButton={() => {}}
        />
      </div>
    </>
  );
};

export default Homepage;