<script>
	import Darkmode from '../darkmode.svelte';
	let visible = true;
	function toggleVisible() {
		visible = !visible;
	}
	
</script>

<nav>
	<button id="open" on:click={toggleVisible}><i class="fas fa-bars" /></button>
	{#if !visible}
	<ul id="navDropDown">
		<!-- <button id="close" on:click={toggleVisible}><i class="fas fa-x" /></button> -->
		<button id="close" on:click={() => visible = !visible} style={visible ? 'display: none' : 'display: block'}>
			<i class="fas fa-times"></i>
		  </button>
		<li>
			<Darkmode />
		</li>
		<li><a href="/Signup">إنشاء حساب</a></li>
		<li><a href="/Login">تسجيل الدخول</a></li>
	</ul>
	{/if}
	<div class="logo">
		<a href="/">
			<img src="/Logo-Text-1.png" alt="" srcset="" />

			<img src="/Logo-Text.png" alt="" srcset="" />
		</a>
	</div>
</nav>

<style>
	:global(body) nav ul li a {
		color: #fff;
	}
	:global(body) nav img:nth-of-type(1) {
		display: flex;
	}
	:global(body.dark-mode) nav ul li a {
		color: #000;
	}
	:global(body.dark-mode) nav img:nth-of-type(2) {
		display: flex;
	}
	:global(body.dark-mode) nav img:nth-of-type(1) {
		display: none;
	}
	nav {
		margin-top: 1rem;
		width: 80vw;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	nav img {
		width: 100px;
	}
	nav img:nth-of-type(1) {
		display: none;
	}
	nav img:nth-of-type(2) {
		display: none;
	}
	nav ul {
		list-style: none;
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 20vw;
	}
	nav ul li a {
		color: #fff;
		text-decoration: none;
		font-weight: 800;
	}
	nav button{
		background: transparent;
		border: none;
		display: none;
	}
	nav ul button .fa-times {
		display: none;
	}

	nav button .fa-bars {
		display: none;
	}

	@media screen and (max-width: 768px) {
		nav ul {
			display: flex;
			position: fixed;
			top: 0px;
			left: 0px;
			flex-direction: column;
			justify-content: center;
			z-index: 9999;
			width: 100vw;
			height: 100vh;
			background-color: rgba(255, 255, 255, 0.2);
			-webkit-backdrop-filter: blur(10px);
			backdrop-filter: blur(10px);
			transition: all .5s ease-in-out;
		}

		nav button{
			display: block;
			color: white;
		}
		nav ul button .fa-times {
			display: block;
			position: absolute;
			top: 20px;
			left: 20px;
			font-size: 2rem;
		}
		nav button .fa-bars {
			display: block;
			font-size: 2rem;
		}
	}
</style>
