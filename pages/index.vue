<template>
    <MainLayout>
        <section class="container mx-auto min-h-[192px] border-b border-neutral-content">
            <div class="py-6 text-left">
                <h1 class=" leading-tight tracking-wider font-Poppins px-0 mb-4 text-2xl font-bold sm:text-center sm:text-5xl">
                    <span class="text-primary">E</span>
                    <span class="text-secondary">n</span>
                    <span class="text-accent">g</span>
                    <span class="text-primary">l</span>
                    <span class="text-secondary">i</span>
                    <span class="text-accent">s</span>
                    <span class="text-primary">h</span>
                    <span class="mx-2"></span>
                    <span class="text-secondary">R</span>
                    <span class="text-accent">o</span>
                    <span class="text-primary">a</span>
                    <span class="text-secondary">d</span>
                    <span class="text-accent">m</span>
                    <span class="text-primary">a</span>
                    <span class="text-secondary">p</span>
                </h1>
                <p class="px-0 text-md tracking-wider leading-tight font-Poppins">
                    Un esfuerzo comunitario para crear hojas de ruta
                    ordenadas, guías y contenido educacional
                    que ayuden a orientar a las personas a
                    la hora de elegir un camino y guiar su aprendizaje del idioma inglés.
                </p>
            </div>
        </section>
        <section class="tracking-wider leading-tight font-Poppins container mx-auto py-10 ">
            <h3 class="mb-8 rounded-md border-4 border-dotted border-primary p-2 text-center sm:w-[40%] sm:mx-auto"> 
                    Haz click en los botones para descubrir su contenido
                </h3>
                <nav>
                    <ul class="flex flex-col flex-wrap items-center justify-center gap-4 md:flex-row">
                        <li>
                            <nuxt-link 
                                class="btn btn-active min-w-[250px] bg-primary text-primary-content hover:bg-primary-content hover:text-primary text-lg" 
                                to="/primeros-pasos"
                                >
                                    primeros pasos
                                </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link 
                            class="btn btn-active min-w-[250px] bg-secondary text-secondary-content hover:bg-secondary-content hover:text-secondary text-lg" 
                            to="/consejos"
                            >
                                consejos
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link 
                                class="btn btn-active min-w-[250px] bg-accent text-accent-content hover:bg-accent-content hover:text-accent text-lg"
                                to="/aprender"
                            >
                                Aprender
                            </nuxt-link>
                        </li>
                    </ul>
                </nav>
            </section>
    </MainLayout>
</template>

<script setup>
import MainLayout from '../layouts/MainLayout'
</script>
