import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { QuestionMarkCircleIcon } from '@heroicons/react/solid'
import { useFetchPokemonQuery } from '../reducers/pokemon'
import { CardShow } from '../components'

interface SearchProps {

}

const Search = ({}) => {
    const [allData, setAllData] = useState([])
    const [filteredData,setFilteredData] = useState(allData)

    // const [allData, setAllData] = useState(20)
    // const { data = [], isFetching } = useFetchPokemonQuery(allData)

    useEffect(() => {
        axios('https://pokeapi.co/api/v2/pokemon')
        .then((response) => {
            console.log(response.data.results)
            setAllData(response.data.results)
            setFilteredData(response.data.results)
        }).catch((error) => {
            console.log('Error getting data: ' + error)
        })
    }, [])

    const handleSearch = (event: any) => {
        let value = event.target.value.toLowerCase()
        let result = []
        result = allData.filter((data: any) => {
            return data.name.search(value) != -1
        })
        setFilteredData(result)
    }

    return (
        <div className='mt-20'>
            <div>
                <label>Search:</label>
                <input 
                    type="text" 
                    onChange={(event) =>handleSearch(event)}
                    className='border boder-gray-800'
                />  
            </div>
            <div className='mt-10'>
                {filteredData.map((data: any, index: number) => (
                    <div key={index}>
                        <CardShow 
                            showData={[
                                { id: `${index}`, name: `${data.name}`, isFav: false, imageUrl: '', bgCard: 'bg-yellow'}
                            ]} 
                            handleInfo={() => {}} 
                            handleFav={() => {}}/>
                        {/* <div>
                            {data.name}
                        </div> */}
                    </div>  
                ))}
            </div>
        </div>
    )
}

export default Search