<script>
	import { Configuration, OpenAIApi } from 'openai';

	let prompt = '';
	let result = '';
	let loading = false;
	let placeholder =
		'Search Bears with Paint Brushes the Starry Night, painted by Vincent Van Gogh..';
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
		<h2>Generate an Image using Open AI API</h2>
		<textarea
			class="app-input"
			{placeholder}
			on:input={(e) => {
				prompt = e.target.value;
			}}
			rows="10"
			cols="40"
		/>
		<button on:click={generateImage}>Generate an Image</button>
		{#if result.length > 0}
			<img class="result-image" src={result} alt="result" />
		{/if}
	{/if}
</main>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Poppins:wght@400;500&display=swap');

	h2 {
		font-family: 'Lato', sans-serif;
	}

	.app-main {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.app-input {
		height: 35px;
		margin: 20px;
		border: 2px solid black;
		padding: 10px;
		font-size: 14px;
		font-family: 'Lato', sans-serif;
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
