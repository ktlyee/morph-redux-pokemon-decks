import React from 'react'
import { useAppSelector } from '../app/hooks'
import { CardShow } from '../components'

const FavoritePage = () => {
    const favorite = useAppSelector(state => state.favorite)
    const favoriteKey = Object.keys(favorite)

    return (
        <div className='mt-28 mb-14 ml-60'>
            <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {
                    favoriteKey.map((key, index: number) => (
                        <div key={key}>
                            <CardShow 
                                showData={[
                                    { id: `${index}`, name: `${favorite[key].name}`, imageUrl: `${favorite[key].image}`, bgCard: 'bg-purple', key: `${key}`, fav: favorite[key].isFav }
                                ]} 
                            />
                        </div>
                    ))
                }
            </div>
        </div> 
    )
}

export default FavoritePage