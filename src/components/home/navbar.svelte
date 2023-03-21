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
		<a href="/"
			><img src="/Logo-Black.png" alt="" class="logo-white" />
			<img src="/Logo-White.png" alt="" class="logo" /></a
		>
		<ul>
			<button on:click={closeNav}>
				<span><i class="fas fa-times" /></span>
			</button>
			<!-- <li><a href="/">Home</a></li> -->
			<Darkmode />
			<li><a href="/Login">تسجيل الدخول</a></li>
			<li><a href="/Signup">تسجيل حساب</a></li>
		</ul>
	</nav>

	<button on:click={toggleNav}>
		<span><i class="fas fa-bars" /></span>
	</button>
	<img src="/Logo-Black.png" alt="" />
	<img src="/Logo-White.png" alt="" id="dark"/>
</header>

<style>
	:global(body.dark-mode) nav a img:nth-of-type(2) {
		display: flex;
	}
	:global(body.dark-mode) nav a img:nth-of-type(1) {
		display: none;
	}
	:global(body.dark-mode) nav a .logo {
		display: none;
	}
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	.logo-white{
		display: none;
	}
	.logo {
		display: none;
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
	}header img{

		width: 100px;
	}
	header #dark {
		display: none;
	}
	header img:nth-of-type(2) {
		display: none;
	}
	header a {
		/* background-color: aquamarine; */

		width: 7vw;
	}
	header a img {
		width: 100%;
	}
	.fa-bars{

		font-size: 2rem;
	}
	.fa-times{
		position: absolute;
		top: 50px;
		left: 50px;
		font-size: 3rem;
	}
	nav {
		position: fixed;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		
		display: flex;
		flex-direction: row-reverse;
		justify-content: center;
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
		font-size: 2rem;
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
	/* header button img {
		width: 50px;
	} */
	@media (min-width: 768px) {
		:global(body.dark-mode) header img:nth-of-type(2) {
			display: flex;
		}
		:global(body.dark-mode) header img:nth-of-type(1) {
			display: none;
		}
		nav {
			position: static;
			transform: translateX(0);
			background-color: transparent;
			background-color: transparent;
		-webkit-backdrop-filter: blur(10px);
		backdrop-filter: blur(10px);
		}
		nav a .logo,
		nav a .logo-white {
			display: none;
		}
		ul {
			font-size: 1rem;
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
