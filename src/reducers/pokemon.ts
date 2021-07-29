import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface PokemonProps {
    id: number
    name: string
}

export const pokemonApiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://pokeapi.co/api/v2/pokemon/'
    }),
    endpoints(builder) {
        return {
            fetchPokemon: builder.query<PokemonProps[], number|void> ({
                query(limit = 10, offset = 10) {
                    return `/pokemon?limit=${limit}&offset=${offset}`
                }
            })
        }
    }
})

export const { useFetchPokemonQuery } = pokemonApiSlice