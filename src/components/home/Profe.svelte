<main>
    <img src="/img2.png" alt="" srcset="">
    <img src="/img3.png" alt="" srcset="">
    <img src="/img4.png" alt="" srcset="">
    <img src="/img1.png" alt="" srcset="">
</main>
<style>
    main{
        margin-top: 5rem;
        width: 85vw;
        height: 45vh;
        display: flex;
        justify-content: center;
        align-items: center;
        /* background-color: aqua; */
    }
    img{
        box-shadow: -10px 10px 15px #10101071;
        border-radius: 15%;
    }
    img:nth-of-type(1){
        width: 150px;
        position: relative;
        left: 200px;
        top: 0px;
        z-index: 0;
        display: none;
    }
    img:nth-of-type(2){
        display: none;
        width: 160px;
        position: relative;
        right: -150px;
        bottom: 100px;
        z-index: 1;
    }
    img:nth-of-type(3){
        width: 200px;
        left: 0px;
        top: 100px;
        position: relative;
        z-index: 2;
    }
    img:nth-of-type(4){
        width: 250px;
        display: none;
        position: relative;
        right: 80px;
        top: 0px;
        z-index: 3;
    }
    @media (min-width: 765px) and (min-width: 1020px){
        img:nth-of-type(1){
            display: block;
        }
        img:nth-of-type(2){
            display: block;
        }
        img:nth-of-type(4){
            display: block;
        }
        main{
            margin-top: 20rem;
        }
        }
</style>