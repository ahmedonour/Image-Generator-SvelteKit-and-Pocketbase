<script>
	function toggle() {
		window.document.body.classList.toggle('dark-mode');
	}
</script>

<button on:click={toggle}>
	<slot />
</button>

<style>
	:global(body.dark-mode) button {
		background-color: #000000;
		color: #ffffff;
	}
</style>
