<script>
	import Circles from '../components/home/circles.svelte';
	import Profe from '../components/home/Profe.svelte';
</script>

<main>
	<Circles />
	<Profe/>
</main>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Belleza&display=swap');
	:global(body) {
		background-color:#181818;
		color: #ffffff;
		transition: background-color 1s;
	}
	:global(body.dark-mode) {
		background-color: #ffffc7;
		color: #181818;
	}
	main {
		width: 100vw;
		height: 100vh;
		display: grid;
		place-items: center;
	}
</style>
