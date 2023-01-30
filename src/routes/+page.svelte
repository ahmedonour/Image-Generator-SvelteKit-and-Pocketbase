<script>
	import Darkmode from '../components/darkmode.svelte';

	let loged = false;
	let username = (loged) => {
		if (username == 'onodev') {
			loged = true;
		}
	};
</script>

<main>
	<!-- {#if !loged}
	<input bind:value={username} type="text" placeholder="Enter Your Username">
	<button type="submit" on:click={username}>Submit</button>
	{:else } -->
	<a href="/generatorImage">Generate AI image</a>
	<Darkmode>فاتح / مظلم</Darkmode>
	<!-- {/if} -->
</main>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Belleza&display=swap');
	:global(body) {
		background-color: #000000;
		color: #ffffff;
		transition: background-color 1s;
	}
	:global(body.dark-mode) {
		background-color: #ffffff;
		color: #000000;
	}
	main {
		width: 100vw;
		height: 100vh;
		display: grid;
		place-items: center;
	}
	a {
		color: #fff;
		text-decoration: none;
		font-family: 'Belleza', sans-serif;
		font-size: 5rem;
		background-color: rgb(0, 161, 161);
		padding: 2rem 2rem;
		border-radius: 50px;
		box-shadow: inset -10px 10px 10px rgba(255, 255, 255, 0.3)
		inset 10px -10px 10px rgb(0, 0, 0, 0.5);
		transition: all 0.5s ease-in-out;
	}
	a:hover {
		box-shadow: inset -20px 20px 20px rgba(255, 255, 255, 0.3);
		padding: 3rem 3rem;
		font-size: 5.5rem;
	}
	@media (max-width: 430px) {
		a {
			font-size: 2rem;
			padding: 1rem 1rem;
			box-shadow: inset -10px 10px 10px rgba(255, 255, 255, 0.5),
		inset 5px -5px 10px rgb(0, 0, 0, 0.5);
		}
		a:hover {
			box-shadow: inset -10px 10px 10px rgba(255, 255, 255, 0.5),
		inset 10px -10px 10px rgb(0, 0, 0, 0.6);
			padding: 2rem 2rem;
			font-size: 2.5rem;
		}
	}
</style>
