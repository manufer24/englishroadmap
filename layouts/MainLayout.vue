<template>

    <header class="container py-2 px-1">
        <nav class="navbar flex justify-between rounded-2xl shadow-xl bg-base-100">
            <button class="btn btn-primary rounded-xl">
                <nuxt-link 
                    class="font-bold text-xl"
                    to="/"
                >
                    ER
                </nuxt-link>
            </button>

            <section class="space-x-2">
                <primaryMenu />
                <button class="dropdown dropdown-bottom dropdown-end mr-3">
                    <div tabindex="0" role="button" class="btn btn-primary">Menu</div>
                        <ul class="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52 mt-1 space-y-1">
                            <li><nuxt-link class="btn btn-sm btn-block btn-ghost justify-start" to="/FAQs">FAQS</nuxt-link></li>
                            <li><nuxt-link class="btn btn-sm btn-block btn-ghost justify-start" to="/colaboradores">Colaboradores</nuxt-link></li>
                        </ul>
                </button>
            </section>
        </nav>
    </header>

    <main class="container px-3">
        <slot />
    </main>
</template>

<script setup>
import primaryMenu from '~/components/primaryMenu.vue';
</script>