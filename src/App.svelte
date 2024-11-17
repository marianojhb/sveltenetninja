<script>
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
</script>

<main>
  {#each people as person (person.id)}
    <div style="color: {person.beltcolour}">
      <h4>{person.name}</h4>
      <h4>{person.age} years old</h4>
      <h4>{person.beltcolour} color</h4>
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
