<template>
    <header class="bg-white px-5 py-5 text-black shadow-lg">
        <nav class="container mx-auto flex items-center justify-center">
            <NuxtLink
            class="flex items-center text-lg font-medium text-black"
            to="/"
            >
            <img class="w-6 h-6 cursor-pointer hover:scale-110 sm:transition-transform" src="/er-logo.png" alt="brand logo">
            </NuxtLink>

            <!-- <ul class="hidden space-x-5 sm:flex sm:items-center">
                
                <li>
                    <a class="text-black hover:text-[#1B6DFF]" href="#">roadmap</a>
                </li> 
                <li>
                    <a class="text-black hover:text-[#1B6DFF]" href="#">best practices</a>
                </li> 
            </ul>
            <button class="block cursor-pointer text-gray-400 hover:text-gray-50 sm:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: #000;transform: ;msFilter:;"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path></svg>
            </button> -->
            </nav>
    </header>

    <article>
        <slot />
    </article>
</template>

<script setup>
</script>