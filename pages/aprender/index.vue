<template>
    <MainLayout>
        <section class="tracking-wider leading-tight font-Poppins container mx-auto min-h-[192px] border-b border-neutral-content">
            <div class="py-6 text-left">
                <h1 class=" px-0 mb-4 text-2xl font-bold sm:text-center sm:text-5xl">
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
        <section class="tracking-wider leading-tight font-Poppins container mx-auto border-b border-neutral-content py-10">
                <h3 class="mb-8 rounded-md border-4 border-dotted border-primary p-2 text-center sm:w-[40%] sm:mx-auto"> 
                    Haz click en los botones para descubrir la información
                </h3>

                <nav>
                    <ul v-if="homeData" class="flex flex-col flex-wrap items-center justify-center gap-4 md:flex-row">
                        <li v-for="link in homeData" :key="link.id">
                            <nuxt-link
                                :class="link.style"
                                class="btn min-w-[250px] lg:min-w-0 btn-active text-lg"
                                :to="`/aprender/${link.slug}`"
                            >
                                {{ link.name }}
                            </nuxt-link>
                        </li>
                    </ul>
                </nav>

        </section>
            

            <GoHomeBtn />
    </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '~/layouts/MainLayout.vue';
import GoHomeBtn from '~/components/GoHomeBtn.vue';

const data = await useFetch<View>('/api/views/home')
const homeData = data.data.value?.homeData

</script>

