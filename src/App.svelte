<script>
  import Modal from './Modal.svelte'
  import AddPersonForm from './AddPersonForm.svelte'

  let showModal = false

  let people = [
    {
      name: 'Mariano',
      age: 46,
      beltColour: 'red',
      id: 1,
    },
    {
      name: 'Federico',
      age: 45,
      beltColour: 'blue',
      id: 2,
    },
    {
      name: 'Javier',
      age: 45,
      beltColour: 'orange',
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

const addPerson = (e) => {
  console.log(e.detail)
  const person = e.detail
  people = [person, ...people]
  showModal = false
}

</script>

<Modal isPromo={false} {showModal} on:click={toggleModal}>
  <AddPersonForm on:addPerson={addPerson} />
</Modal>

<main>
  <button on:click={toggleModal}>Open Modal...</button>
  {#each people as person (person.id)}
    <div style="color: {person.beltColour}">
      <h4>{person.name}</h4>
      <h4>{person.age} years old, {person.beltColour} belt</h4>
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
