<template>

    <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn m-1">
            Tema
            <svg width="12px" height="12px" class="h-2 w-2 fill-current opacity-60 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg>
        </div>
        <ul tabindex="0" class="dropdown-content z-[1] p-2 space-y-1 shadow-2xl bg-base-300 rounded-box w-52 max-h-80 overflow-y-scroll">
                <li><input @click="setTheme($colorMode.preference = 'light')" type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start"  aria-label="light" value="light"></li>
                <li><input @click="setTheme($colorMode.preference = 'dark')" type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="dark" value="dark"/></li>
                <li><input @click="setTheme($colorMode.preference = 'cupcake')" type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="cupcake" value="cupcake"/></li>
                <li><input @click="setTheme($colorMode.preference = 'bumblebee')" type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="bumblebee" value="bumblebee"/></li>
                <li><input @click="setTheme($colorMode.preference = 'emerald')" type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="emerald" value="emerald"/></li>
                <li><input @click="setTheme($colorMode.preference = 'corporate')" type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="corporate" value="corporate"/></li>
                <li><input @click="setTheme($colorMode.preference = 'synthwave')" type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="synthwave" value="synthwave"/></li>
                <li><input @click="setTheme($colorMode.preference = 'retro')" type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="retro" value="retro"/></li>
                <li><input @click="setTheme($colorMode.preference = 'cyberpunk')" type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="cyberpunk" value="cyberpunk"/></li>
                <li><input @click="setTheme($colorMode.preference = 'valentine')" type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Valentine" value="valentine"/></li>
                <li><input @click="setTheme($colorMode.preference = 'halloween')" type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="halloween" value="halloween"/></li>
                <li><input @click="setTheme($colorMode.preference = 'garden')" type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="garden" value="garden"/></li>
                <li><input @click="setTheme($colorMode.preference = 'forest')" type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="forest" value="forest"/></li>
                <li><input @click="setTheme($colorMode.preference = 'aqua')" type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="aqua" value="aqua"/></li>
                <li><input @click="setTheme($colorMode.preference = 'lofi')" type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="lofi" value="lofi"/></li>
                <li><input @click="setTheme($colorMode.preference = 'pastel')" type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="pastel" value="pastel"/></li>
                <li><input @click="setTheme($colorMode.preference = 'fantasy')" type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="fantasy" value="fantasy"/></li>
                <li><input @click="setTheme($colorMode.preference = 'wireframe')" type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="wireframe" value="wireframe"/></li>
                <li><input @click="setTheme($colorMode.preference = 'black')" type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="black" value="black"/></li>
                <li><input @click="setTheme($colorMode.preference = 'dracula')" type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="dracula" value="dracula"/></li>
                <li><input @click="setTheme($colorMode.preference = 'cmyk')" type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="cmyk" value="cmyk"/></li>
                <li><input @click="setTheme($colorMode.preference = 'autumn')" type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="autumn" value="autumn"/></li>
                <li><input @click="setTheme($colorMode.preference = 'business')" type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="business" value="business"/></li>
                <li><input @click="setTheme($colorMode.preference = 'acid')" type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="acid" value="acid"/></li>
                <li><input @click="setTheme($colorMode.preference = 'lemonade')" type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="lemonade" value="lemonade"/></li>
                <li><input @click="setTheme($colorMode.preference = 'night')" type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="night" value="night"/></li>
                <li><input @click="setTheme($colorMode.preference = 'coffee')" type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="coffee" value="coffee"/></li>
                <li><input @click="setTheme($colorMode.preference = 'winter')" type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="winter" value="winter"/></li>
                <li><input @click="setTheme($colorMode.preference = 'dim')" type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="dim" value="dim"/></li>
                <li><input @click="setTheme($colorMode.preference = 'nord')" type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="nord" value="nord"/></li>
                <li><input @click="setTheme($colorMode.preference = 'sunset')" type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="sunset" value="sunset"/></li>
        </ul>
    </div>
</template>

<script setup>
import { onMounted } from '@vue/runtime-core'


const LOCAL_STORAGE_THEME_KEY = 'theme'



const setTheme = (newTheme) => {

    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)


    useColorMode().preference = newTheme

}


onMounted(() => {

    const isDarkModePreferred = window.matchMedia('(prefers-color-scheme: dark)').matches


    const themeFromLocalStorage = localStorage.getItem(LOCAL_STORAGE_THEME_KEY)


    if (themeFromLocalStorage) {

    setTheme(themeFromLocalStorage)

    } else {

    setTheme(isDarkModePreferred ? 'dark' : 'light')

    }

})


</script>