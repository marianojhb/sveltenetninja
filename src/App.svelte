<script>
	import Header from './components/Header.svelte';
	import Footer from './components/Footer.svelte';
	import Tabs from './shared/Tabs.svelte';
  import CreatePollForm from './components/CreatePollForm.svelte'
  import PollList from './components/PollList.svelte';

  // tabs
  let items = ['Current Poll', 'Add New Poll'];
  let activeItem = 'Current Poll'

  const tabChange = (e) => {
    activeItem = e.detail
  }

  let polls = [
      {
        id: 1,
        question: 'Python or JavaScript',
        answerA: 'Python',
        answerB: 'JavaScript',
        votesA: 9,
        votesB: 15,
      },
      {
        id: 2,
        question: 'Par o Impar',
        answerA: 'Par',
        answerB: 'Impar',
        votesA: 2,
        votesB: 4,
      }
  ];

  const handleAdd = (e) => {
    const poll = e.detail
    polls = [...polls, poll]
    console.log(polls)
    activeItem = 'Current Poll'

  }

</script>

<Header />
<main>
  <Tabs {activeItem} {items} on:tabChange={tabChange}/>
  {#if activeItem === 'Current Poll'}
  <PollList {polls}/>
  {:else if activeItem === 'Add New Poll'}
  <CreatePollForm  on:add={handleAdd} />

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