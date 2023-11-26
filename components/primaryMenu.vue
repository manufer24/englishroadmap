<template>
        <select class="select w-32 border-primary border-2" v-model="colorMode.preference">
            <option disabled selected>Tema</option>
            <option v-for="theme of themes" :key="theme">{{ theme }}</option>
        </select>
</template>

<script setup lang="ts">
const colorMode = useColorMode();
const themes = [
    "light",
    "dark",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "forest",
    "aqua",
    "black",
    "luxury",
    "dracula",
    "lemonade",
    "night",
    "coffee",
    "winter",
    "dim",
    "nord",
    "sunset",
];
</script>