<script>
    import Darkmode from '../darkmode.svelte';
</script>
<nav>
    <Darkmode></Darkmode>
    <div class="logo">
        <img src="/Logo-Text-1.png" alt="" srcset="">
        
        <img src="/Logo-Text.png" alt="" srcset="">
    </div>
</nav>
<style>
   
    :global(body) nav img:nth-of-type(1){
        display: flex;
    }
    :global(body.dark-mode) nav img:nth-of-type(2){
        display: flex;
    }
    :global(body.dark-mode) nav img:nth-of-type(1){
        display: none;
    }
    nav{
        margin-top: 1rem;
        width: 80vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    nav img{
        width: 100px;
    }
    nav img:nth-of-type(1){
        display: none;
    }
    nav img:nth-of-type(2){
        display: none;
    }
  

</style>