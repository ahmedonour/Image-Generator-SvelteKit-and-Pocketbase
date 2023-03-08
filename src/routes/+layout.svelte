<script>
	import Footer from '../components/footer.svelte';
	import Navbar from '../components/home/navbar.svelte';
</script>

<main>
	<Navbar />
</main>
<slot />
<footer>
	<Footer />
</footer>

<style>
	main {
		display: grid;
		place-items: center;
	}
	footer {
		height: 100px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
