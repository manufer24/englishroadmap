<template>
    <MainLayout>
        <section class="container mx-auto min-h-auto min-h-[192px]">
            <h1 class="py-8 font-bold text-start text-xl md:text-2xl sm:text-center
            border-b border-neutral-content">Aprende a hablar de tus cosas favoritas</h1>
            <article class="py-8 px-0">
                <div class="border-b border-neutral-content pb-6 sm:pl-4">
                    <p>
                        Aquí encontrarás una serie de enlaces con material audio visual para que aprendas a hablar de tus cosas favoritas, cuales son tus actividades preferidas, de forma correcta en inglés
                        y practicar lo aprendido. 
                    </p>

                    <p class="mt-4 p-2 bg-primary text-primary-content rounded-md flex items-center justify-center">
                        visita los siguientes enlaces haciendo CLICK sobre ellos para descubrir el contenido
                    </p>
                </div>
                <ul class="py-8 px-0">
                    <li class="mb-2 before:content-['1'] before:text-primary">
                        <nuxt-link 
                            class="text-lg underline px-2 sm:hover:text-primary sm:transition:colors duration-200"
                            to="https://www.anglomaniacy.pl/expressions-11-favourites-lesson.htm"
                            target="_blank" rel="noopener noreferrer"
                        >
                            Hablando sobre mis cosas favoritas
                        </nuxt-link>
                        <ul>
                            <li class="pl-10 py-2 before:content-['1.1'] before:text-secondary">
                                <nuxt-link
                                    class="underline px-2 sm:hover:text-secondary sm:transition:colors duration-200" 
                                    to="https://www.anglomaniacy.pl/expressions-11-favourites-printables.htm"
                                    target="_blank" rel="noopener noreferrer"
                                >
                                    actividades: juegos, pinta cuentos, pruebas y más...
                                </nuxt-link>
                            </li>
                            <li class="pl-10 py-2 before:content-['1.2'] before:text-secondary">
                                <nuxt-link 
                                    class="underline px-2 sm:hover:text-secondary sm:transition:colors duration-200" 
                                    to="https://www.anglomaniacy.pl/expressions-11-favourites-comics.htm"
                                    target="_blank" rel="noopener noreferrer"
                                >
                                    historietas
                                </nuxt-link>
                            </li>
                        </ul>
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