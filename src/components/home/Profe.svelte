<script>
	import Text from './text.svelte';
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	let currentIndex = 0;
	const imageUrls = ['/img2.png', '/img3.png', '/img4.png', '/img1.png'];

	function nextImage() {
		currentIndex = (currentIndex + 1) % imageUrls.length;
	}

	onMount(() => {
		const intervalId = setInterval(nextImage, 2000);

		return () => clearInterval(intervalId);
	});
</script>

<main>
	<Text />
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
	}
</style>
