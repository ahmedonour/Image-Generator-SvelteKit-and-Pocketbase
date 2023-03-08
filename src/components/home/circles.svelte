<script>
	import Text from './text.svelte';
</script>

<Text />
<main>
	<div class="circle-1" />
	<div class="circle-2" />
</main>

<style>
	main {
		position: absolute;
		top: 100px;
		z-index: -1;
		display: flex;
		width: 100vw;
		height: 70vh;
	}
	.circle-1 {
		width: 80vw;
		height: 60vh;
		border-radius: 40rem;
		background-color: rgba(252, 0, 0);
		filter: blur(70px);
	}
	.circle-2 {
		width: 80vw;
		height: 60vh;
		border-radius: 40rem;
		background-color: #237bff;
		filter: blur(70px);
	}
	@media (min-width: 768px) and (min-width: 1024px) {
		.circle-1 {
			background-color: rgba(252, 0, 0, 0.7);
			/* filter: blur(200px); */
		}
		.circle-2 {
			/* filter: blur(200px); */
			background-color: rgba(35, 123, 255, 0.7);
		}
	}
</style>
