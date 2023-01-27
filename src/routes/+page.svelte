<script>
	let loged = false;
	let username = (loged) =>{
	if(username =='onodev'){
		loged = true;
	}
}
</script>
<main>
	<!-- {#if !loged}
	<input bind:value={username} type="text" placeholder="Enter Your Username">
	<button type="submit" on:click={username}>Submit</button>
	{:else } -->
	<a href="/generatorImage">Generate AI image</a>
	<!-- {/if} -->
</main>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Belleza&display=swap');
	main {
		width: 100vw;
		height: 100vh;
		display: grid;
		place-items: center;
	}
	a {
		color: #fff;
		text-decoration: none;
		font-family: 'Belleza', sans-serif;
		font-size: 5rem;
		background-color: black;
		padding: 2rem 2rem;
		border-radius: 50px;
		box-shadow: inset -10px 10px 10px rgba(255, 255, 255, 0.3);
		transition: all 0.5s ease-in-out;
	}
	a:hover {
		box-shadow: inset -20px 20px 20px rgba(255, 255, 255, 0.3);
		padding: 3rem 3rem;
		font-size: 5.5rem;
	}
	@media (max-width: 430px){
		a{
			font-size: 2rem;
			padding: 1rem 1rem;
			box-shadow: inset -5px 5px 5px rgba(255, 255, 255, 0.3);
		}
		a:hover {
		box-shadow: inset -10px 10px 10px rgba(255, 255, 255, 0.3);
		padding: 2rem 2rem;
		font-size: 2.5rem;
	}
		
	}
</style>
