<script>
	export let type;
	export let placeholder;
	export let name;
</script>

<main>
	<input {type} {placeholder} {name} />
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
	@media (max-width: 768px) {
		input {
			width: 70vw;
		}
	}
</style>
