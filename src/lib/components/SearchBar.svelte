<script lang="ts">
  import { goto } from '$app/navigation'

  let searchTerm = ''

  function handleSubmit() {
    if (searchTerm) {
      goto(`/pokemon/${searchTerm.toLowerCase()}`)
    }
  }
</script>

<style>
  @import url(https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css);

  .gradient-line {
    background: linear-gradient(
      45deg,
      red,
      orange,
      yellow,
      green,
      blue,
      indigo,
      violet
    );
    border-radius: 0.5rem;
    padding: 2px;
  }
</style>

<div class="min-h-screenflex justify-center items-center">
  <div
    class="w-full mx-auto rounded-xl bg-gray-100 shadow-lg p-10 text-gray-800 relative overflow-hidden min-w-80 mb-8"
  >
    <div class="absolute inset-0 rounded-lg"></div>
    <div class="container relative mt-1 bg-white p-6 rounded-xl">
      <form on:submit|preventDefault="{handleSubmit}" class="space-y-6">
        <div class="relative mt-1">
          <input
            type="text"
            bind:value="{searchTerm}"
            class="w-full pl-3 pr-10 py-2 border-2 border-gray-200 rounded-xl hover:border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
            placeholder="Rechercher un Pokémon..."
          />
          <button
            class="block w-7 h-7 text-center text-xl leading-0 absolute top-2 right-2 text-gray-400 focus:outline-none hover:text-gray-900 transition-colors"
            type="submit"
          >
            <i class="mdi mdi-magnify"></i>
          </button>
        </div>
      </form>
    </div>

    <div class="absolute top-0 left-0 w-full h-2 flex">
      <div class="gradient-line h-2 flex-1"></div>
    </div>
  </div>
</div>
