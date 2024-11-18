<script>
  let name
  let beltColour
  let age = 5
  let skills = []

  const handleSubmit = () => {
    console.log(name, beltColour, age, skills)
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <input type="text" placeholder="name" bind:value={name} />
  <input type="number" placeholder="age" bind:value={age} />

  <label>Belt colour:</label>
  <select bind:value={beltColour}>
    <option value="black">Black</option>
    <option value="orange">Orange</option>
    <option value="brown">Brown</option>
    <option value="white">White</option>
  </select>

  <label>Skills:</label>

  <input type="checkbox" bind:group={skills} value="fighting" /> Fighting<br />
  <input type="checkbox" bind:group={skills} value="sneaking" /> Sneaking<br />
  <input type="checkbox" bind:group={skills} value="running" /> Running<br />

  <button>Add Person</button>
</form>

<style>
</style>
