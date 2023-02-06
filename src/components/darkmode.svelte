<script>
	function toggle() {
		window.document.body.classList.toggle('dark-mode');
	}
</script>

<button on:click={toggle}>
	<i class="fas fa-sun"></i>
</button>

<style>
	:global(body.dark-mode) button {
		background-color: transparent;
		color: #181818;
	}
	button{
		background: transparent;
		outline: transparent;
		border: none;
		font-size: 2rem;
		color: #ffffff;
		cursor: pointer;
	}
</style>
