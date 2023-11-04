<template>
    <MainLayout>

        <section class="container mx-auto min-h-auto min-h-[192px] border-b border-b-gray-300">
            <div class="py-6 pb-14 text-left">
                <h1 class=" px-0 mb-2 text-2xl font-bold sm:mb-4 sm:text-center sm:text-5xl">
                    <span class="text-blueribbon">E</span>
                    <span class="text-[#FFD91A]">n</span>
                    <span class="text-[#FF1A1A]">g</span>
                    <span class="text-[#47FF1A]">l</span>
                    <span class="text-[#FF8C1A]">i</span>
                    <span class="text-blueribbon">s</span>
                    <span class="text-[#FF1A1A]">h</span>
                    <span class="mx-2"></span>
                    <span class="text-[#FFD91A]">R</span>
                    <span class="text-[#FF1A1A]">o</span>
                    <span class="text-blueribbon">a</span>
                    <span class="text-[#FF8C1A]">d</span>
                    <span class="text-[#47FF1A]">m</span>
                    <span class="text-blueribbon">a</span>
                    <span class="text-[#FF1A1A]">p</span>
                </h1>
                <p class="px-0 text-md text-black">
                    Un esfuerzo comunitario para crear hojas de ruta
                    ordenadas, guías y contenido educacional
                    que ayuden a orientar a las personas a
                    la hora de elegir un camino y guiar su aprendizaje del idioma inglés.
                </p>
            </div>
        </section>
        <section class="container mx-auto border-b border-b-gray-300 py-10">
                <h3 class="mb-8 rounded-md border border-dotted border-4 border-[#1B6DFF] p-2 text-center sm:w-[40%] sm:mx-auto"> 
                    Haz click en los botones para descubrir la información
                </h3>
                <nav>
                    <ul class="flex flex-col gap-4 sm:flex-row sm:justify-center">
                        <li>
                            <NuxtLink class="
                                    group bg-[#1B6DFF] p-2.5 sm:p-3.5 block no-underline 
                                    rounded-lg relative text-white font-regular text-lg
                                    overflow-hidden hover:opacity-90 sm:transition-opacity 
                                    text-center sm:w-72 shadow-xl sm:hover:scale-95 sm:transition-transform" to="/firstStep">
                                    primeros pasos
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink class="
                                    group bg-[#1B6DFF] p-2.5 sm:p-3.5 block no-underline 
                                    rounded-lg relative text-white font-regular text-lg
                                    overflow-hidden hover:opacity-90 sm:transition-opacity text-center sm:w-72 
                                    shadow-xl sm:hover:scale-95 sm:transition-transform" to="/advices">
                                    consejos
                            </NuxtLink>
                        </li>
                    </ul>
                </nav>
            </section>
        <section class="container mx-auto border-b border-b-gray-300 py-10">
                <h3 class="mb-8 rounded-md border border-dotted border-4 border-[#1B6DFF] p-2 text-center sm:w-[40%] sm:mx-auto"> 
                    Escoge tu nivel de estudio
                </h3>
                <nav>
                    <ul class="flex flex-col gap-4 sm:flex-row sm:justify-center">
                        <li>
                            <NuxtLink class="
                                    group bg-[#1B6DFF] p-2.5 sm:p-3.5 block no-underline 
                                    rounded-lg relative text-white font-regular text-lg
                                    overflow-hidden hover:opacity-90 sm:transition-opacity 
                                    text-center sm:w-72 shadow-xl sm:hover:scale-95 sm:transition-transform" to="/school">
                                    Escuela Básica
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink class="
                                    group bg-[#1B6DFF] p-2.5 sm:p-3.5 block no-underline 
                                    rounded-lg relative text-white font-regular text-lg
                                    overflow-hidden hover:opacity-90 sm:transition-opacity text-center sm:w-72 
                                    shadow-xl sm:hover:scale-95 sm:transition-transform" to="/highSchool">
                                    Liceo / Secundaria
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink class="
                                    group bg-[#1B6DFF] p-2.5 sm:p-3.5 block no-underline 
                                    rounded-lg relative text-white font-regular text-lg
                                    overflow-hidden hover:opacity-90 sm:transition-opacity text-center sm:w-72 
                                    shadow-xl sm:hover:scale-95 sm:transition-transform" to="/university">
                                    Universidad
                            </NuxtLink>
                        </li>
                    </ul>
                </nav>
            </section>

        <!-- <div>
            hola
        </div>
        <NuxtLink to="/school">
            ir a parent
        </NuxtLink> -->
        <!--
        <section class="container mx-auto min-h-auto min-h-[192px] border-b border-b-gray-300">
            <div class="py-6 pb-14 text-left">
                <h1 class=" px-0 mb-2 text-2xl font-bold sm:mb-4 sm:text-center sm:text-5xl">
                    <span class="text-blueribbon">E</span>
                    <span class="text-[#FFD91A]">n</span>
                    <span class="text-[#FF1A1A]">g</span>
                    <span class="text-[#47FF1A]">l</span>
                    <span class="text-[#FF8C1A]">i</span>
                    <span class="text-blueribbon">s</span>
                    <span class="text-[#FF1A1A]">h</span>
                    <span class="mx-2"></span>
                    <span class="text-[#FFD91A]">R</span>
                    <span class="text-[#FF1A1A]">o</span>
                    <span class="text-blueribbon">a</span>
                    <span class="text-[#FF8C1A]">d</span>
                    <span class="text-[#47FF1A]">m</span>
                    <span class="text-blueribbon">a</span>
                    <span class="text-[#FF1A1A]">p</span>
                </h1>
                <p class="px-0 text-md text-black">
                    Un esfuerzo comunitario para crear hojas de ruta,
                    ordenadas y bien estructuradas que ayuden a orientar a los niños de escuela básica a
                    la hora de elegir un camino y guiar su aprendizaje del idioma inglés.
                </p>
            </div>
        </section>
        <section class="container mx-auto border-b border-b-gray-300 py-10">
                <h3 class="mb-8 rounded-md border border-dotted border-4 border-[#1B6DFF] p-2 text-center sm:w-[40%] sm:mx-auto"> 
                    Haz click en los botones para descubrir la información
                </h3>
                <nav>
                    <ul class="flex flex-col gap-4 sm:flex-row sm:justify-center">
                        <li>
                            <NuxtLink class="
                                    group bg-[#1B6DFF] p-2.5 sm:p-3.5 block no-underline 
                                    rounded-lg relative text-white font-regular text-lg
                                    overflow-hidden hover:opacity-90 sm:transition-opacity 
                                    text-center sm:w-72 shadow-xl sm:hover:scale-95 sm:transition-transform" to="/firstStep">
                                    primeros pasos
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink class="
                                    group bg-[#1B6DFF] p-2.5 sm:p-3.5 block no-underline 
                                    rounded-lg relative text-white font-regular text-lg
                                    overflow-hidden hover:opacity-90 sm:transition-opacity text-center sm:w-72 
                                    shadow-xl sm:hover:scale-95 sm:transition-transform" to="/advices">
                                    consejos
                            </NuxtLink>
                        </li>
                    </ul>
                </nav>
            </section>
            <section class="container mx-auto py-10">
                <nav>
                    <ul class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                        <li>
                            <NuxtLink class="
                                    group bg-[#1B6DFF] p-2.5 sm:p-3.5 block no-underline 
                                    rounded-lg relative text-white font-regular text-lg
                                    overflow-hidden hover:opacity-90 sm:transition-opacity text-center 
                                    shadow-xl sm:hover:scale-95 sm:transition-transform" to="/introducingYourself">
                                    <span class="font-bold">#1</span> presentarse
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink class="
                                    group bg-[#1B6DFF] p-2.5 sm:p-3.5 block no-underline 
                                    rounded-lg relative text-white font-regular text-lg
                                    overflow-hidden hover:opacity-90 sm:transition-opacity text-center 
                                    shadow-xl sm:hover:scale-95 sm:transition-transform" to="/greetingAndGoodbye">
                                    <span class="font-bold">#2</span> saludos/despedidas
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink class="
                                    group bg-[#1B6DFF] p-2.5 sm:p-3.5 block no-underline 
                                    rounded-lg relative text-white font-regular text-lg
                                    overflow-hidden hover:opacity-90 sm:transition-opacity text-center 
                                    shadow-xl sm:hover:scale-95 sm:transition-transform" to="/describingPeople">
                                    <span class="font-bold">#3</span> Describir/indentificar
                            </NuxtLink>
                        </li>
                    </ul>
                </nav>
            </section>
        -->
    </MainLayout>
</template>
   
<script setup>
import MainLayout from '../layouts/MainLayout'
</script>
   
