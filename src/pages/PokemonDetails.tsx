import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import type { DetailsPokemon } from '../types/pokemon'
import fetchApi from '../api/axios'

const PokemonDetails = () => {
    const { name } = useParams()
    const [pokemon, setPokemon] = useState<DetailsPokemon | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchPokemonDetails = async () => {
            try {
                setLoading(true)
                const response = await fetchApi.get<DetailsPokemon>(`pokemon/${name}`)
                setPokemon(response.data)
            } catch (error) {
                setError("Failed to fetch Pokemon details")
            } finally {
                setLoading(false)
            }
        }
        fetchPokemonDetails()
    }, [name])

    if (loading) {
        return <p>Loading...</p>
    }
    if (error) {
        return <p className="text-red-500">{error}</p>
    }
    return (
        <div className='p-6 max-w-xl mx-auto text-center'>
            <h1 className="text-3xl font-bold capitalize mb-4">
                {pokemon?.name}
            </h1>
            <img
                src={pokemon?.sprites.other["official-artwork"].front_default}
                alt={pokemon?.name}
                className="mx-auto w-48"
            />

            <div className='mt-4'>
                <p className="text-lg">Height: {pokemon?.height}</p>
                <p className="text-lg">Weight: {pokemon?.weight}</p>

                <div className='mt-2'>
                    <strong>Tipos:</strong>
                    <div className="flex justify-center gap-2 mt-2">
                        {pokemon?.types.map((t) => (
                            <span
                                key={t.type.name}
                                className="bg-gray-200 px-3 py-1 rounded capitalize"
                            >
                                {t.type.name}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PokemonDetails