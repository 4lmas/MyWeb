<script setup lang="ts">
import mainBody from '../components/mainBody.vue';
import navBar from '../components/navBar.vue';

//import { ref } from 'vue';

const scrollToSection = () => {
  const section = document.querySelector('#one');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<template>
    <navBar></navBar>
    <mainBody></mainBody>
    <a to="" class="see-more" @click="scrollToSection">Ver mas</a>
    <h1 class="arrow" @click="scrollToSection">></h1>
    
   
    <div class="parrafo" id="one">
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <h1>Descubriendo mi Pasión por la Tecnología desde Temprana Edad</h1>
        <p>
            ¡Hola a todos! Soy Alejandro, un joven de 19 años que vive y respira tecnología (o talvez exagero un poco jaja).
            Desde que era un niño curioso, siempre me he sentido atraído por los misterios detrás de los dispositivos
            electrónicos desde que empeze a jugar videojuegos a temprana edad y me dio curiosidad el saber, el
            funcionamiento de los videojuegos y programas. Cada día es un emocionante paso
            adelante en mi búsqueda constante de conocimiento y crecimiento en este apasionante campo.
        </p>
        <br>
        <br>
        <h1>El Comienzo de mi Viaje en el Mundo de la Tecnología</h1>
        <p>
            Mi camino en el mundo de la tecnología comenzó después de graduarme de noveno grado. En ese momento,
            decidí perseguir mi pasión y me matricule en un Bachillerato en Desarrollo de Software. ¿Fue fácil? No siempre.
            Hubo noches de estudio intenso y momentos en los que los desafíos parecían abrumadores. Pero cada obstáculo fue
            un recordatorio de por qué comencé este viaje en primer lugar. Mi amor por la tecnología y mi deseo de crear
            soluciones innovadoras me impulsaron a seguir adelante, sin importar cuán difícil se pusiera.
        </p>
        <br>
        <br>
        <h1>Inspirando a través de la Positividad: Mensajes Motivacionales</h1>
        <p>
            Siempre he creído en compartir la inspiración. Así que, en los días en que las cosas se ponían difíciles,
            enviaba mensajes motivacionales a mis amigos y compañeros. Creo firmemente que una mentalidad positiva puede
            marcar la diferencia, y quería ser una fuente de apoyo para quienes me rodeaban.
        </p>

    </div>
</template>

<style>
body {
    background-color: #111827;
}

.arrow {
    color: #fff;

    position: absolute;

    text-align: center;
    top: 610px;
    justify-content: center;
    transform: rotate(90deg);
    cursor: pointer;
    transition: 0.3s;
}
.arrow:hover {
    color: #00E7C7;
}

.see-more {
    color: #fff;

    display: flex;
    margin-left: -23px;
    justify-content: center;
    text-align: center;
    top: 265px;
    cursor: pointer;
    position: relative;
    transition: 0.3s;
}

.see-more:hover {
    color: #00E7C7;
}

.parrafo {
    color: #fff;

    position: absolute;
    top: 700px;
    left: 0;
    width: 100%;
}

.parrafo h1 {
    color: #00E7C7;
    font-family: Arial, sans-serif;
    font-weight: bold;
    justify-content: center;
    text-align: center;
}

.parrafo p {
    padding: 50px;
    justify-content: center;
    text-align: center;
}
</style>z