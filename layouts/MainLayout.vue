<template>
    <header 
        class="
            flex items-center
            px-5 h-16 sm:py-5 
            sm:justify-around text-black 
            dark:bg-bgDark dark:text-textDark
            "
    >
        <div class="container mx-auto flex justify-between items-center h-16 border-b border-gray-300">
            <NuxtLink
                class=""
                to="/"
            >
                <img class="w-12 h-10 cursor-pointer hover:scale-110 sm:transition-transform" src="/icon-512x512.png" alt="ER logo">
            </NuxtLink>
            <primaryMenu />
        </div>
    </header>

    <main>
        <slot />
    </main>
</template>

<script setup>
import primaryMenu from '~/components/primaryMenu.vue';
</script>