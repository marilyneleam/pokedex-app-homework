// pokemon_api.ts

import type { Pokemon } from '../types/pokemon'

const API_BASE = 'https://pokeapi.co/api/v2'

interface PokemonListResult {
    name: string
    url: string
}

interface PokemonListResponse {
    results: PokemonListResult[]
}

interface PokemonName {
    name: string
    language: {
        name: string
    }
}

interface PokemonFlavorText {
    flavor_text: string
    language: {
        name: string
    }
    version: {
        name: string
    }
}

interface PokemonSpecies {
    names: PokemonName[]
    flavor_text_entries: PokemonFlavorText[]
    genera: {
        genus: string
        language: {
            name: string
        }
    }[]
    gender_rate: number
    evolution_chain: {
        url: string
    }
}

export async function fetchPokemons(limit: number = 20): Promise<Pokemon[]> {
    const response = await fetch(`${API_BASE}/pokemon?limit=${limit}`)
    const data: PokemonListResponse = await response.json()

    const pokemonPromises = data.results.map(
        async (result: PokemonListResult) => {
            const pokemonResponse = await fetch(result.url)
            const pokemonData = await pokemonResponse.json()

            const speciesResponse = await fetch(pokemonData.species.url)
            const speciesData: PokemonSpecies = await speciesResponse.json()

            const frenchName =
                speciesData.names.find((name) => name.language.name === 'fr')
                    ?.name || pokemonData.name

            const frenchDescription =
                speciesData.flavor_text_entries.find(
                    (entry) => entry.language.name === 'fr',
                )?.flavor_text || ''

            return {
                id: pokemonData.id,
                name: pokemonData.name,
                frenchName,
                frenchDescription,
                height: pokemonData.height,
                weight: pokemonData.weight,
                types: pokemonData.types,
                sprites: pokemonData.sprites,
                abilities: pokemonData.abilities,
                species: { url: pokemonData.species.url },
                names: speciesData.names,
                flavor_text_entries: speciesData.flavor_text_entries,
                genera: speciesData.genera,
                gender_rate: speciesData.gender_rate,
                evolution_chain: speciesData.evolution_chain,
            } as Pokemon
        },
    )

    return Promise.all(pokemonPromises)
}

export async function fetchPokemonByName(name: string): Promise<Pokemon> {
    const pokemonResponse = await fetch(
        `${API_BASE}/pokemon/${name.toLowerCase()}`,
    )
    const pokemonData = await pokemonResponse.json()

    const speciesResponse = await fetch(pokemonData.species.url)
    const speciesData: PokemonSpecies = await speciesResponse.json()

    const frenchName =
        speciesData.names.find((name) => name.language.name === 'fr')?.name ||
        pokemonData.name

    const frenchDescription =
        speciesData.flavor_text_entries.find(
            (entry) => entry.language.name === 'fr',
        )?.flavor_text || ''

    return {
        id: pokemonData.id,
        name: pokemonData.name,
        frenchName,
        frenchDescription,
        height: pokemonData.height,
        weight: pokemonData.weight,
        types: pokemonData.types,
        sprites: pokemonData.sprites,
        abilities: pokemonData.abilities,
        species: { url: pokemonData.species.url },
        names: speciesData.names,
        flavor_text_entries: speciesData.flavor_text_entries,
        genera: speciesData.genera,
        gender_rate: speciesData.gender_rate,
        evolution_chain: speciesData.evolution_chain,
    } as Pokemon
}
