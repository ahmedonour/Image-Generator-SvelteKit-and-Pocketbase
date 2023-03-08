<script>
	import StartButton from './StartButton.svelte';
</script>

<main>
	<h1>أطلق العنان لخيالك حول أفكارك ألى فن</h1>
	<p>أول مولد صور بإستخدام الذكاء الإصطناعي باللغة العربية</p>
	<StartButton />
</main>

<style>
	main {
		display: grid;
		place-items: center;
		width: 80vw;
		position: absolute;
		top: 100px;
	}
	main h1 {
		font-weight: 300;
		font-size: 2.3rem;
		text-align: center;
	}
	main p {
		font-size: 1.4rem;
		font-weight: 800;
		text-align: center;
	}
	@media (min-width: 768px) and (min-width: 1024px) {
		main h1 {
			font-size: 4rem;
			font-weight: 200;
		}
	}
</style>
