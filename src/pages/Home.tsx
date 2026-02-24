import React, { useEffect } from 'react'
import fetchApi from '../api/axios'
import type { PokemonList, PokemonListResponse } from '../types/pokemon'
import PokemonCard from '../components/PokemonCard'

const Home = () => {
    const [pokemons, setPokemons] = React.useState<PokemonList[]>([])
    const [loading, setLoading] = React.useState<boolean>(false)
    const [error, setError] = React.useState<string | null>(null)
    const [search, setSearch] = React.useState<string>('')

    const pokemonsFiltered = pokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(search.toLowerCase()))

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                setLoading(true)
                const response = await fetchApi.get<PokemonListResponse>('pokemon?limit=151')
                setPokemons(response.data.results)
            } catch (error) {
                setError('Erro ao carregar os pokémons')
            } finally {
                setLoading(false)
            }
        }
        fetchPokemon()
    }, [])

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Pokédex</h1>
            <input type="text" placeholder="Buscar pokémon..." className="w-full p-2 mb-4 border rounded" value={search} onChange={(e) => setSearch(e.target.value)} />
            {error && <p className="text-red-500 mb-4">{error}</p>}
            {loading ? (
                <p>Carregando...</p>
            ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                   {pokemonsFiltered.length === 0 ? (<p className="col-span-full text-center">Nenhum Pokemon Encontrado...</p>) : (
                    pokemonsFiltered.map((pokemon) => (
                        <PokemonCard key={pokemon.name} pokemon={pokemon} />
                    ))
                   )}
                </div>
            )}
        </div>
    )
}

export default Home