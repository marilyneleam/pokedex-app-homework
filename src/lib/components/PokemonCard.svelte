<script lang="ts">
  import type { Pokemon } from '../../types/pokemon'
  export let pokemon: Pokemon

  const getBackgroundStyle = (types: Pokemon['types']) => {
    const colors = types.map((t) => `var(--pokemon-${t.type.name})`)
    if (colors.length === 1) {
      return `background-color: ${colors[0]};`
    }
    return `background-image: linear-gradient(135deg, ${colors[0]} 0%, ${colors[1]} 100%);`
  }

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
</script>

<style>
  .shadow-text {
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  }
</style>

<div
  class="pokemon-card border-4 border-gray-400 p-4 rounded-lg shadow-md flex flex-col w-full text-center"
>
  <a href="{`/pokemon/${pokemon.name}`}" class="flex flex-col flex-grow">
    <div
      class="flex-shrink-0 rounded-lg mb-2 overflow-hidden"
      style="{getBackgroundStyle(pokemon.types)}"
    >
      <img
        src="{pokemon.sprites.front_default}"
        alt="{pokemon.name}"
        class="w-full h-auto object-contain"
      />
    </div>
    <div class="flex flex-col justify-between flex-grow">
      <div>
        <h2 class="text-xl font-bold mb-2 shadow-text">{pokemon.frenchName}</h2>
        <p class="mb-2">Numéro : #{pokemon.id}</p>
      </div>
      <div class="flex flex-wrap justify-center mt-2">
        {#each pokemon.types as { type }}
          <span
            class="{`${typeColors[type.name]} text-white text-sm px-2 py-1 rounded-md mr-2 mb-2`}"
          >
            {type.name}
          </span>
        {/each}
      </div>
    </div>
  </a>
</div>
