<script setup lang="ts">
import navBar from '../components/navBar.vue';
</script>

<template>
  <navBar></navBar>
  <h1 class="main-tittle__home">Bienvenidos</h1>
  <h3 class="sub-tittle__home">¡Este es mi sitio web! Empieza a navegar desde la barra de navegacion superior.</h3>
</template>
  
  
  
<style scoped>

.main-tittle__home {
  color: #00E7C7;
  font-size: 3rem;
  font-family: Impact, cursive;
  z-index: -1;

  text-align: center;
  cursor: pointer ;
}

.main-tittle__home:hover {
  transition: color 0.5s;
  color: #fff;
  ;
}

.sub-tittle__home {
  color: #00E7C7;
  transition: 0.5s;

  text-align: center;
  cursor: pointer ;
}

.sub-tittle__home:hover {
  color: #fff;
}
</style>