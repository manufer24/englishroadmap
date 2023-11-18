<template>
        <nav class="flex items-center gap-2">
            <nuxt-link class="font-semibold my-auto text-black dark:text-textDark" to="/FAQs">FAQs</nuxt-link>
            <button
                class="w-10 ml-4"
                @click="setTheme($colorMode.preference == 'dark' ? 'light' : 'dark')"
            >
                <img
                    v-if="$colorMode.preference == 'dark'"
                    src="/sun.svg" alt="img" class="w-10 h-10"
                >
                <img
                    v-if="$colorMode.preference == 'light'"
                    src="/moon.svg" alt="img" class="w-10 h-10"
                >
            </button>
        </nav>
</template>

<script setup lang="ts">
import { useState } from '#app'
import { onMounted, watch } from '@vue/runtime-core'


type Theme = 'light' | 'dark'


const LOCAL_STORAGE_THEME_KEY = 'theme'


const darkMode = useState('theme', () => false)


const setTheme = (newTheme: Theme) => {

    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)

    darkMode.value = newTheme === 'dark'

    useColorMode().preference = newTheme

}


onMounted(() => {

    const isDarkModePreferred = window.matchMedia('(prefers-color-scheme: dark)').matches


    const themeFromLocalStorage = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme


    if (themeFromLocalStorage) {

    setTheme(themeFromLocalStorage)

    } else {

    setTheme(isDarkModePreferred ? 'dark' : 'light')

    }

})


watch(darkMode, (selected) => {

    setTheme(selected ? 'dark' : 'light')

})
</script>