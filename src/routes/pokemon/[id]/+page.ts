import type { PageLoad } from './$types'
import { fetchPokemonByName } from '$lib/api'

export const load: PageLoad = async ({ params }) => {
  const pokemon = await fetchPokemonByName(params.id)
  return { pokemon }
}
