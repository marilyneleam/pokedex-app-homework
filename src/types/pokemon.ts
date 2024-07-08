// types/pokemon.ts

export interface Pokemon {
    id: number
    name: string
    frenchName: string
    frenchDescription: string
    height: number
    weight: number
    types: {
        type: {
            name: string
        }
    }[]
    sprites: {
        front_default: string
        other: {
            'official-artwork': {
                front_default: string
            }
        }
    }
    abilities: {
        ability: {
            name: string
        }
    }[]
    species: {
        url: string
    }
    names: {
        name: string
        language: {
            name: string
        }
    }[]
    flavor_text_entries: {
        flavor_text: string
        language: {
            name: string
        }
        version: {
            name: string
        }
    }[]
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
