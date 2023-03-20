<script>
	export let type;
	export let placeholder;
</script>

<main>
	<input {type} {placeholder} />
</main>

<style>
	:global(body.dark-mode) input {
		box-shadow: var(--Neo-Shadow);
	}
	input {
		width: 15vw;
		border: none;
		border-radius: 30px;
		padding: 0.5rem 1rem;
		background-color: transparent;
		font-family: 'Cairo', sans-serif;
		font-weight: 900;
		text-align: right;
		box-shadow: var(--Neo-Dark-Shadow);
		outline: none;
		color: white;
	}
</style>
