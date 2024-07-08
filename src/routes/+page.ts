import type { PageLoad } from './$types'
import { fetchPokemons } from '$lib/api'

export const load: PageLoad = async () => {
    const pokemons = await fetchPokemons(20)
    return { pokemons }
}
