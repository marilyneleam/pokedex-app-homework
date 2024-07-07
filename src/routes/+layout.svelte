<script lang="ts">
  import Header from '$lib/components/Header.svelte'
  import Footer from '$lib/components/Footer.svelte'
  import '../app.css'
</script>

<svelte:head>
  <title>Pokédex</title>
  <meta
    name="description"
    content="App pour obtenir des informations sur les Pokémons"
  />
</svelte:head>

<div class="h-screen bg-white flex">
  <Header />
  <div class="flex-1 flex flex-col">
    <main class="flex-1 overflow-y-auto">
      <slot
        class="m-4 flex flex-wrap items-start justify-start rounded-tl grid-flow-col auto-cols-max gap-4"
      />
    </main>
    <Footer />
  </div>
</div>
