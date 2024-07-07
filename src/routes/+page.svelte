<script lang="ts">
  import SearchBar from '$lib/components/SearchBar.svelte'
  import PokemonCard from '$lib/components/PokemonCard.svelte'
  import type { PageData } from './$types'
  import '../app.css'

  export let data: PageData
</script>

<div class="container mx-auto px-4">
  <h1 class="text-3xl font-bold text-center my-8">Accueil Pokémon</h1>
  <div>
    <SearchBar />
  </div>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {#each data.pokemons as pokemon}
      <div class="flex">
        <PokemonCard {pokemon} />
      </div>
    {/each}
  </div>
</div>
