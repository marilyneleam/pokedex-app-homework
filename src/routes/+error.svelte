<script lang="ts">
       import { page } from '$app/stores'
       import SearchBar from '$lib/components/SearchBar.svelte'
       import '../app.css'
</script>

<div class="container mx-auto px-4">
       <h1 class="text-3xl font-bold text-center my-8">
              Résultat de la recherche
       </h1>
       <div>
              <SearchBar />
       </div>
</div>
<div class="container mx-auto px-4 py-16 text-center">
       <h1 class="text-4xl font-bold mb-4">Erreur</h1>
       <p class="text-xl mb-8">
              Ce pokémon ne peut être capturé car il n'existe pas.
       </p>
       <a
              href="/"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
       >
              Retour à l'accueil
       </a>
</div>
