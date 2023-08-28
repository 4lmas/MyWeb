<template>
    <body>
        <nav class="nav-bar">
            <router-link to="/" class="navBar-tittle">Diferent Web</router-link>
            <ul class="navBar-tittle__aboutInfo">
                <router-link to="/about" class="link"> Acerca de mi |</router-link>
                <router-link to="/misProyectos" class="link"> Mis proyectos |</router-link>
                <router-link to="/habilities" class="link"> Mis habilidades |</router-link>
                <router-link to="/socialMedia" class="link"> Mis redes sociales |</router-link>
                <router-link to="/contact" class="link"> Contactame </router-link>
            </ul>
        </nav>
    </body>
</template>
<style>
.nav-bar {
    position: fixed;
    top: 0px;
    background-color: rgb(17, 24, 39);
    width: 100%;
    height: 65px;
    box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.3);
    padding: 10px;
    z-index: 20;
}

.navBar-tittle {
    color: #00E7C7;
    font-size: 2rem;
    background-color: transparent;

    position: fixed;
    top: 10px;
    left: 30px;
}

.navBar-tittle__aboutInfo {
    /*background-color: rgb(17, 24, 39);*/
    color: #00E7C7;
    font-size: large;

    list-style: none;

    position: fixed;
    top: 20px;
    right: 30px;
}

.link:hover {
    transition: color 0.5s;
    color: #fff;
}

.info{
    position: absolute;
    bottom: -500px;
    color: #fff;
}

</style>

<script setup lang="ts">

</script>

