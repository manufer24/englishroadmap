<template>
    <MainLayout>
        <section class="container mx-auto min-h-auto min-h-[192px]">
            <h1 class="py-8 font-bold text-start text-xl sm:text-center
            border-b border-b-gray-300">Aprende a presentarte</h1>
            <article class="py-8 px-0">
                <div class="border-b border-b-gray-300 pb-6 sm:pl-4">
                    <p>
                        Aquí encontrarás una serie de enlaces con material audio visual para que aprendas a presentarte de forma correcta en inglés
                        y practicar. 
                    </p>
                    
                    <p class="mt-4 p-2 bg-blueRibbon w-auto text-white rounded-md flex items-center justify-center">
                        visita los siguientes enlaces haciendo CLICK sobre ellos para descubrir el contenido
                    </p>
                </div>
                <ul class="py-8 px-0">
                    <li class="mb-2 before:content-['1']">
                        <nuxt-link 
                            class="text-lg underline px-2 sm:hover:text-blueribbon sm:transition:colors duration-200"
                            to="https://www.anglomaniacy.pl/expressions-1-introducing-lesson.htm"
                            target="_blank" rel="noopener noreferrer"
                        >
                        Cómo presentarme?
                        </nuxt-link>
                    </li>
                    <li class="mb-2 before:content-['2']">
                        <nuxt-link 
                        class="text-lg underline px-2 sm:hover:text-blueribbon sm:transition:colors duration-200"
                            to="https://www.anglomaniacy.pl/expressions-2-introducing-others-lesson.htm"
                            target="_blank" rel="noopener noreferrer"
                        >
                        Cómo presentar a otros?
                        </nuxt-link>
                    </li>
                    <li class="mb-2 before:content-['3']">
                        <nuxt-link 
                        class="text-lg underline px-2 sm:hover:text-blueribbon sm:transition:colors duration-200"
                            to="https://www.youtube.com/watch?v=74FA1dyVVKs"
                            target="_blank" rel="noopener noreferrer"
                        >
                        Canción de presentación
                        </nuxt-link>
                    </li>
                </ul>
            </article>
            <BasicGoHomeBtn />
        </section>    
    </MainLayout>
    </template>
    
    <script setup>
    import MainLayout from '~/layouts/MainLayout.vue';
    import BasicGoHomeBtn from '~/components/BasicGoHomeBtn.vue';
    </script>