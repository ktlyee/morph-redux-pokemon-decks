import React, { useEffect, useState } from "react";
import { SearchIcon, HeartIcon } from "@heroicons/react/solid";
import axios from "axios";
import ReactPaginate from 'react-paginate';

import { InputWithChild, CardShow, Button, Navbar, Pagination } from "../components";
import '../styles/home.css'

const Homepage = (props: any) => {
  const [allData, setAllData] = useState([])
  const [filteredData,setFilteredData] = useState(allData)
  const [offset, setOffset] = useState(0)
  const [limitCard, setLimitCard] = useState<number>(20)
  const [currentPage, setCurrentPage] = useState(0)
  const [pageCount, setPageCount] = useState<number>(0)

  let cardMax: number = 20

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limitCard}&offset=${offset}`)
    .then((res) => {
      const api = res.data;
      setPageCount(Math.ceil(api.count / limitCard))
      getPokemonData(api.results)
    })
  }, [])

  const getPokemonData = async (result: any) => {
    const pokemonArr: any = [];
    await Promise.all(
      result.map((pokemonItem: any) => {
        return axios
          .get(`https://pokeapi.co/api/v2/pokemon/${pokemonItem.name}`)
          .then((result: any) => {
            pokemonArr.push(result.data)
          })
        })
    )
    pokemonArr.sort((a: any, b: any) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0))
    const slice = pokemonArr.slice(offset, offset + limitCard)
    setAllData(slice)
    setFilteredData(slice)
    // setAllData(pokemonArr)
    // setFilteredData(pokemonArr)
  }

  const handleSearch = (event: any) => {
    let value = event.target.value.toLowerCase()
    let result = []
    result = allData.filter((data: any) => {
        return data.name.search(value) != -1
    })
    setFilteredData(result)
  }

  const handlePageClick = (e: any) => {
    const selectedPage = e.selected
    const offset = selectedPage * limitCard

    setCurrentPage(selectedPage)
    setOffset(offset)
  }

  return (
    <>
      <Navbar />
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
                    { 
                      id: `${index}`, 
                      name: `${data.name}`, 
                      imageUrl: `${data.sprites.other.dream_world.front_default}`, 
                      bgCard: 'bg-purple'
                    }
                  ]} 
                  isFav={false}
                />
              </div> 
            ))
          }
        </div> 
      </div>
      <div>
        <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          // subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </div>
    </>
  );
};

export default Homepage;