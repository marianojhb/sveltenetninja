<script>
  let showModal = true;
</script>

{#if showModal}
  <div class="backdrop">
    <div class="modal">
      <p>Sign up for offers!</p>
    </div>
  </div>
{/if}

<style>
  .backdrop {
    background-color: rgba(124, 124, 124, 124);
  }
</style>
