<template>
    <MainLayout>
        <section class="container mx-auto min-h-auto min-h-[192px]">
            <h1 class="py-8 font-bold text-start text-xl md:text-2xl sm:text-center
            border-b border-natural-content">Aprende a saludar y despedirte</h1>
            <article class="py-8 px-0">
                <div class="border-b border-natural-content pb-6 sm:pl-4">
                    <p>
                        Aquí encontrarás una serie de enlaces con material audio visual para que aprendas a saludar y despedirte de forma correcta en inglés
                        y practicar lo aprendido. 
                    </p>

                    <p class="mt-4 p-2 bg-accent text-accent-content rounded-md flex items-center justify-center">
                        visita los siguientes enlaces haciendo CLICK sobre ellos para descubrir el contenido
                    </p>
                </div>
                <ul class="py-8 px-0">
                    <li class="mb-2 before:content-['1']">
                        <nuxt-link 
                            class="text-lg underline px-2 sm:hover:text-accent sm:transition:colors duration-200"
                            to="https://www.anglomaniacy.pl/expressions-4-greetings-lesson.htm"
                            target="_blank" rel="noopener noreferrer"
                        >
                         Saludos
                        </nuxt-link>
                    </li>
                    <li class="mb-2 before:content-['2']">
                        <nuxt-link 
                        class="text-lg underline px-2 sm:hover:text-accent sm:transition:colors duration-200"
                            to="https://www.anglomaniacy.pl/expressions-3-greetings-responses-lesson.htm"
                            target="_blank" rel="noopener noreferrer"
                        >
                        Saludos y respuestas
                        </nuxt-link>
                    </li>
                    <li class="mb-2 before:content-['3']">
                        <nuxt-link 
                        class="text-lg underline px-2 sm:hover:text-accent sm:transition:colors duration-200"
                            to="https://www.anglomaniacy.pl/expressions-5-goodbye-lesson.htm"
                            target="_blank" rel="noopener noreferrer"
                        >
                            Despedidas
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