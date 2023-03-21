<script>
	import Darkmode from '../darkmode.svelte';
	let isMenuOpen = false;

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
		const menu = document.querySelector('header nav ul');
		menu.classList.toggle('open');
	}
</script>

<header>
	<div class="logo">
		<img src="/Logo-Black.png" alt="" />
		<img src="/Logo-White.png" alt="" />
	</div>
	<nav>
		<label for="toggle">
			{#if isMenuOpen}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<i class="fas fa-times" on:click={toggleMenu} />
			{:else}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<i class="fas fa-bars" on:click={toggleMenu} />
			{/if}
		</label>
		<ul class={isMenuOpen ? 'open' : ''}>
			<Darkmode />
			<li><a href="/Login">تسجيل دخول</a></li>
			<li><a href="/Signup">تسجيل حساب</a></li>
		</ul>
	</nav>
</header>

<style>
	:global(body.dark-mode) header .logo img:nth-of-type(2) {
		display: block;
	}
	:global(body.dark-mode) header .logo img:nth-of-type(1) {
		display: none;
	}
    :global(body.dark-mode) a{
        color: black;
    }
	a {
		color: white;
		text-decoration: none;
	}
	header {
		width: 100vw;
		height: 100px;
		justify-content: space-around;
		align-items: center;
		display: flex;
		flex-direction: row-reverse;
	}
	header .logo img {
		width: 100px;
	}
	header .logo img:nth-of-type(2) {
		display: none;
	}
	header nav ul {
		list-style: none;
		width: 100vw;
		height: 100vh;
		position: absolute;
		top: 0px;
		left: 0;
		background-color: #3333333a;
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		z-index: 3;
		transform: translateX(-100%);
		transition: transform 0.5s ease-in-out;
		font-size: 2rem;
	}

	header nav ul.open {
		transform: translateX(0);
	}
	nav label .fas {
		font-size: 2rem;
	}
	nav label .fa-times {
		position: relative;

		z-index: 4;
		transition: all 1s ease-in-out;
	}
    @media (min-width: 1024px){
        nav label .fas{
            display: none;
        }
        header nav ul{
            transform: translateX(0);
            width: 20vw;
		height: 100%;
        justify-content:space-between;
        position: static;
        font-size: 1rem;
        font-weight: 700;
        flex-direction: row;
        background-color: transparent;
        backdrop-filter: blur(0px);
		-webkit-backdrop-filter: blur(0px);
        }
    }
</style>
