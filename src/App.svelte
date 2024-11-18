<script>
  import Modal from './Modal.svelte'

  let showModal = false

  let people = [
    {
      name: 'Mariano',
      age: 46,
      beltcolour: 'red',
      id: 1,
    },
    {
      name: 'Federico',
      age: 45,
      beltcolour: 'blue',
      id: 2,
    },
    {
      name: 'Javier',
      age: 45,
      beltcolour: 'orange',
      id: 3,
    },
  ]
  const handleClick = (id) => {
    people = people.filter((person) => person.id != id)
    console.log(e)
  }

  const toggleModal = () => {
    showModal = !showModal
  }
</script>

<Modal isPromo={false} {showModal} on:click={toggleModal}>
  <div>
    <h3>Add a new Person</h3>  
  <form action="">
    <input type="text" placeholder="name">
    <input type="text" placeholder="belt colour">
    <button>Add Person</button>
  </form>
  </div>
</Modal>
<main>
  <button on:click={toggleModal}>Open Modal...</button>
  {#each people as person (person.id)}
    <div style="color: {person.beltcolour}">
      <h4>{person.name}</h4>
      <h4>{person.age} years old, {person.beltcolour} belt</h4>
      <button on:click={() => handleClick(person.id)}>delete</button>
      <hr />
    </div>
  {:else}
    <div>
      <h4>No hay registros.</h4>
    </div>
  {/each}
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
