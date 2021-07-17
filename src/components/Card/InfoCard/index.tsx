import React from 'react'
import { BasicBadge, CircularBadge } from '../../../components'
import { ArrowNarrowRightIcon, XIcon } from '@heroicons/react/outline'

interface IPokemonImg {
    src: string
    alt?: string
}

interface ITag {
    text: string
    backgroundColor: string
}

interface IType {
    src: string
    backgroundColor: string
    tooltip: string
}

interface IAbility {
    ability: string
}

interface IBaseStats {
    attack: string
    defense: string
    hp: string
    specialAttack: string
    specialDefense: string
    speed: string
}

interface IEvolution {
    src: string
    alt: string
    href: string
    name: string
}

interface InfoCardProps {
    cardColor: string
    pokemonImg: IPokemonImg
    backgroudTextColor: string
    id: string
    name: string
    tag: ITag
    types: IType[]
    about: string
    abilities: IAbility[]
    baseStats: IBaseStats
    evolution: IEvolution[],
    circleColor: string
    handleClose: () => void
}

export const InfoCard = ({
    cardColor,
    pokemonImg,
    backgroudTextColor,
    id,
    name,
    tag,
    types,
    about,
    abilities,
    baseStats,
    evolution,
    circleColor,
    handleClose
}: InfoCardProps) => {
    return (
        <div className='flex items-center px-6 bg-white-smoke justify-center min-h-screen text-center sm:block sm:p-0'>
            {/* This element is to trick the browser into centering the modal contents. */}
            <span className='hidden sm:inline-block sm:align-middle sm:h-screen' aria-hidden='true'>
                &#8203;
            </span>

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
                            <img 
                                src={`${pokemonImg.src}`} 
                                alt={`${pokemonImg.alt}`}
                                className='h-36 w-36 rounded-2xl mx-4'
                            />
                            <div>
                                <p className='text-2xl font-normal font-quicksand'>{id}</p>
                                <p className='text-lg font-press-start pt-2'>{name}</p>
                                <div className='space-x-1 flex flex-wrap items-center mt-5'>
                                    <BasicBadge 
                                        text={`${tag.text}`} 
                                        textStyle='text-xl leading-8 font-medium text-white font-vt323' 
                                        backgroundColor={`${tag.backgroundColor}`}
                                    />
                                    {
                                        types.map((type) => (
                                            <CircularBadge 
                                                src={`${type.src}`} 
                                                backgroundColor={`${type.backgroundColor}`}
                                                tooltip={`${type.tooltip}`}
                                            />
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <div className='border-l-2 border-gray-600 flex flex-wrap content-center pr-20 pl-10 mt-4 xl:ml-8'>
                            <p className='text-sm font-press-start'>About</p>
                            <p className='font-quicksand font-semibold text-sm text-gray-700 pt-2'>
                                {about}
                            </p>
                        </div>
                    </div>
                    {/* second row */}
                    <div className='flex flex-col sm:grid sm:gap-x-5 sm:grid-flow-col'>
                        <div className={`mt-5 border border-transparent rounded-2xl px-5 py-3 ${backgroudTextColor}`}>
                            <p className='text-sm font-press-start'>Abilities</p>
                            <div className='mt-3 px-3 space-y-2 font-quicksand font-semibold text-sm'>
                                {
                                    abilities.map((ability) => (
                                        <li>{ability.ability}</li>
                                    ))
                                }
                            </div>
                        </div> 
                        <div className={`mt-5 border border-transparent rounded-2xl px-5 py-3 ${backgroudTextColor}`}>
                            <p className='text-sm font-press-start'>Base Stats</p>
                            <div className='grid grid-cols-3 mt-2'>
                                <div>
                                    <p className='font-medium text-red'>ATTACK</p>
                                    <p className='font-quicksand font-semibold text-sm text-gray-700'>{baseStats.attack}</p>
                                </div>
                                <div>
                                    <p className='font-medium text-red'>DEFENSE</p>
                                    <p className='font-quicksand font-semibold text-sm text-gray-700'>{baseStats.defense}</p>
                                </div>
                                <div>
                                    <p className='font-medium text-red'>HP</p>
                                    <p className='font-quicksand font-semibold text-sm text-gray-700'>{baseStats.hp}</p>
                                </div>
                                <div>
                                    <p className='font-medium text-red'>SPECIAL-ATTACK</p>
                                    <p className='font-quicksand font-semibold text-sm text-gray-700'>{baseStats.specialAttack}</p>
                                </div>
                                <div>
                                    <p className='font-medium text-red'>SPECIAL-DEFENSE</p>
                                    <p className='font-quicksand font-semibold text-sm text-gray-700'>{baseStats.specialDefense}</p>
                                </div>
                                <div>
                                    <p className='font-medium text-red'>SPEED</p>
                                    <p className='font-quicksand font-semibold text-sm text-gray-700'>{baseStats.speed}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* third row */}
                    <div className={`mt-5 border border-transparent rounded-2xl px-5 py-3 ${backgroudTextColor}`}>
                        <p className='text-sm font-press-start'>Evolution</p>
                        <div className='mt-4 inline-flex'>
                            {
                                evolution.map((pokemon, index) => (
                                    index === 0 ?
                                    <div className='flex flex-col'>
                                        <a href={`${pokemon.href}`} className={`${circleColor} inline-flex items-center p-4 border border-transparent rounded-full shadow-lg`}>
                                            <img 
                                                src={pokemon.src}
                                                alt={pokemon.alt}
                                                className='h-20 w-20'
                                            />
                                        </a>
                                        <div className='text-center mt-2'>
                                            <p className='text-xl font-vt323 pl-3'>{pokemon.name}</p>
                                        </div>
                                    </div> :
                                    <>
                                        <div className='mx-3 my-11'>
                                            <ArrowNarrowRightIcon className='h-5 w-5' />
                                        </div>
                                        <div className='flex flex-col'>
                                            <a href={pokemon.href} className={`${circleColor} inline-flex items-center p-4 border border-transparent rounded-full shadow-lg`}>
                                                <img 
                                                    src={pokemon.src} 
                                                    alt={pokemon.alt}
                                                    className='h-20 w-20'
                                                />
                                            </a>
                                            <div className='text-center mt-2'>
                                                <p className='text-xl font-vt323 pl-3'>{pokemon.name}</p>
                                            </div>
                                        </div> 
                                    </>    
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoCard