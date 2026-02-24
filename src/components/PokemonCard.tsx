import React from 'react'
import type { PokemonList } from "../types/pokemon"
import { useNavigate } from 'react-router-dom'


interface PokemonCardProps {
    pokemon: PokemonList
}
const PokemonCard = ({ pokemon }: PokemonCardProps) => {
    const navigate = useNavigate()

    const reqId = (url: string) => {
        return url.split("/").filter(Boolean).pop()
    }

    const id = reqId(pokemon.url)
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    return (
        <div className="bg-white shadow rounded p-4 text-center cursor-pointer hover:scale-105 transition" onClick={() => navigate(`/pokemon/${pokemon.name}`)}>
            <img src={image} alt={pokemon.name} className="mx-auto" />
            <p className="capitalize mt-2">{pokemon.name}</p>
        </div>
    )
}

export default PokemonCard