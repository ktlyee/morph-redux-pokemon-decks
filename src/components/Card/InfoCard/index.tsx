import React from 'react'
import { BasicBadge, CircularBadge } from '../../../components'
import { ArrowNarrowRightIcon, XIcon } from '@heroicons/react/outline'

// interface InfoCardProps {
//     cardColor: string
//     backgroundColor?: string
//     isOpen: boolean
//     handleClickOutside: () => void
// }

export const InfoCard = () => {
    return (
        <div className="flex items-end bg-white-smoke justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                &#8203;
            </span>

            <div className="w-8/12 inline-block align-center bg-yellow rounded-3xl text-left shadow-xl transform transition-all sm:my-8 sm:align-middle sm:p-6">
                <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                    <button
                        type="button"
                        className="bg-white rounded-full p-2 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onClick={() => {}}
                    >
                        <span className="sr-only">Close</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className='grid grid-flow-row auto-rows-max'>
                    {/* first row */}
                    <div className='grid grid-cols-2'>
                        <div className='inline-flex items-center'>
                            <img 
                                src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg' 
                                alt='img'
                                className='h-36 w-36 rounded-2xl'
                            />
                            <div className='ml-10'>
                                <p className='text-2xl font-normal font-quicksand'>#001</p>
                                <p className='text-lg font-press-start pt-2'>Pickachu</p>
                                <div className='mt-5 space-x-2'>
                                    <BasicBadge 
                                        text='Pokemon' 
                                        textStyle='font-press-start text-sm text-white' 
                                        backgroundColor='bg-blue'
                                    />
                                    <CircularBadge 
                                        src='https://pokedex-react-mui.netlify.app/electric.png' 
                                        backgroundColor='bg-blue' 
                                        tooltip='elective'
                                    />
                                    <CircularBadge 
                                        src='https://pokedex-react-mui.netlify.app/fire.png' 
                                        backgroundColor='bg-blue' 
                                        tooltip='fire'
                                    />
                                </div> 
                            </div>
                        </div>
                        <div className='border-l-2 border-gray-600 flex flex-wrap content-center mt-1 pr-20 pl-10'>
                            <p className='text-sm font-press-start'>About</p>
                            <p className='font-quicksand font-semibold text-sm text-gray-700 pt-2'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla iaculis et mauris et vulputate. 
                                Vivamus id elit lacinia. Vivamus id elit lacinia. Vivamus id elit lacinia. Vivamus id elit lacinia.
                            </p>
                        </div>
                    </div>
                    {/* second row */}
                    <div className='grid gap-x-5 grid-flow-col'>
                        <div className='mt-5 border border-transparent bg-yellow-lighter rounded-2xl px-5 py-3'>
                            <p className='text-sm font-press-start'>Abilities</p>
                            <div className='mt-3 px-5 space-y-2 font-quicksand font-semibold text-sm'>
                                <li>Lorem ipsum</li>
                                <li>Lorem ipsum</li>
                                <li>Lorem ipsum</li>
                            </div>
                        </div> 
                        <div className='mt-5 border border-transparent bg-yellow-lighter rounded-2xl px-5 py-3'>
                            <p className='text-sm font-press-start'>Base Stats</p>
                            <div className='grid grid-cols-3 mt-2'>
                                <div>
                                    <p className='font-medium text-red'>ATTACK</p>
                                    <p className='font-quicksand font-semibold text-sm text-gray-700'>85</p>
                                </div>
                                <div>
                                    <p className='font-medium text-red'>DEFENSE</p>
                                    <p className='font-quicksand font-semibold text-sm text-gray-700'>55</p>
                                </div>
                                <div>
                                    <p className='font-medium text-red'>HP</p>
                                    <p className='font-quicksand font-semibold text-sm text-gray-700'>50</p>
                                </div>
                                <div>
                                    <p className='font-medium text-red'>SPECIAL-ATTACK</p>
                                    <p className='font-quicksand font-semibold text-sm text-gray-700'>65</p>
                                </div>
                                <div>
                                    <p className='font-medium text-red'>SPECIAL-DEFENSE</p>
                                    <p className='font-quicksand font-semibold text-sm text-gray-700'>90</p>
                                </div>
                                <div>
                                    <p className='font-medium text-red'>SREED</p>
                                    <p className='font-quicksand font-semibold text-sm text-gray-700'>65</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* third row */}
                    <div className='mt-4 border border-transparent bg-yellow-lighter rounded-2xl px-5 py-3'>
                        <p className='text-sm font-press-start'>Evolution</p>
                        <div className='mt-3 inline-flex'>
                            <div className='flex flex-col'>
                                <div className='inline-flex items-center p-4 border border-transparent rounded-full shadow-lg bg-yellow-lightest'>
                                    <img 
                                        src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/172.svg' 
                                        className='h-20 w-20'
                                    />
                                </div>
                                <div className='text-center my-3'>
                                    <p className='text-xs font-press-start pl-3'>Pichu</p>
                                </div>
                            </div>
                            <div className='mx-3 my-11'>
                                <ArrowNarrowRightIcon className='h-5 w-5' />
                            </div>
                            <div className='flex flex-col'>
                                <div className='inline-flex items-center p-4 border border-transparent rounded-full shadow-lg bg-yellow-lightest'>
                                    <img 
                                        src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg' 
                                        className='h-20 w-20'
                                    />
                                </div>
                                <div className='text-center my-3'>
                                    <p className='text-xs font-press-start pl-3'>Pikachu</p>
                                </div>
                            </div>
                            <div className='mx-3 my-11'>
                                <ArrowNarrowRightIcon className='h-5 w-5' />
                            </div>
                            <div className='flex flex-col'>
                                <div className='inline-flex items-center p-4 border border-transparent rounded-full shadow-lg bg-yellow-lightest'>
                                    <img 
                                        src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/26.svg' 
                                        className='h-20 w-20'
                                    />
                                </div>
                                <div className='text-center my-3'>
                                    <p className='text-xs font-press-start pl-3'>Raichu</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoCard