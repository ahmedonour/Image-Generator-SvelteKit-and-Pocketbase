<script>
	import { onMount } from 'svelte';
	import Darkmode from '../darkmode.svelte';

	let isNavOpen = false;

	function toggleNav() {
		isNavOpen = !isNavOpen;
	}

	function closeNav() {
		isNavOpen = false;
	}

	let mediaQuery = null;

	onMount(() => {
		mediaQuery = window.matchMedia('(min-width: 768px)');
		mediaQuery.addEventListener('change', closeNav);
	});
</script>

<header>
	<nav class:open={isNavOpen}>
		<a href="/"><img src="/Logo-Black.png" alt="" /></a>
		<ul>
			<button on:click={closeNav}>
				<span>Close</span>
			</button>
			<!-- <li><a href="/">Home</a></li> -->
			<Darkmode />
			<li><a href="/Login">تسجيل الدخول</a></li>
			<li><a href="/Signup">تسجيل حساب</a></li>
		</ul>
	</nav>

	<button on:click={toggleNav}>
		<span>Menu</span>
	</button>
</header>

<style>	*{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
	header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		/* padding: 1rem; */
		/* background-color: #333; */
		color: white;
		width: 70vw;
	}
	header a {
		/* background-color: aquamarine; */

		width: 7vw;
	}
	header a img {
		width: 100%;
	}
	nav {
		position: fixed;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: row-reverse;
		justify-content: space-between;
		align-items: center;
		background-color: #3333332c;
		-webkit-backdrop-filter: blur(10px);
		backdrop-filter: blur(10px);
		color: white;
		transform: translateX(-100%);
		transition: transform 0.3s ease-out;
		z-index: 5;
	}

	nav.open {
		transform: translateX(0);
	}

	ul {
		list-style: none;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	li {
		margin: 1rem 0;
	}

	a {
		color: white;
		text-decoration: none;
		font-weight: bold;
	}

	button {
		background: none;
		border: none;
		color: white;
		font-size: 1.2rem;
		cursor: pointer;
	}

	@media (min-width: 768px) {
		nav {
			position: static;
			transform: translateX(0);
			background-color: transparent;
		}

		ul {
			flex-direction: row;
		}

		li {
			margin: 0 1rem;
		}

		button {
			display: none;
		}
	}
</style>
