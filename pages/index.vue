<template>
    <MainLayout>

        <section class="container mx-auto min-h-auto min-h-[192px] border-b border-b-gray-300">
            <div class="py-6 text-left">
                <h1 class=" px-0 mb-2 text-2xl font-bold sm:mb-4 sm:text-center sm:text-5xl">
                    <span class="text-busYellow">E</span>
                    <span class="text-blueRibbon">n</span>
                    <span class="text-redScarlet">g</span>
                    <span class="text-greenApple">l</span>
                    <span class="text-westSide">i</span>
                    <span class="text-blueRibbon">s</span>
                    <span class="text-redScarlet">h</span>
                    <span class="mx-2"></span>
                    <span class="text-busYellow">R</span>
                    <span class="text-blueRibbon">o</span>
                    <span class="text-redScarlet">a</span>
                    <span class="text-westSide">d</span>
                    <span class="text-greenApple">m</span>
                    <span class="text-blueRibbon">a</span>
                    <span class="text-redScarlet">p</span>
                </h1>
                <p class="px-0 text-md text-black dark:text-textDark">
                    Un esfuerzo comunitario para crear hojas de ruta
                    ordenadas, guías y contenido educacional
                    que ayuden a orientar a las personas a
                    la hora de elegir un camino y guiar su aprendizaje del idioma inglés.
                </p>
            </div>
        </section>
        <section class="container mx-auto py-10 border-b border-b-gray-300  dark:bg-bgDark">
                <nav>
                    <ul class="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:justify-center">
                        <li>
                            <NuxtLink class="
                                    group bg-busYellow p-2.5 sm:p-3.5 block no-underline 
                                    rounded-lg relative text-white font-regular text-lg
                                    overflow-hidden hover:opacity-90
                                    text-center sm:hover:scale-95 sm:transition-transform" to="/firstStep">
                                    primeros pasos
                            </NuxtLink>
                        </li>
                        <!-- group bg-busYellow p-2.5 sm:p-3.5 block no-underline 
                                    rounded-lg relative text-white font-regular text-lg
                                    overflow-hidden hover:opacity-90 text-center 
                                    sm:hover:scale-95 sm:transition-transform" -->
                        <li>
                            <NuxtLink class="
                                    group bg-blueRibbon p-2.5 sm:p-3.5 block no-underline 
                                    rounded-lg relative text-white font-regular text-lg
                                    overflow-hidden hover:opacity-90 text-center
                                    sm:hover:scale-95 sm:transition-transform" to="/advices">
                                    consejos
                            </NuxtLink>
                        </li>
                    </ul>
                </nav>
            </section>
        <section class="container mx-auto py-10 border-b border-b-gray-300">
                <h3 class="mb-8 rounded-md border-4 border-dotted border-blueRibbon p-2 text-center sm:w-[40%] sm:mx-auto"> 
                    Escoge tu nivel de estudio
                </h3>
                <nav>
                    <ul class="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
                        <li>
                            <NuxtLink class="
                                    group bg-busYellow p-2.5 sm:p-3.5 block no-underline 
                                    rounded-lg relative text-white font-regular text-lg
                                    overflow-hidden hover:opacity-90
                                    text-center sm:hover:scale-95 sm:transition-transform" to="/school">
                                    Escuela Básica
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink class="
                                    group bg-blueRibbon p-2.5 sm:p-3.5 block no-underline 
                                    rounded-lg relative text-white font-regular text-lg
                                    overflow-hidden hover:opacity-90 text-center 
                                    sm:hover:scale-95 sm:transition-transform" to="/highSchool">
                                    Liceo / Secundaria
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink class="
                                    group bg-redScarlet p-2.5 sm:p-3.5 block no-underline 
                                    rounded-lg relative text-white font-regular text-lg
                                    overflow-hidden hover:opacity-90 text-center
                                    sm:hover:scale-95 sm:transition-transform" to="/university">
                                    Universidad
                            </NuxtLink>
                        </li>
                    </ul>
                </nav>
            </section>

      
    </MainLayout>
</template>
   
<script setup>
import MainLayout from '../layouts/MainLayout'
</script>
   
