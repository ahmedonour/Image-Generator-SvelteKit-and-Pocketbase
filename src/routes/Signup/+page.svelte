<!-- <script>
	import Input from '../../components/Form/input.svelte';
</script>

<main>
	<div class="left-image">
		<img src="/img-SignUp.png" alt="" />
	</div>
	<form action="?/Signup" method="POST">
		<a href="/"><img src="/Logo-Black.png" alt="logo" class="logo" /> <img src="/Logo-White.png" alt="logo" class="logo" /></a>
		<label>تسجيل حساب</label>
		<Input type="text" placeholder="إسم" name="name"/>
		<Input type="password" placeholder="كلمة السر" name="password"/>
		<Input type="password" placeholder="إعادة إدخال كلمة السر" name="passwordConfirm"/>
		<Input type="email" placeholder="البريد اﻹلكتروني" name="email"/>
		<div class="remmberMe"><input type="checkbox" /> <label for="">تذكرني</label></div>
		<input type="submit" value="تسجيل" class="submit" />
		<p>لديك حساب ؟ <a href="/Login">تسجيل الدخول</a></p>
	</form>
</main>

<style>
	:global(body.dark-mode) form a img:nth-of-type(2){
		display: block;
	}
	:global(body.dark-mode) form a img:nth-of-type(1){
		display: none;
	}
	:global(body.dark-mode) input {
		box-shadow: var(--Neo-Shadow);
	}
	form a img:nth-of-type(2){
		display: none;
	}
	main {
		display: flex;
	}
	.logo {
		width: 100px;
	}
	.left-image {
		height: 100vh;
	}
	.left-image img {
		height: 100%;
	}
	form {
		display: flex;
		width: 100%;
		height: 100vh;
		gap: 2rem;
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
	form p a {
		font-weight: 800;
		color: #808080;
	}
	@media only screen and (max-width: 768px) {
		main {
			flex-direction: column;
			align-items: center;
			justify-content: center;
			height: auto;
		}
		/* .left-image {
            height: auto;
            width: 100%;
            text-align: center;
            margin-bottom: 1rem;
        }
        .left-image img {
            height: auto;
            max-width: 80%;
        } */
		.left-image{
			display: none;
		}
		.left-image img {
			display: none;
		}
		form {
			width: 80%;
			height: auto;
			margin-top: 1rem;
		}
		form label {
			font-size: 1.2rem;
		}
		form .remmberMe {
			width: 100%;
		}
		form .submit {
			width: 100%;
		}
	}
</style> -->
<!-- src/routes/+page.svelte -->
<script lang="ts">
	import { Auth } from '@supabase/auth-ui-svelte'
	import { ThemeSupa } from '@supabase/auth-ui-shared'

	export let data
</script>

<svelte:head>
	<title>User Management</title>
</svelte:head>

<div class="row flex-center flex">
	<div class="col-6 form-widget">
		<Auth
			supabaseClient={data.supabase}
			view="magic_link"
			redirectTo={`${data.url}/auth/callback`}
			showLinks={false}
			appearance={{ theme: ThemeSupa, style: { input: 'color: #fff' } }}
		/>
	</div>
</div>
