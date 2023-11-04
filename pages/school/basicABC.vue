<template>
    <MainLayout>
        <section class="container mx-auto min-h-auto min-h-[192px]">
            <h1 class="py-8 font-bold text-start text-xl sm:text-center
            border-b border-b-gray-300">Aprende el Abecedario</h1>
            <article class="py-8 px-0">
                <div class="border-b border-b-gray-300 pb-6 sm:pl-4">
                    <p>
                        Aquí encontrarás una serie de enlaces con material audio visual para que aprendas el abecedario de forma correcta en inglés
                        y practicar lo aprendido de una forma muy divertida. 
                    </p>

                    <p class="mt-4 p-2 bg-blueribbon text-white rounded-md flex items-center justify-center">
                        visita los siguientes enlaces haciendo CLICK sobre ellos para descubrir el contenido
                    </p>
                </div>
                <ul class="py-8 px-0">
                    <li class="mb-2 before:content-['1']">
                        <nuxt-link 
                            class="text-lg underline px-2 sm:hover:text-blueribbon sm:transition:colors duration-200"
                            to="https://arbolabc.com/abecedario-en-ingles"
                            target="_blank" rel="noopener noreferrer"
                        >
                         Aprende el ABC jugando
                        </nuxt-link>
                    </li>
                    <li class="mb-2 before:content-['2']">
                        <nuxt-link 
                        class="text-lg underline px-2 sm:hover:text-blueribbon sm:transition:colors duration-200"
                            to="https://www.anglomaniacy.pl/animals-printables-list.htm"
                            target="_blank" rel="noopener noreferrer"
                        >
                        Aprende el ABC con los animales
                        </nuxt-link>
                    </li>
                    <li class="mb-2 before:content-['3']">
                        <nuxt-link 
                        class="text-lg underline px-2 sm:hover:text-blueribbon sm:transition:colors duration-200"
                            to="https://www.anglomaniacy.pl/abc-printables-games.htm"
                            target="_blank" rel="noopener noreferrer"
                        >
                        folletos del ABC que puedes colorear
                        </nuxt-link>
                    </li>
                    <li class="mb-2 before:content-['4']">
                        <nuxt-link 
                        class="text-lg underline px-2 sm:hover:text-blueribbon sm:transition:colors duration-200"
                            to="https://www.anglomaniacy.pl/animals-printables-readers.htm"
                            target="_blank" rel="noopener noreferrer"
                        >
                        Lecturas cortas 
                        </nuxt-link>
                    </li>
                    <li class="mb-2 before:content-['5']">
                        <nuxt-link 
                        class="text-lg underline px-2 sm:hover:text-blueribbon sm:transition:colors duration-200"
                            to="https://www.anglomaniacy.pl/animals-printables-worksheets.htm"
                            target="_blank" rel="noopener noreferrer"
                        >
                        Hojas de tareas con animales que puedes colorear
                        </nuxt-link>
                    </li>
                    <li class="mb-2 before:content-['6']">
                        <nuxt-link 
                        class="text-lg underline px-2 sm:hover:text-blueribbon sm:transition:colors duration-200"
                            to="https://www.anglomaniacy.pl/abc-printables-worksheets.htm"
                            target="_blank" rel="noopener noreferrer"
                        >
                        Hojas de tareas del abc que puedes colorear
                        </nuxt-link>
                    </li>
                    <li class="mb-2 before:content-['7']">
                        <nuxt-link 
                        class="text-lg underline px-2 sm:hover:text-blueribbon sm:transition:colors duration-200"
                            to="https://www.anglomaniacy.pl/abc-printables-flashcards.htm"
                            target="_blank" rel="noopener noreferrer"
                        >
                        juego de tarjetas del ABC
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