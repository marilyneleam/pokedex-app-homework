<script lang="ts">
  import SearchBar from '$lib/components/SearchBar.svelte'
  import type { PageData } from './$types'
  import '../../../app.css'

  export let data: PageData

  const typeColors: { [key: string]: string } = {
    normal: 'bg-pokemon-normal',
    fire: 'bg-pokemon-fire',
    water: 'bg-pokemon-water',
    electric: 'bg-pokemon-electric',
    grass: 'bg-pokemon-grass',
    ice: 'bg-pokemon-ice',
    fighting: 'bg-pokemon-fighting',
    poison: 'bg-pokemon-poison',
    ground: 'bg-pokemon-ground',
    flying: 'bg-pokemon-flying',
    psychic: 'bg-pokemon-psychic',
    bug: 'bg-pokemon-bug',
    rock: 'bg-pokemon-rock',
    ghost: 'bg-pokemon-ghost',
    dragon: 'bg-pokemon-dragon',
    dark: 'bg-pokemon-dark',
    steel: 'bg-pokemon-steel',
    fairy: 'bg-pokemon-fairy',
  }

  const getBackgroundStyle = (types: typeof data.pokemon.types) => {
    const colors = types.map((t) => `var(--pokemon-${t.type.name})`)
    if (colors.length === 1) {
      return `background-color: ${colors[0]};`
    }
    return `background-image: linear-gradient(135deg, ${colors[0]} 0%, ${colors[1]} 100%);`
  }

  function getTypeColor(type: string): string {
    return typeColors[type.toLowerCase()] || 'bg-gray-400'
  }
</script>

<div class="container mx-auto px-4">
  <h1 class="text-3xl font-bold text-center my-8">
    Pokémon N°{data.pokemon.id.toString().padStart(4, '0')}
  </h1>
  <div>
    <SearchBar />
  </div>

  {#if data.pokemon}
    <div
      class="container mx-auto mb-8 px-4 border-4 border-gray-400 p-4 rounded-lg shadow-md"
    >
      <section class="mb-8">
        <div class="flex justify-center items-center">
          <div class="flex items-center">
            <h1 class="text-3xl font-bold mr-4">
              Fiche de {data.pokemon.frenchName}
            </h1>
          </div>
        </div>
        <hr class="my-8" />
      </section>

      <section class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          class="rounded-lg flex justify-center items-center"
          style="{getBackgroundStyle(data.pokemon.types)}"
        >
          <img
            src="{data.pokemon.sprites.other['official-artwork'].front_default}"
            alt="{data.pokemon.frenchName}"
            class="flex justify-center w-3/4 h-auto"
          />
        </div>
        <div>
          <p class="mb-4">
            {data.pokemon.frenchDescription}
          </p>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <h3 class="font-bold mb-2">Taille</h3>
              <p>
                {(data.pokemon.height / 10).toFixed(1)} m
              </p>
            </div>
            <div>
              <h3 class="font-bold mb-2">Poids</h3>
              <p>
                {(data.pokemon.weight / 10).toFixed(1)} kg
              </p>
            </div>
            <div>
              <h3 class="font-bold mb-2">Catégorie</h3>
              <p>
                {data.pokemon.genera.find((g) => g.language.name === 'fr')
                  ?.genus || ''}
              </p>
            </div>
            <div>
              <h3 class="font-bold mb-2">Talents</h3>
              <p>
                {data.pokemon.abilities.map((a) => a.ability.name).join(', ')}
              </p>
            </div>
          </div>
          <div class="mt-6">
            <h3 class="font-bold mb-2">Types</h3>
            <div class="flex space-x-2">
              {#each data.pokemon.types as { type }}
                <span
                  class="{`px-3 py-1 rounded-full text-white ${getTypeColor(type.name)}`}"
                >
                  {type.name}
                </span>
              {/each}
            </div>
          </div>
        </div>
      </section>
    </div>
  {:else}
    <p>Chargement...</p>
  {/if}
</div>
