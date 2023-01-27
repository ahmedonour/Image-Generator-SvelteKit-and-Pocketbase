<script>
	import { Configuration, OpenAIApi } from 'openai';

	let prompt = '';
	let result = '';
	let loading = false;
	let placeholder =
		'أكتب ما تريد بلغة عربية واضحة';
		// Search Bears with Paint Brushes the Starry Night, painted by Vincent Van Gogh..
	const configuration = new Configuration({
		apiKey: import.meta.env.VITE_Open_AI_Key
	});
	const openai = new OpenAIApi(configuration);

	const generateImage = async () => {
		placeholder = `Search ${prompt}..`;
		loading = true;
		const res = await openai.createImage({
			prompt: prompt,
			n: 1,
			size: '512x512'
		});
		loading = false;
		result = res.data.data[0].url;
	};
</script>

<main class="app-main">
	{#if loading}
		<h2>Generating..Please Wait..</h2>
		<div class="lds-ripple">
			<div />
			<div />
		</div>
	{:else}
		<h2>
قم بإنشاء صورة باستخدام الذكاء اﻹصطناعي
			<br>
			تم تطويره على يد
			<a href="https://twitter.com/ahmed_onour">أحمد سليمان</a>
		</h2>
		<textarea
			class="app-input"
			{placeholder}
			on:input={(e) => {
				prompt = e.target.value;
			}}
			rows="10"
			cols="40"
		/>
		<button on:click={generateImage}> انقر لإنشاء صورة </button>
		{#if result.length > 0}
			<img class="result-image" src={result} alt="result" />
			<a class="btn" href={result} download>تنزيل</a>
		{/if}
	{/if}
</main>

<style>
@import url('https://fonts.googleapis.com/css2?family=Belleza&display=swap');
	h2 {
		font-family: 'Belleza', sans-serif;
		font-family: 'Cairo Play', sans-serif;
		text-align: center;
	}
	h2 a{
		color: rgb(172, 172, 172);
		text-decoration: none;
	}
	.app-main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-family: 'Cairo Play', sans-serif;
		font-family: 'Belleza', sans-serif;
	}

	.app-input {
		height: 35px;
		margin: 20px;
		border: 2px solid black;
		padding: 10px;
		font-size: 14px;
		font-family: 'Cairo Play', sans-serif;
		font-weight: 900;
		border-radius: 10px;
		outline: none;
		text-align: right;
	}
	button{
		background-color: rgb(252, 177, 39);
		padding: 1rem 1rem;
		color: rgb(0, 0, 0);
		font-family: 'Cairo Play', sans-serif;
		font-size: 1.5rem;
		border: none;
		border-radius: 10px;
		box-shadow: inset -5px 5px 5px rgba(255, 255, 255, 0.3),inset 5px -5px 5px rgba(0, 0, 0, 0.3);
	}
	.btn{
		background-color: rgb(252, 177, 39);
		padding: 1rem 1rem;
		color: rgb(0, 0, 0);
		font-family: 'Cairo Play', sans-serif;
		font-size: 1.5rem;
		border: none;
		border-radius: 10px;
		box-shadow: inset -5px 5px 5px rgba(255, 255, 255, 0.3),inset 5px -5px 5px rgba(0, 0, 0, 0.3);
	}
	.result-image {
		margin-top: 20px;
		width: 350px;
	}

	.lds-ripple {
		display: inline-block;
		position: relative;
		width: 80px;
		height: 80px;
	}
	.lds-ripple div {
		position: absolute;
		border: 4px solid #fff;
		opacity: 1;
		border-radius: 50%;
		animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
	}
	.lds-ripple div:nth-child(2) {
		animation-delay: -0.5s;
	}
	@keyframes lds-ripple {
		0% {
			top: 36px;
			left: 36px;
			width: 0;
			height: 0;
			opacity: 0;
		}
		4.9% {
			top: 36px;
			left: 36px;
			width: 0;
			height: 0;
			opacity: 0;
		}
		5% {
			top: 36px;
			left: 36px;
			width: 0;
			height: 0;
			opacity: 1;
		}
		100% {
			top: 0px;
			left: 0px;
			width: 72px;
			height: 72px;
			opacity: 0;
		}
	}
</style>
