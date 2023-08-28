<template>
    <main>
        <h3 class="main-container__text">¡Hola!, soy</h3>
        <div class="main-container__tittle">
            Alejandro Martinez
        </div>

        <div class="main-container__img">
            <img src="../img/alAjusted.jpeg" alt="imagen autor">
        </div>
        
    </main>
</template>



<style>
.main-container__tittle {
    color: #ffffff;
    font-size: 3rem;
    font-family: Impact, cursive;
    z-index: -1;


    position: absolute;
    left: 200px;
    bottom: 275px;
}
.main-container__tittle:hover{
    transition: color 0.5s;
    color: #00E7C7;
    ;
}

.main-container__img img {
    border: 5px solid #00E7C7;
    
    position: absolute;
    top: 150px;
    right: 200px;
    overflow: hidden;
    z-index: -1;

    width: 400px;
    height: 400px;
    border-radius: 50%;
}
.main-container__text{
    color: #ffffff;
    font-size: 2rem;
    z-index: -1;

    position: absolute;
    top: 235px;
    left: 200px;
}
.main-container__text:hover{
    transition: color 0.5s;
    color: #00E7C7;
}
</style>