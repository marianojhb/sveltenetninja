<script>
	import Header from './components/Header.svelte';
	import Footer from './components/Footer.svelte';
	import Tabs from './components/shared/Tabs.svelte';

  // tabs
  let items = ['Current Poll', 'Add New Poll'];
  let activeItem = 'Current Poll'

  const tabChange = (e) => {
    activeItem = e.detail
  }


</script>

<Header />
<main>
  <Tabs {activeItem} {items} on:tabChange={tabChange}/>
  {#if activeItem === 'Current Poll'}
  <p>Poll list component goes here</p>
  {:else if activeItem === 'Add New Poll'}
  <p>New poll component goes here</p>
  {/if}
</main>
<Footer />

<style>
	main{
    width: 100%;
    max-width: 960px;
    margin: 40px auto;
  }
</style>