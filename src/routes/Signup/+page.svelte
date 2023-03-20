<script>
	import Input from '../../components/Form/input.svelte';
</script>

<main>
	<div class="left-image">
		<a href="/"><img src="/img-SignUp.png" alt="" /></a>
	</div>
	<form action="">
		<img src="/Logo-Black.png" alt="logo" class="logo" />
		<!-- svelte-ignore a11y-label-has-associated-control -->
		<label>تسجيل حساب</label>
		<Input type="text" placeholder="إسم" />
		<Input type="password" placeholder="كلمة السر" />
		<Input type="password" placeholder="إعادة إدخال كلمة السر" />
		<Input type="text" placeholder="البريد اﻹلكتروني" />
		<div class="remmberMe"><input type="checkbox" /> <label for="">تذكرني</label></div>
		<input type="submit" value="تسجيل" class="submit" />
	</form>
</main>

<style>
	main {
		display: flex;
	}
	.logo {
		width: 100px;
	}
	.left-image {
		height: 100vh;
	}
	.left-image a img {
		height: 100%;
	}
	form {
		display: flex;
		width: 100%;
		height: 100vh;
		gap: 3rem;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	form label {
		font-weight: 700;
		font-size: 1.5rem;
	}
	form .remmberMe {
		display: flex;
		flex-direction: row-reverse;
		gap: 1rem;
		width: 40%;
	}
	form .remmberMe input {
		background-color: transparent;
		color: transparent;
	}
	form .remmberMe label {
		font-weight: 500;
		font-size: 1rem;
	}
	form .submit {
		cursor: pointer;
		width: 15vw;
		border: none;
		border-radius: 30px;
		padding: 0.5rem 1rem;
		background-color: transparent;
		font-family: 'Cairo', sans-serif;
		color: rgb(51, 192, 51);
		font-weight: 700;
		box-shadow: var(--Neo-Dark-Shadow);
	}
</style>
