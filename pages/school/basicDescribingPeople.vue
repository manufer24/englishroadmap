<template>
    <MainLayout>
        <section class="container mx-auto min-h-auto min-h-[192px]">
            <h1 class="py-8 font-bold text-start text-xl md:text-2xl sm:text-center
            border-b border-neutral-content">Aprende a describir personas e identificar cosas</h1>
            <article class="py-8 px-0">
                <div class="border-b border-neutral-content pb-6 sm:pl-4">
                    <p>
                        Aquí encontrarás una serie de enlaces con material audio visual para que aprendas a describir personas, identificar cosas e identificar opuestos de forma correcta en inglés
                        y practicar lo aprendido. 
                    </p>

                    <p class="mt-4 p-2 bg-primary text-primary-content rounded-md flex items-center justify-center">
                        visita los siguientes enlaces haciendo CLICK sobre ellos para descubrir el contenido
                    </p>
                </div>
                <ul class="py-8 px-0">
                    <li class="mb-2 before:content-['1']">
                        <nuxt-link 
                            class="text-lg underline px-2 sm:hover:text-primary sm:transition:colors duration-200"
                            to="https://www.anglomaniacy.pl/expressions-6-people-lesson.htm"
                            target="_blank" rel="noopener noreferrer"
                        >
                         Describir personas
                        </nuxt-link>
                    </li>
                    <li class="mb-2 before:content-['2']">
                        <nuxt-link 
                        class="text-lg underline px-2 sm:hover:text-primary sm:transition:colors duration-200"
                            to="https://www.anglomaniacy.pl/expressions-7-identifying-lesson.htm"
                            target="_blank" rel="noopener noreferrer"
                        >
                        aprende a idientificar cosas y objetos
                        </nuxt-link>
                    </li>
                    <li class="mb-2 before:content-['3']">
                        <nuxt-link 
                        class="text-lg underline px-2 sm:hover:text-primary sm:transition:colors duration-200"
                            to="https://www.anglomaniacy.pl/expressions-8-opposites-lesson.htm"
                            target="_blank" rel="noopener noreferrer"
                        >
                        aprende a identificar y diferenciar los opuestos
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