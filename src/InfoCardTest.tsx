import React, { useState } from 'react'
import { InfoCard, Button } from './components'

function InfoCardTest() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <Button
                text={{ text: 'Open card', color: 'text-white'}}
                buttonColor='bg-red'
                handleClick={() => setIsOpen(true)}
            />
            {
                isOpen &&
                <InfoCard 
                    cardColor='bg-yellow'
                    pokemonImg={{ 
                        src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg',
                        alt: 'pikachu'
                    }}
                    backgroudTextColor='bg-yellow-lighter'
                    id='#001'
                    name='Pikachu'
                    tag={{
                        text: 'Mouse Pokemon',
                        backgroundColor: 'bg-blue'
                    }}
                    types={[
                        {
                            src: 'https://pokedex-react-mui.netlify.app/electric.png',
                            backgroundColor: 'bg-blue',
                            tooltip: 'Elective'
                        },
                        {
                            src: 'https://pokedex-react-mui.netlify.app/fire.png',
                            backgroundColor: 'bg-blue',
                            tooltip: 'Fire'
                        }
                    ]}
                    about='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla iaculis et mauris et vulputate. Vivamus id elit lacinia. Vivamus id elit lacinia.'
                    abilities={[
                        { ability: 'Lorem ipsum' },
                        { ability: 'Lorem ipsum' },
                        { ability: 'Lorem ipsum' }
                    ]}
                    baseStats={{
                        attack: '50',
                        defense: '45',
                        hp: '60',
                        specialAttack: '55',
                        specialDefense: '70',
                        speed: '40'
                    }}
                    evolution={[
                        {
                            src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/172.svg',
                            alt: 'evolution 1',
                            href: '#',
                            name: 'Pichu'
                        },
                        {
                            src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg',
                            alt: 'evolution 2',
                            href: '#',
                            name: 'Pikachu'
                        },
                        {
                            src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/26.svg',
                            alt: 'evolution 3',
                            href: '#',
                            name: 'Raichu'
                        }
                    ]}
                    circleColor='bg-yellow-lightest'
                    isOpen={isOpen}
                    handleClose={() => setIsOpen(false)}
                />
            } 
        </>
    )
}

export default InfoCardTest
