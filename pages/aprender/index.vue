<template>
    <MainLayout>
        <section class="container mx-auto min-h-auto min-h-[192px] border-b border-neutral-content">
            <div class="py-6 pb-14 text-left">
                <h1 class=" px-0 mb-2 text-2xl font-bold sm:mb-4 sm:text-center sm:text-5xl">
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
                <p class="px-0 text-md">
                    Hojas de ruta,
                    ordenadas y bien estructuradas con contenido didactico y audio visual 
                    que ayuden a orientar a los niños de aprender básica en su aprendizaje
                    del idioma inglés. 
                </p>
            </div>
        </section>
        <section class="container mx-auto border-b border-neutral-content py-10">
                <h3 class="mb-8 rounded-md border-4 border-dotted border-primary p-2 text-center sm:w-[40%] sm:mx-auto"> 
                    Haz click en los botones para descubrir la información
                </h3>
                <nav>
                    <ul class="flex flex-col flex-wrap items-center justify-center gap-4 md:flex-row">
                        <li>
                            <button class="btn btn-active bg-primary text-primary-content hover:bg-primary-content hover:text-primary text-lg">
                                <nuxt-link class="h-full flex items-center" to="/aprender/abecedario"><span class="font-bold mr-2">#1</span> Abecedario</nuxt-link>
                            </button>
                        </li>
                        <li>
                            <button class="btn btn-active w-56 bg-secondary text-secondary-content hover:bg-secondary-content hover:text-secondary text-lg">
                                <nuxt-link class="h-full flex items-center" to="/aprender/presentarse"><span class="font-bold mr-2">#2</span>Presentarse</nuxt-link>
                            </button>
                        </li>
                        <li>
                            <button class="btn btn-active w-56 bg-accent text-accent-content hover:bg-accent-content hover:text-accent text-lg">
                                <nuxt-link class="h-full flex items-center" to="/aprender/saludos-y-despedidas"><span class="font-bold mr-2">#3</span>Saludos/despedidas</nuxt-link>
                            </button>
                        </li>
                        <li>
                            <button class="btn btn-active bg-primary text-primary-content hover:bg-primary-content hover:text-primary text-lg">
                                <nuxt-link class="h-full flex items-center" to="/aprender/describir-personas"><span class="font-bold mr-2">#4</span>Describir/indentificar</nuxt-link>
                            </button>
                        </li>
                        <li>
                            <button class="btn btn-active w-56 bg-secondary text-secondary-content hover:bg-secondary-content hover:text-secondary text-lg">
                                <nuxt-link class="h-full flex items-center" to="/aprender/colores"><span class="font-bold mr-2">#5</span>Colores</nuxt-link>
                            </button>
                        </li>
                        <li>
                            <button class="btn btn-active w-56 bg-accent text-accent-content hover:bg-accent-content hover:text-accent text-lg">
                                <nuxt-link class="h-full flex items-center" to="/aprender/numeros"><span class="font-bold mr-2">#6</span>Números</nuxt-link>
                            </button>
                        </li>
                    </ul>
                </nav>
            </section>
            <GoHomeBtn />
    </MainLayout>
</template>

<script setup>
import MainLayout from '~/layouts/MainLayout.vue';
import GoHomeBtn from '~/components/GoHomeBtn.vue';
</script>