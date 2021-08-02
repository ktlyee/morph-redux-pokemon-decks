import React, { Fragment, useRef, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ArrowNarrowRightIcon, XIcon } from '@heroicons/react/outline'
import axios from 'axios'

import BasicBadge from '../../Badge/BasicBadge'
import './cardInfo.css'

interface InfoCardProps {
    isOpen: boolean
    pokemonName: string
    cardColor?: string
    backgroudTextColor?: string
    tagColor?: string
    circleColor?: string
    handleClose: () => void
}

export const InfoCard = ({
    isOpen,
    pokemonName,
    cardColor = 'bg-purple',
    backgroudTextColor = 'bg-yellow-lightest',
    tagColor = 'bg-blue-light',
    circleColor = 'bg-yellow',
    handleClose
}: InfoCardProps) => {
    const completeButtonRef = useRef(null)

    const [data, setData] = useState<any>({})
    const [abilities, setAbilities] = useState<any>([])
    const [about, setAbout] = useState('')
    const [genera, setGenera] = useState('')
    const [baseStats, setBaseStats] = useState<any>([])
    const [evolution, setEvolution] = useState<any>([])

    useEffect(() => {
        axios(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then((result) => {
            fetchPokemonData(result.data)
            fetchPokemonDescription(result.data.name)
        }).catch((error) => {
            console.log('Error getting data: ' + error)       
        })
    }, [])

    const fetchPokemonData = async (response: any) => {
        const data: any = {}, abilities: any = [], stats: any = []

        data['pokemonId'] = response.id
        data['pokemonName'] = response.name
        data['pokemonImage'] = response.sprites.other.dream_world.front_default ? response.sprites.other.dream_world.front_default : response.sprites.other['official-artwork'].front_default
        setData(data)

        for(let i = 0; i < response.abilities.length; i++) {
            abilities.push(response.abilities[i].ability.name)
        }
        setAbilities(abilities)   
        
        for (let i = 0; i < response.stats.length; i++) {
            const Obj: any = {}
            Obj['statName'] = response.stats[i].stat.name
            Obj['statVal'] = response.stats[i].base_stat
            stats.push(Obj)
        }
        setBaseStats(stats)
    }

    const fetchPokemonDescription = async (name: string) => {
        const response: any = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${name}`).catch((err) => console.log('Error: ', err))
        fetchEvolutionDetails(response.data.evolution_chain.url)
        let about: any, genera: any = ''

        for (let i = 0; i < response.data.flavor_text_entries.length - 1; i++) {
            if (response.data.flavor_text_entries[i].language.name === 'en') {
                about = response.data.flavor_text_entries[i].flavor_text
                break;
            }
        }
        setAbout(about)

        for (let i = 0; i < response.data.genera.length; i++) {
            if (response.data.genera[i].language.name === "en") {
                genera = response.data.genera[i].genus;
                break;
            }
        }
        setGenera(genera)
    }

    const fetchEvolutionDetails = async (url: string) => {
        const response: any = await axios.get(url).catch((err) => console.log('Error: ', err))
        const evoChain = []
        let evoData = response.data.chain

        do {
            evoChain.push({
                "speciesName": evoData.species.name
            })

            evoData = evoData['evolves_to'][0]
        } while (!!evoData && evoData.hasOwnProperty('evolves_to'))
        fetchEvoImages(evoChain)
    }

    const fetchEvoImages = async (evoChain: any) => {
        for (let i = 0; i < evoChain.length; i++) {
            const response: any = await axios.get(`https://pokeapi.co/api/v2/pokemon/${evoChain[i].speciesName}`).catch((err) => console.log('Error: ', err))
            response.data.sprites.other.dream_world.front_default ? evoChain[i]['imageUrl'] = response.data.sprites.other.dream_world.front_default : evoChain[i]['imageUrl'] = response.data.sprites.other['official-artwork'].front_default
        }
        setEvolution(evoChain)
    }

    return (
        <Transition.Root show={isOpen} as={Fragment}>
            <Dialog
                as="div" 
                static 
                className='fixed z-10 inset-0 overflow-y-auto' 
                initialFocus={completeButtonRef}
                open={isOpen} 
                onClose={handleClose}
            >
                <div className='flex items-center px-6 justify-center min-h-screen text-center sm:block sm:p-0'>
                    <Transition.Child as={Fragment}>
                        <Dialog.Overlay className='fixed inset-0 bg-white transition-opacity' />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span className='hidden sm:inline-block sm:align-middle sm:h-screen' aria-hidden='true'>
                        &#8203;
                    </span>

                    <Transition.Child as={Fragment}>
                        <div className={`m-4 py-5 px-4 inline-block ${cardColor} rounded-3xl text-left shadow-xl transform transition-all sm:align-middle sm:p-6 sm:w-10/12 md:w-10/12 lg:w-7/12 xl:w-7/12`}>
                            <div className="sm:block absolute top-0 right-0 pt-4 pr-4">
                                <button
                                    type="button"
                                    className="bg-white rounded-full p-2 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-transparent"
                                    onClick={handleClose}
                                >
                                    <XIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                            </div>
                            <div className='grid grid-flow-row auto-rows-max'>
                                {/* first row */}
                                <div className='grid grid-cols-1 xl:grid-cols-2'>
                                    <div className='inline-flex items-center'>
                                        <img src={data.pokemonImage} alt={data.pokemonName} className='h-36 w-36 rounded-2xl mx-4' />
                                        <div className='ml-7'>
                                            <p className='text-2xl font-normal font-quicksand'>#{data.pokemonId}</p>
                                            <p className='text-lg font-press-start pt-2 uppercase'>{data.pokemonName}</p>
                                            <div className='space-x-2 flex flex-wrap items-center mt-5'>
                                                <BasicBadge 
                                                    text={genera} 
                                                    textStyle='text-xl leading-8 font-medium text-gray-800 font-vt323' 
                                                    backgroundColor={tagColor}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='border-l-2 border-gray-600 flex flex-wrap content-center pr-20 pl-10 mt-4 xl:ml-8'>
                                        <p className='text-topic'>About</p>
                                        <p className='text-detail pt-2 text-gray-700'>
                                            {about}
                                        </p>
                                    </div>
                                </div>
                                {/* second row */}
                                <div className='flex flex-col sm:grid sm:gap-x-5 sm:grid-flow-col'>
                                    <div className={`mt-5 border border-transparent rounded-2xl px-5 py-3 ${backgroudTextColor}`}>
                                        <p className='text-topic'>Abilities</p>
                                        <div className='mt-3 px-3 space-y-2 text-detail'>
                                            {
                                                abilities.map((ability: any, index: number) => {
                                                    let abilities = (ability).charAt(0).toUpperCase() + (ability).slice(1)
                                                    return <li key={index}>{abilities}</li>
                                                })
                                            }
                                        </div>
                                    </div> 
                                    <div className={`mt-5 border border-transparent rounded-2xl px-5 py-3 ${backgroudTextColor}`}>
                                        <p className='text-topic'>Base Stats</p>
                                        <div className='grid grid-cols-3 mt-2'>
                                            {
                                                baseStats.map((stat: any) => (
                                                    <div key={stat.statName}>
                                                        <p className='base-stats-title'>{stat.statName.toUpperCase()}</p>
                                                        <p className='base-stats-value'>{stat.statVal}</p>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                                {/* third row */}
                                <div className={`mt-5 border border-transparent rounded-2xl px-5 py-3 ${backgroudTextColor}`}>
                                    <p className='text-topic'>Evolution</p>
                                    <div className='mt-4 inline-flex'>
                                        {
                                            evolution.map((pokemon: any, index: number) => (
                                                <>
                                                    { index !== 0 &&
                                                        <div className='mx-3 my-11'>
                                                            <ArrowNarrowRightIcon className='h-5 w-5' />
                                                        </div>
                                                    }
                                                    <div key={index} className='flex flex-col'>
                                                        <div className={`${circleColor} inline-flex items-center p-4 border border-transparent rounded-full shadow-lg transition duration-500 ease-in-out transform hover:scale-110`}>
                                                            <img src={pokemon.imageUrl} alt='pic' className='h-20 w-20' />
                                                        </div>
                                                        <div className='text-center mt-2'>
                                                            <p className='text-xl font-vt323 pl-3 capitalize'>{pokemon.speciesName}</p>
                                                        </div>
                                                    </div> 
                                                </>    
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>   
    )
}

export default InfoCard