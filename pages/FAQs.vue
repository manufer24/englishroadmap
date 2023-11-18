<template>
    <MainLayoutVue>
        <section class="pt-4">
            <article class="flex flex-col px-4 pb-6 border-b border-gray-300">
                <h1 class="font-bold text-xl pb-4">Hola, Soy Manuel Fernández</h1>
                <p>Yo creé englishroadmap.vercel.app para ayudar a las personas a encontrar un camino y aclarar sus dudas a la hira de aprender inglés. </p>
            </article>

            <article class="py-6 px-4 border-b border-gray-300">
                <h2 class="font-bold text-xl pb-4">Qué es englishroadmap.vercel.app? </h2>
                <p class="mb-3"><b>englishroadmap.vercel.app</b> es una herramienta que contiene hojas de ruta, planes de estudio y recursos para ayudar a las personas a encontrar un camino claro a seguir al momento de aprender ingles. Hay hojas de ruta que enumeran las habilidades que deberías aprender en cada nivel de estudio. </p>
                <p>El concepto de hojas de ruta se amplió a hojas de ruta interactivas en las que puedes hacer clic y obtener recursos para aprender cualquier habilidad en inglés, contribuir añadiendo nuevas hojas de ruta, sugerir cambios en las hojas de ruta existentes.</p>
            </article>

            <article class="py-6 px-4 border-b border-gray-300">
                <h2 class="font-bold text-xl pb-4">¿Cómo se crean las hojas de ruta?</h2>
                <p>Todas las hojas de ruta son creadas y revisadas por la comunidad y varios expertos en la materia. Además, cualquiera puede sugerir cambios en cualquier hoja de ruta y tenemos un proceso para revisarlos y aprobarlos.</p>
            </article>

            <article class="py-6 px-4 border-b border-gray-300">
                <h2 class="font-bold text-xl pb-4">Cuales son los planes para englishroadmap.vercel.app? </h2>
                <p>El plan a largo plazo es hacer de <b>englishroadmap.vercel.app</b> un lugar de referencia donde las personas puedan  consultar de forma rápida y sencilla recuso sobre inglés siempre que quieran aprender algo nuevo. También se tiene previsto intruducir pruebas practicas, cuestionarios y otras funciones útiles. </p>
            </article>

            <article class="py-6 px-4 border-b border-gray-300">
                <h2 class="font-bold text-xl pb-4">Cómo esta construido englishroadmap.vercel.app?</h2>
                <p>El sitio web está construido con 
                    <NuxtLink class="font-bold underline md:cursor-pointer" to="https://nuxt.com/" target="_blank" rel="noopener noreferrer">Nuxt.js</NuxtLink>, 
                    <NuxtLink class="font-bold underline md:cursor-pointer" to="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">Tailwindcss</NuxtLink> 
                    y esta parcialmente tipado con <NuxtLink class="font-bold underline md:cursor-pointer" to="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">TypeScript</NuxtLink>
                    y se despliega en <NuxtLink class="font-bold underline md:cursor-pointer" to="https://vercel.com/" target="_blank" rel="noopener noreferrer">Vercel</NuxtLink>. 
                    El proyecto es totalmente de código abierto y la base de código se puede encontrar en
                    <NuxtLink class="font-bold underline md:cursor-pointer" to="https://github.com/manufer24/englishroadmap" target="_blank" rel="noopener noreferrer">GitHub</NuxtLink>
                </p>
            </article>

            <article class="py-6 px-4 border-b border-gray-300">
                <h2 class="font-bold text-xl pb-4">Puedo redistribuir el contenido?</h2>
                <p>No, el contenido mostrado en esta comunidad es gratuito y realizado para uso personal y educativo en instituciones. Puedes compartir los enlaces, descargar contenido para escuelas o uso personal de forma gratuita, sin comercializar el contenido. </p>
            </article>

            <article class="py-6 px-4 border-b border-gray-300">
                <h2 class="font-bold text-xl pb-4">¿Cuál es la mejor manera de ponerse en contacto con usted?</h2>
                <p>puedes enviar un correo a esta dirección <b>manuelferg13@gmail.com</b>, explicando los motivos de tu consulta</p>
            </article>
            
            <GoHomeBtn />
        </section>
    </MainLayoutVue>
</template>

<script setup>
import GoHomeBtn from '~/components/GoHomeBtn.vue';
import MainLayoutVue from '~/layouts/MainLayout.vue';
</script>