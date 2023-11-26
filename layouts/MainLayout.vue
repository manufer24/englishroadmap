<template>
    <header class="container mx-auto fixed navbar flex justify-between lg:px-28 border-b border-neutral-content bg-base-200">
        <nuxt-link 
            class="font-bold text-3xl text-primary"
            to="/"
        >
            ER
        </nuxt-link>
        <nav class="flex justify-end ">
            <div class="dropdown dropdown-bottom dropdown-end mr-3">
            <div tabindex="0" role="button" class="btn m-1 bg-primary text-primary-content hover:bg-primary-content hover:text-primary">Menu</div>
                <ul class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 border-2 border-primary">
                    <li><nuxt-link class="hover:bg-primary-content hover:text-primary" to="/FAQs">FAQS</nuxt-link></li>
                    <li><nuxt-link class="hover:bg-primary-content hover:text-primary" to="/contributors">Colaboradores</nuxt-link></li>
                </ul>
            </div>
            <primaryMenu />
        </nav>
    </header>

    <main class="pt-20">
        <slot />
    </main>
</template>

<script setup>
import primaryMenu from '~/components/primaryMenu.vue';
</script>