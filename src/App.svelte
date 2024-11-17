<script>
  let people = [
    { name: `Mariano`, beltcolour: `White`, age: 46, id: 1 },
    { name: `Federico`, beltcolour: `White`, age: 45, id: 2 },
    { name: `Javier`, beltcolour: `White`, age: 47, id: 3 },
  ]
</script>

<main>
  <div>
    <h4>{people[0].name}</h4>
    <p>{people[0].beltColor}</p>
  </div>
  <div>
    <h4>{people[1].name}</h4>
    <p>{people[1].beltColor}</p>
  </div>
  <div>
    <h4>{people[2].name}</h4>
    <p>{people[2].beltColor}</p>
  </div>
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
