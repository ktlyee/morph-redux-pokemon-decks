import React, { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { BasicBadge, CircularBadge } from '../..'
import { ArrowNarrowRightIcon, XIcon } from '@heroicons/react/outline'
import './infoCard.css'

interface IPokemonImg {
    src: string
    alt?: string
}

interface ITag {
    text: string
    backgroundColor: string
}

interface InfoCardProps {
    cardColor: string
    pokemonImg: IPokemonImg
    backgroudTextColor: string
    id: string
    name: string
    tag: ITag
    about: string
    abilities: Array<string>
    baseStats: Array<any>
    evolution: Array<any>
    circleColor: string
    isOpen: boolean
    handleClose: () => void
}

export const InfoCard = ({
    cardColor,
    pokemonImg,
    backgroudTextColor,
    id,
    name,
    tag,
    about,
    abilities,
    baseStats,
    evolution,
    circleColor,
    isOpen,
    handleClose
}: InfoCardProps) => {
    const completeButtonRef = useRef(null)

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
                        <Dialog.Overlay className='fixed inset-0 bg-white-smoke transition-opacity' />
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
                                        <img src={`${pokemonImg.src}`} alt={`${pokemonImg.alt}`} className='h-36 w-36 rounded-2xl mx-4' />
                                        <div>
                                            <p className='text-2xl font-normal font-quicksand'>#{id}</p>
                                            <p className='text-lg font-press-start pt-2 uppercase'>{name}</p>
                                            <div className='space-x-2 flex flex-wrap items-center mt-5'>
                                                <BasicBadge 
                                                    text={`${tag.text}`} 
                                                    textStyle='text-xl leading-8 font-medium text-white font-vt323' 
                                                    backgroundColor={`${tag.backgroundColor}`}
                                                />
                                                {/* {
                                                    types.map((type, index) => (
                                                        <CircularBadge 
                                                            key={index}
                                                            src={`${type.src}`} 
                                                            backgroundColor={`${type.backgroundColor}`}
                                                            tooltip={`${type.tooltip}`}
                                                        />
                                                    ))
                                                } */}
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
                                            evolution.map((pokemon, index) => (
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