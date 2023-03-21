<script>
	import Darkmode from '../darkmode.svelte';
</script>

<nav>
	<ul>
		<li>
			<Darkmode />
		</li>
		<li><a href="/Signup">إنشاء حساب</a></li>
		<li><a href="/Login">تسجيل الدخول</a></li>
	</ul>
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
	@media (max-width: 768px) {
		nav {
			display: none;
		}
	}
</style>
