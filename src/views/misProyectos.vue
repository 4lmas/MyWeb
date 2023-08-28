<script setup lang="ts">
import navBar from '../components/navBar.vue';
</script>

<template>
    <!-- component -->
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br><!-- XD CON ESTO JAJAJA-->
    <br>
    <br>
    <navBar class="fixed-movement"></navBar>
    <div class="main-container">
        <section class="bg-white dark:bg-gray-900">
            <div class="container px-6 py-10 mx-auto">
                <div class="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
                    <div class="lg:flex">
                        <img class="object-cover w-full h-56 rounded-lg lg:w-64"
                            src="../img/iconEcoWeb.png"
                            alt="">

                        <div class="flex flex-col justify-between py-6 lg:mx-6">
                            <router-link to="/ecoWeb" class="text-xl font-semibold text-gray-800 hover:text-teal-400 dark:text-white">Eco Web</router-link>

                            <span class="text-sm text-gray-500 dark:text-gray-300">Octubre 2022</span>
                        </div>
                    </div>

                    <div class="lg:flex">
                        <img class="object-cover w-full h-56 rounded-lg lg:w-64"
                            src="../img/iconGimnasio.webp"
                            alt="">

                        <div class="flex flex-col justify-between py-6 lg:mx-6">
                            <router-link to="/" class="text-xl font-semibold text-gray-800 hover:text-teal-400 dark:text-white">Inventario de gimnasio</router-link>

                            <span class="text-sm text-gray-500 dark:text-gray-300">En desarrollo</span>
                        </div>
                    </div>

                    <div class="lg:flex">
                        <img class="object-cover w-full h-56 rounded-lg lg:w-64"
                            src="../img/api.jpg"
                            alt="">

                        <div class="flex flex-col justify-between py-6 lg:mx-6">
                            <router-link to="/" class="text-xl font-semibold text-gray-800 hover:text-teal-400 dark:text-white">Api con TypeScript</router-link>

                            <span class="text-sm text-gray-500 dark:text-gray-300">Agosto 2023</span>
                        </div>
                    </div>

                    <div class="lg:flex">
                        <img class="object-cover w-full h-56 rounded-lg lg:w-64"
                            src="../img/mistery.png"
                            alt="">

                            <div class="flex flex-col justify-between py-6 lg:mx-6">
                            <router-link to="" class="text-xl font-semibold text-gray-800 hover:text-teal-400 dark:text-white">Coming soon</router-link>

                            <span class="text-sm text-gray-500 dark:text-gray-300">???</span>
                        </div>
                    </div>

                    <div class="lg:flex">
                        <img class="object-cover w-full h-56 rounded-lg lg:w-64"
                        src="../img/mistery.png"
                            alt="">

                        <div class="flex flex-col justify-between py-6 lg:mx-6">
                            <router-link to="/" class="text-xl font-semibold text-gray-800 hover:text-teal-400 dark:text-white">Coming soon</router-link>

                            <span class="text-sm text-gray-500 dark:text-gray-300">???</span>
                        </div>
                    </div>

                    <div class="lg:flex">
                        <img class="object-cover w-full h-56 rounded-lg lg:w-64"
                        src="../img/mistery.png"
                            alt="">

                        <div class="flex flex-col justify-between py-6 lg:mx-6">
                            <router-link to="" class="text-xl font-semibold text-gray-800 hover:text-teal-400 dark:text-white">Coming soon</router-link>

                            <span class="text-sm text-gray-500 dark:text-gray-300">???</span>
                        </div> 
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style>
.main-container{
    top: 60px;
    background-color: aqua;
}


</style>