<script>
	import { Configuration, OpenAIApi } from 'openai';
	import { fly } from 'svelte/transition';

	let sourceLanguage = 'ar';
	let targetLanguage = 'en';
	export let text = '';
	let translatedText = '';
	// Translation API
	async function translate() {
		const encodedParams = new URLSearchParams();
		encodedParams.append('source_language', sourceLanguage);
		encodedParams.append('target_language', targetLanguage);
		encodedParams.append('text', text);

		const response = await fetch('https://text-translator2.p.rapidapi.com/translate', {
			method: 'POST',
			body: encodedParams,
			headers: {
				'content-type': 'application/x-www-form-urlencoded',
				'X-RapidAPI-Key': '51e505a872msha72d416d445e88fp124564jsn6e3109e85e93',
				'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
			}
		});
		const transText = await response.json();

		console.log(transText.data);
		translatedText = transText.data.translatedText;
	}
	//AI REQ
	let prompt = translatedText;
	let result = '';
	let result1 = '';
	let result2 = '';
	let result3 = '';
	let result4 = '';
	let result5 = '';
	let result6 = '';
	let result7 = '';
	let result8 = '';
	let result9 = '';
	let loading = false;
	let placeholder =
		'مثال : صورة مقربة , استوديو باﻷبيض و اﻷسود للموضوع, إضاءة خلفية مثيرة , 1973 صورة من مجلة لايف';
	// Search Bears with Paint Brushes the Starry Night, painted by Vincent Van Gogh..
	const configuration = new Configuration({
		apiKey: import.meta.env.VITE_Open_AI_Key
	});
	const openai = new OpenAIApi(configuration);

	const generateImage = async () => {
		await translate();
		placeholder = `أنشئ ${text}`;
		loading = true;
		const res = await openai.createImage({
			prompt: translatedText,
			n: 10,
			size: '1024x1024'
		});
		loading = false;
		result = res.data.data[0].url;
		result1 = res.data.data[1].url;
		result2 = res.data.data[2].url;
		result3 = res.data.data[3].url;
		result4 = res.data.data[4].url;
		result5 = res.data.data[5].url;
		result6 = res.data.data[6].url;
		result7 = res.data.data[7].url;
		result8 = res.data.data[8].url;
		result9 = res.data.data[9].url;
	};
</script>

<svelte:head>
	<title>صفحة إنشاء الصور</title>
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-RSQEDKWQ54"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());

		gtag('config', 'G-RSQEDKWQ54');
	</script>
</svelte:head>
<main class="app-main" transition:fly={{ x: 200, duration: 1000 }}>
	{#if loading}
		<h2>الرجاء اﻹنتظار</h2>
		<div class="lds-ripple">
			<div />
			<div />
		</div>
	{:else}
		<h2>أكتب نص واضح باللغة العربية لأفضل النتائج</h2>
		<h1>{prompt}</h1>
		<textarea
			class="app-input"
			{placeholder}
			on:input={(e) => {
				text = e.target.value;
			}}
		/>
		<button class="g-btn" on:click={generateImage}> إنشاء صورة </button>
		<div class="images">
			{#if result.length > 0}
				<div class="download-button">
					<img class="result-image" src={result} alt="result" />
					<a class="btn" href={result} target="_blank" rel="noreferrer" download>تنزيل</a>
				</div>
			{/if}
			{#if result1.length > 0}
				<img class="result-image" src={result1} alt="result" />
				<a class="btn" href={result1} target="_blank" rel="noreferrer" download>تنزيل</a>
			{/if}
			{#if result2.length > 0}
				<img class="result-image" src={result2} alt="result" />
				<a class="btn" href={result2} target="_blank" rel="noreferrer" download>تنزيل</a>
			{/if}
			{#if result3.length > 0}
				<img class="result-image" src={result3} alt="result" />
				<a class="btn" href={result3} target="_blank" rel="noreferrer" download>تنزيل</a>
			{/if}
			{#if result4.length > 0}
				<img class="result-image" src={result4} alt="result" />
				<a class="btn" href={result4} target="_blank" rel="noreferrer" download>تنزيل</a>
			{/if}
			{#if result5.length > 0}
				<img class="result-image" src={result5} alt="result" />
				<a class="btn" href={result5} target="_blank" rel="noreferrer" download>تنزيل</a>
			{/if}
			{#if result6.length > 0}
				<img class="result-image" src={result6} alt="result" />
				<a class="btn" href={result6} target="_blank" rel="noreferrer" download>تنزيل</a>
			{/if}
			{#if result7.length > 0}
				<img class="result-image" src={result7} alt="result" />
				<a class="btn" href={result7} target="_blank" rel="noreferrer" download>تنزيل</a>
			{/if}
			{#if result8.length > 0}
				<img class="result-image" src={result8} alt="result" />
				<a class="btn" href={result8} target="_blank" rel="noreferrer" download>تنزيل</a>
			{/if}
			{#if result9.length > 0}
				<img class="result-image" src={result9} alt="result" />
				<a class="btn" href={result9} target="_blank" rel="noreferrer" download>تنزيل</a>
			{/if}
		</div>
	{/if}
</main>

<style>
	:global(body.dark-mode) .app-input {
		transition: all 1s;
		box-shadow: var(--Neo-Shadow);
		color: #000;
	}
	:global(body.dark-mode) .g-btn {
		color: black;
		box-shadow: var(--Neo-Shadow);
		transition: all 1s;
	}
	:global(body.dark-mode) .btn {
		color: black;
		box-shadow: var(--Neo-Shadow);
		transition: all 1s;
	}
	:global(body.dark-mode) .lds-ripple div {
		border: 4px solid #000;
	}
	.images {
		width: 70vw;
		height: fit-content;
		/* background-color: #0a0019; */
		padding: 2rem 4rem;
		border-radius: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
	}
	h2 {
		font-size: 1.2rem;
		font-weight: 500;
		font-family: 'Cairo', sans-serif;
		text-align: center;
		margin-top: 2rem;
	}
	.app-main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-family: 'Cairo', sans-serif;
		font-family: 'Belleza', sans-serif;
	}

	.app-input {
		width: 80vw;
		height: 35vh;
		margin: 20px;
		padding: 10px;
		font-size: 14px;
		font-family: 'Cairo', sans-serif;
		font-weight: 900;
		border-radius: 10px;
		color: #fff;
		outline: none;
		text-align: right;
		background-color: transparent;
		border: none;
		box-shadow: var(--Neo-Dark-Shadow);
	}
	.app-input::placeholder {
		text-align: right;
		font-size: 1rem;
		font-weight: 500;
	}
	button {
		background-color: transparent;
		padding: 0rem 2rem;
		font-family: 'Cairo', sans-serif;
		font-size: 1.5rem;
		border: none;
		border-radius: 10px;
		box-shadow: var(--Neo-Dark-Shadow);
	}
	.g-btn {
		margin-top: 2rem;
		color: #fff;
		cursor: pointer;
	}
	.btn {
		width: 50%;
		background-color: transparent;
		padding: 1rem 1rem;
		color: #fff;
		font-family: 'Cairo', sans-serif;
		font-size: 1.5rem;
		border: none;
		border-radius: 10px;
		box-shadow: var(--Neo-Dark-Shadow);
		text-decoration: none;
		text-align: center;
	}
	.result-image {
		margin: 20px;
		width: 350px;
		border-radius: 20px;
	}
	.download-button {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
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
	@media (min-width: 768px) and (min-width: 1024px) {
		.app-input {
			width: 40vw;
			height: 20vh;
			padding: 1rem;
		}
	}
</style>
