<script setup lang="ts">
import navBar from '../components/navBar.vue';
</script>

<template>
  <navBar></navBar>
  
  <div class="container-main">
    <div class="container-one">
      <div class="card">
        <img class="w-32 h-32 rounded-full mx-auto" src="../img/typescript.png" alt="Profile picture">
        <h2 class="text-center text-2xl font-semibold mt-3">Typescript</h2>
        <p class="text-center text-gray-600 mt-1"></p>
        <div class="flex justify-center mt-5">
          <a href="#" class="text-blue-500 hover:text-blue-700 mx-3">GitHub</a>
        </div>
        <div class="mt-5">
          <h3 class="text-xl font-semibold">Informacion</h3>
          <p class="text-gray-600 mt-2">Recientemente e utilizado typescript para desarrollar una api la cual sera consumida posteriormente por programadores frontend.</p>
        </div>
      </div>
    </div>
    
    <div class="container-one">
      <div class="card">
        <img class="w-32 h-32 rounded-full mx-auto" src="../img/java.png" alt="Profile picture">
        <h2 class="text-center text-2xl font-semibold mt-3">Desarrollo de software Java</h2>
        <p class="text-center text-gray-600 mt-1"></p>
        <div class="flex justify-center mt-5">
          <a href="#" class="text-blue-500 hover:text-blue-700 mx-3">GitHub</a>
        </div>
        <div class="mt-5">
          <h3 class="text-xl font-semibold">Informacion</h3>
          <p class="text-gray-600 mt-2">Dominio de Programacion orientada a objetos en java y algunas de sus tecnologias, tales como, jdbc, mvc, y posteriormente spring e hibernate</p>
        </div>
      </div>
    </div>
    
    <div class="container-one">
      <div class="card">
        <img class="w-35 h-32 rounded-full mx-auto" src="../img/git.png" alt="Profile picture">
        <h2 class="text-center text-2xl font-semibold mt-3">Control de versiones</h2>
        <p class="text-center text-gray-600 mt-1"></p>
        <div class="flex justify-center mt-5">
          <a href="#" class="text-blue-500 hover:text-blue-700 mx-3">AzureDevOps</a>
          <a href="https://github.com/4lmas/ApiTypeScript" class="text-blue-500 hover:text-blue-700 mx-3" target="_blank">GitHub</a>
        </div>
        <div class="mt-5">
          <h3 class="text-xl font-semibold">Informacion</h3>
          <p class="text-gray-600 mt-2">Experiencia manejaando control de versiones de codigo, con diferentes plataformas como: Azure DevOps y GitHub</p>
          <br>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
body, html {
  height: 100%;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container-main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
}

.container-one {
  flex: 1;
  text-align: center;
  padding: 8px;
  margin: 20px;
  border-radius: 10px;
  transition: 0.5s;
}

.container-one:hover {
  color: #6b2e7a;
}

.card {
  max-width: 300px;
  margin: 0 auto;
  background-color: #111827;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transition: background-color 0.3s;
  transition: transform 0.3s ease-in-out;
  border: solid #00e7c7;
}

.card:hover {
  background-color: #00b199;
  color: #fff;
  transform: scale(1.05);
  z-index: -10;
}

.card h2 {
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 1rem;
  transition: color 0.3s;
}

.card p{
  color: #fff;
}

.card a{
  color: #00E7C7;
}
.card h3{
  color: #00b199;
}

.card:hover a{
  color: #fff;
}
.card:hover p {
  color: #fff;
}

.card:hover h2 {
  color: #ffffff;
}

.card:hover h3 {
  color: #fff;
}
</style>