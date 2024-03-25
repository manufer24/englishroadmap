<template>

    <div class="tracking-wider leading-tight font-Poppins dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn m-1">
            Temas
            <svg width="12px" height="12px" class="h-2 w-2 fill-current opacity-60 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg>
        </div>
        <ul tabindex="0" class="dropdown-content z-[1] p-2 space-y-1 shadow-2xl bg-base-300 rounded-box w-52 max-h-80 overflow-y-scroll">
                <li><input @click="setTheme($colorMode.preference = 'light')" type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start"  aria-label="claro" value="light"></li>
                <li><input @click="setTheme($colorMode.preference = 'dark')" type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="oscuro" value="dark"/></li>
                <li><input @click="setTheme($colorMode.preference = 'cupcake')" type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="ponque" value="cupcake"/></li>
                <li><input @click="setTheme($colorMode.preference = 'bumblebee')" type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="abejorro" value="bumblebee"/></li>
                <li><input @click="setTheme($colorMode.preference = 'emerald')" type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="esmeralda" value="emerald"/></li>
                <li><input @click="setTheme($colorMode.preference = 'coffee')" type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="café" value="coffee"/></li>
                <li><input @click="setTheme($colorMode.preference = 'synthwave')" type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="synthwave" value="synthwave"/></li>
                <li><input @click="setTheme($colorMode.preference = 'retro')" type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="retro" value="retro"/></li>
                <li><input @click="setTheme($colorMode.preference = 'cyberpunk')" type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="cyberpunk" value="cyberpunk"/></li>
                <li><input @click="setTheme($colorMode.preference = 'valentine')" type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="san valentin" value="valentine"/></li>
                <li><input @click="setTheme($colorMode.preference = 'halloween')" type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="halloween" value="halloween"/></li>
                <li><input @click="setTheme($colorMode.preference = 'garden')" type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="jardin" value="garden"/></li>
                <li><input @click="setTheme($colorMode.preference = 'forest')" type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="bosque" value="forest"/></li>
                <li><input @click="setTheme($colorMode.preference = 'aqua')" type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="acuático" value="aqua"/></li>
                <li><input @click="setTheme($colorMode.preference = 'lofi')" type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="lofi" value="lofi"/></li>
                <li><input @click="setTheme($colorMode.preference = 'pastel')" type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="pastel" value="pastel"/></li>
                <li><input @click="setTheme($colorMode.preference = 'fantasy')" type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="fantasía" value="fantasy"/></li>
                <li><input @click="setTheme($colorMode.preference = 'wireframe')" type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="wireframe" value="wireframe"/></li>
                <li><input @click="setTheme($colorMode.preference = 'black')" type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="negro" value="black"/></li>
                <li><input @click="setTheme($colorMode.preference = 'dracula')" type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="dracula" value="dracula"/></li>
                <li><input @click="setTheme($colorMode.preference = 'cmyk')" type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="cmyk" value="cmyk"/></li>
                <li><input @click="setTheme($colorMode.preference = 'autumn')" type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="otoño" value="autumn"/></li>
                <li><input @click="setTheme($colorMode.preference = 'business')" type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="negocios" value="business"/></li>
                <li><input @click="setTheme($colorMode.preference = 'acid')" type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="ácido" value="acid"/></li>
                <li><input @click="setTheme($colorMode.preference = 'lemonade')" type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="limonada" value="lemonade"/></li>
                <li><input @click="setTheme($colorMode.preference = 'night')" type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="noche" value="night"/></li>
                <li><input @click="setTheme($colorMode.preference = 'corporate')" type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="corporativo" value="corporate"/></li>
                <li><input @click="setTheme($colorMode.preference = 'winter')" type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="invierno" value="winter"/></li>
                <li><input @click="setTheme($colorMode.preference = 'dim')" type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="dim" value="dim"/></li>
                <li><input @click="setTheme($colorMode.preference = 'nord')" type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="nord" value="nord"/></li>
                <li><input @click="setTheme($colorMode.preference = 'sunset')" type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="atardecer" value="sunset"/></li>
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