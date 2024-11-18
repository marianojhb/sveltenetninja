<script>
  let name
  let beltColour
  let age
  let skills = []

  const handleSubmit = () => {
    console.log(name, beltColour, age, skills)
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <input type="text" placeholder="name" bind:value={name} />
  <input type="number" placeholder="age" bind:value={age} />

  <!-- <label >Belt colour:</label> -->
  <label for="beltColour">Belt colour:</label>
  <select bind:value={beltColour} name="beltColour">
    <option value="black">Black</option>
    <option value="orange">Orange</option>
    <option value="brown">Brown</option>
    <option value="white" selected="selected">White</option>
  </select>

  <label for="skill">Skills:</label>

  <input type="checkbox" bind:group={skills} value="fighting" name="skill" /> Fighting<br />
  <input type="checkbox" bind:group={skills} value="sneaking" name="skill" /> Sneaking<br />
  <input type="checkbox" bind:group={skills} value="running" name="skill" /> Running<br />

  <button>Add Person</button>
</form>

<style>
</style>
