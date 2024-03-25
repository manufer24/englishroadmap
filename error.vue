<template>
    <article class="p-3 w-full h-screen flex items-center justify-center">
        <div class="leading-tight tracking-wider font-Poppins bg-base-300 flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-2xl">
            <p class="text-6xl md:text-7xl lg:text-9xl font-bold">404</p>
            <p class="text-2xl md:text-3xl lg:text-5xl font-bold mt-4">Página no encontrada</p>
            <p class=" mt-4 pb-4 border-b-2 border-primary text-center">Lo sentimos, no se ha encontrado la página que busca. Puedes volver a la página de inicio y seguir aprendiendo.</p>
            <GoHomeBtn />
        </div>
    </article>
</template>

<script setup>
import GoHomeBtn from '~/components/GoHomeBtn.vue';
</script>

<style scoped></style>