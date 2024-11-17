<script>
  let people = [
    { name: `Mariano`, beltcolour: `White`, age: 46, id: 1 },
    { name: `Federico`, beltcolour: `White`, age: 45, id: 2 },
    { name: `Javier`, beltcolour: `White`, age: 47, id: 3 },
  ]
</script>

<main>
  {#each people as person (person.id)}
    <div>
      <h4>{person.name}</h4>
      <h4>{person.age} years old</h4>
      <h4>{person.beltcolour} color</h4>
      <hr>
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
