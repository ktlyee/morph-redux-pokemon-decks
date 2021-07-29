import React, { useState, useEffect } from "react";
import { Avatar, InputWithChild, Toggle, CardShow, Pagination } from "../components";
import { QuestionMarkCircleIcon } from "@heroicons/react/solid";
import { pokemon } from "../testComponent";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import "../styles/home.css";
import axios from "axios";

const goInfo = () => {
  return console.log("click Info");
};

const clickFav = () => {
  return console.log("click Fav");
};

// const handleClick = ({}) => {
//   axios.get("https://pokeapi.co/api/v2/pokemon?limit=6&offset=1").then((res) => {
//     console.log(res.data);
//     console.log(res.data.results);
//   }) 
// }

const Homepage = () => {
  const [enabled, setEnabled] = useState(false);
  const [allData, setAllData] = useState([])
  const [pokemonData, setPokemonData] = useState([])
  const [filteredData,setFilteredData] = useState(allData)

  const user = useAppSelector(state => state.auth)

  useEffect(() => {
    axios('https://pokeapi.co/api/v2/pokemon')
    .then((response) => {
        console.log(response.data.results)
        setAllData(response.data.results)
        setFilteredData(response.data.results)
        getPokemonData(response.data.results)
    }).catch((error) => {
        console.log('Error getting data: ' + error)
    })
  }, [])

  const getPokemonData = async (result: any) => {
    await Promise.all(
      result.map((pokemon: any) => {
        return axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
          .then((result) => {
            setPokemonData(result.data.sprites)
          })
      })
    )
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
            src={user.avatar? user.avatar : "https://www.slot1234.com/asset/web/images/icon/icon-default-avatar.png"}
            text={{ text: "Welcome!", textColor: "text-blue font-bold" }}
            name={{ text: `${user.username}`, textColor: "text-blue font-bold" }}
          />
        </div>
      </header>
      <div className="p-3 flex items-start justify-start bg-white">
        <div className="w-full max-w-xs ml-32">
          <label>Search:</label>
          <input 
            type="text" 
            onChange={(event) =>handleSearch(event)}
            className='border boder-gray-800'
          />  
          {/* <InputWithChild
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
          /> */}
        </div>
      </div>
      <div className="p-14 mb-14">
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {
            filteredData.map((data: any, index: number) => (
              pokemonData.map((pokemon: any) => (
                <div key={index}>
                <CardShow 
                  showData={[
                    { id: `${index}`, name: `${data.name}`, isFav: false, imageUrl: `${pokemon.front_default}`, bgCard: 'bg-yellow'}
                  ]} 
                  handleInfo={goInfo} 
                  handleFav={clickFav} 
                />
              </div>
              ))
            ))
          }
        </div>
      </div>
      <div>
          {/* <Pagination pages={[{pageNumber: 1, href: "", currentPage: true }]} text={} borderColor="" activePage={} prevButton={} nextButton={}/> */}
      </div>
    </>
  );
};

export default Homepage;
