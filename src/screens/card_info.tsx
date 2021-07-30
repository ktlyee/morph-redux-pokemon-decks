import React, { useState, useEffect, Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import axios from 'axios'
import { BasicBadge, InfoCard } from '../components'
import { ArrowNarrowRightIcon, XIcon } from '@heroicons/react/outline'
import '../components/Cards/InfoCard/infoCard.css'

interface CardInfoProps {
    pokemonName: string
    isOpen: boolean
    handleClose: () => void
    cardColor?: string
    backgroudTextColor?: string
    tagBackgroundColor?: string
    circleColor?: string
}

const CardInfoPage = ({ 
    pokemonName,
    isOpen,
    handleClose,
}: CardInfoProps) => {
    const [data, setData] = useState<any>({})
    const [abilities, setAbilities] = useState<any>([])
    const [about, setAbout] = useState('')
    const [genera, setGenera] = useState('')
    const [stats, setStats] = useState<any>([])
    const [evolution, setEvolution] = useState<any>([])
    const completeButtonRef = useRef(null)
    
    useEffect(() => {
        axios(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then((result) => {
            fetchPokemonData(result.data)
            fetchPokemonDescription(result.data.name)
            console.log(result.data)
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
        console.log(stats)
        setStats(stats)
    }

    const fetchPokemonDescription = async (name: string) => {
        const response: any = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${name}`).catch((err) => console.log('Error: ', err))
        console.log(response.data)
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
        console.log(evoChain)
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
        <InfoCard 
            cardColor='bg-yellow'
            pokemonImg={{ src: `${data.pokemonImage}`, alt: `${data.pokemonName}` }}
            backgroudTextColor='bg-yellow-lightest'
            id={data.pokemonId}
            name={data.pokemonName}
            tag={{ text: `${genera}`, backgroundColor: 'bg-blue' }}
            about={about}
            abilities={abilities}
            baseStats={stats}
            evolution={evolution}
            circleColor='bg-yellow'
            isOpen={isOpen}
            handleClose={handleClose}
        />
    )
}

export default CardInfoPage