<script>
	import Navbar from "../components/home/navbar.svelte";
    let className = 'center';
</script>
<main>
<Navbar bind:className/>
</main>
<slot/>
<style>
    main{
        display: grid;
        place-items: center;
    }
</style>