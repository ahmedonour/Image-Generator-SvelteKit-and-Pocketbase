<main>
    <img src="/img1.png" alt="" srcset="">
    <img src="/img2.png" alt="" srcset="">
    <img src="/img3.png" alt="" srcset="">
    <img src="/img4.png" alt="" srcset="">
</main>
<style>
    main{
        margin-top: 19rem;
        width: 85vw;
        height: 45vh;
        display: grid;
        place-items: center;
    }
    img{
       
        border-radius: 15%;
    }
    img:nth-of-type(1){
        width: 150px;
        position: relative;
        right: 0px;
        top: 100px;
        z-index: 0;
        display: none;
    }
    img:nth-of-type(2){
        display: none;
        width: 160px;
        position: relative;
        right: 0px;
        top: 0px;
        z-index: 1;
    }
    img:nth-of-type(3){
        width: 300px;
    }
    img:nth-of-type(4){
        width: 250px;
        display: none;
        position: relative;
        right: -100px;
        top: -300px;
        z-index: 3;
    }
</style>