<script>
	import Circles from '../components/home/circles.svelte';
	import Profe from '../components/home/Profe.svelte';
	import Navbar from '../components/home/navbar.svelte';
	import Footer from '../components/footer.svelte';
	import DesktopNavBar from '../components/home/DesktopNavBar.svelte';
	import Nav from '../components/home/nav.svelte';
</script>

<main>
	<!-- <DesktopNavBar /> -->
	<!-- <Navbar /> -->
	<Nav />
	<Profe />
	<Footer />
	<Circles />
</main>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Belleza&display=swap');
	:global(body) {
		background-color: #181818;
		color: #ffffff;
		transition: background-color 1s;
	}
	:global(body.dark-mode) {
		background-color: #fffff5;
		color: #181818;
	}
	main {
		width: 100vw;
		height: 100vh;
		display: grid;
		place-items: center;
	}
</style>
