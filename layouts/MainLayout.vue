<template>
    <header class="container mx-auto navbar flex justify-between lg:px-16 border-b border-neutral-content">
        <nuxt-link to="/">
            <img class="w-12 h-10 cursor-pointer hover:scale-110 sm:transition-transform" src="/icon-512x512.png" alt="English Roadmap logo">
        </nuxt-link>
        <nav class="flex justify-end ">
            <div class="dropdown dropdown-bottom dropdown-end mr-3">
            <div tabindex="0" role="button" class="btn m-1 bg-primary text-primary-content hover:bg-primary-content hover:text-primary">Menu</div>
                <ul class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 border-2 border-primary">
                    <li><nuxt-link class="hover:bg-primary-content hover:text-primary" to="/FAQs">FAQS</nuxt-link></li>
                    <li><nuxt-link class="hover:bg-primary-content hover:text-primary" to="/">Colaboradores</nuxt-link></li>
                </ul>
            </div>
            <primaryMenu />
        </nav>
    </header>

    <main>
        <slot />
    </main>
</template>

<script setup>
import primaryMenu from '~/components/primaryMenu.vue';
</script>