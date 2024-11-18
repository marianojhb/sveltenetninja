<script>
  export let message = 'default value'
  export let showModal = true
  export let isPromo = false
</script>

{#if showModal}
  <div class="backdrop" class:promo={isPromo} on:click|self>
    <!-- le agregamos onclick para pasarle el control a App.svelte nuevamente -->
    <div class="modal">
      <p>{message}</p>
      <p>Sign up for offers!</p>
    </div>
  </div>
{/if}

<style>
  .backdrop {
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.8);
  }

  .modal {
    padding: 10px;
    border-radius: 10px;
    max-width: 400px;
    margin: 10% auto;
    text-align: center;
    background: white;
  }

  .promo .modal {
    background-color: crimson;
    color: white;
  }
</style>
