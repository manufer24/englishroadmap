<template>
    <MainLayout>
        <section class="tracking-wider leading-tight font-Poppins container mx-auto min-h-auto min-h-[192px]">
            <h1 class="py-8 font-bold text-start text-xl md:text-2xl sm:text-center
            border-b border-neutral-content"> {{ data.data.value.name }}</h1>
            <article class="py-8 px-0">
                <div class="border-b border-neutral-content pb-6 sm:pl-4">
                    <p>
                        {{ data.data.value.description }}
                    </p>

                    <p class="mt-4 p-4 bg-primary text-primary-content rounded-md flex items-center justify-center">
                        visita los siguientes enlaces haciendo CLICK sobre ellos para descubrir el contenido
                    </p>
                </div>
                <ul class="py-8 px-0">
                    <li
                        v-for="links in data.data.value.linksSections" :key="links.name"
                        class="mb-2 py-2 before:content-['1'] before:text-primary">
                        <nuxt-link 
                            class="text-lg underline px-2 sm:hover:text-primary sm:transition:colors duration-200"
                            :to="links.path"
                            target="_blank" rel="noopener noreferrer"
                        >
                            {{ links.name }}
                        </nuxt-link>

                        <ul v-if="links.links && links.links.length">
                            <li 
                                v-for="link in links.links" :key="link.name" 
                                class="pl-10 py-4 before:content-['1.1'] before:text-secondary"
                            >
                                <nuxt-link
                                    class="underline pl-2 sm:hover:text-secondary sm:transition:colors duration-200" 
                                    :to="link.path"
                                    target="_blank" rel="noopener noreferrer"
                                >
                                    {{ link.name }}
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

const data = await useFetch('/api/views/' + useRoute().params.slug)
</script>