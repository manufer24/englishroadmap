<template>
    <MainLayout>
        <article class="container mx-auto w-full h-[calc(100vh-6rem)] flex items-center justify-center md:w-4/5">
            <div class="leading-tight tracking-wider font-Poppins bg-base-300 flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-2xl">
                <p class="text-6xl md:text-7xl lg:text-9xl font-bold">404</p>
                <p class="text-2xl md:text-3xl lg:text-5xl font-bold mt-4">Esta página no existe</p>
                <p class=" mt-4 pb-4 border-b-2 border-primary text-center">
                    Lo sentimos, esta página no existe o no está disponible, pero tranquilo, puede ser un error nuestro también. 
                    Haciendo clic en el botón puedes volver a la página de inicio para empezar de nuevo.
                </p>
                <GoHomeBtn />
            </div>
        </article>
    </MainLayout>
</template>

<script setup>
import MainLayout from '~/layouts/MainLayout.vue'
import GoHomeBtn from '~/components/GoHomeBtn.vue';
</script>

<style scoped></style>