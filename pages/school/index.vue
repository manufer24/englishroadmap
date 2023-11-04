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
                    Hojas de ruta,
                    ordenadas y bien estructuradas con contenido didactico y audio visual 
                    que ayuden a orientar a los niños de escuela básica en su aprendizaje
                    del idioma inglés. 
                </p>
            </div>
        </section>
        <section class="container mx-auto border-b border-b-gray-300 py-10">
                <h3 class="mb-8 rounded-md border border-dotted border-4 border-[#1B6DFF] p-2 text-center sm:w-[40%] sm:mx-auto"> 
                    Haz click en los botones para descubrir la información
                </h3>
                <nav>
                    <ul class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                        <li>
                            <NuxtLink class="
                                    group bg-[#1B6DFF] p-2.5 sm:p-3.5 block no-underline 
                                    rounded-lg relative text-white font-regular text-lg
                                    overflow-hidden hover:opacity-90 sm:transition-opacity text-center 
                                    shadow-xl sm:hover:scale-95 sm:transition-transform" to="/school/basicABC">
                                    <span class="font-bold">#1</span> Abecedario
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink class="
                                    group bg-[#1B6DFF] p-2.5 sm:p-3.5 block no-underline 
                                    rounded-lg relative text-white font-regular text-lg
                                    overflow-hidden hover:opacity-90 sm:transition-opacity text-center 
                                    shadow-xl sm:hover:scale-95 sm:transition-transform" to="/school/basicIntroducingYourself">
                                    <span class="font-bold">#2</span> presentarse
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink class="
                                    group bg-[#1B6DFF] p-2.5 sm:p-3.5 block no-underline 
                                    rounded-lg relative text-white font-regular text-lg
                                    overflow-hidden hover:opacity-90 sm:transition-opacity text-center 
                                    shadow-xl sm:hover:scale-95 sm:transition-transform" to="/school/basicGreetingAndGoodbye">
                                    <span class="font-bold">#3</span> saludos/despedidas
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink class="
                                    group bg-[#1B6DFF] p-2.5 sm:p-3.5 block no-underline 
                                    rounded-lg relative text-white font-regular text-lg
                                    overflow-hidden hover:opacity-90 sm:transition-opacity text-center 
                                    shadow-xl sm:hover:scale-95 sm:transition-transform" to="/school/basicDescribingPeople">
                                    <span class="font-bold">#4</span> Describir/indentificar
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink class="
                                    group bg-[#1B6DFF] p-2.5 sm:p-3.5 block no-underline 
                                    rounded-lg relative text-white font-regular text-lg
                                    overflow-hidden hover:opacity-90 sm:transition-opacity text-center 
                                    shadow-xl sm:hover:scale-95 sm:transition-transform" to="/school/basicColors">
                                    <span class="font-bold">#5</span> Colors
                            </NuxtLink>
                        </li>
                    </ul>
                </nav>
            </section>
            <GoHomeBtn />
    </MainLayout>
</template>

<script setup>
import MainLayout from '~/layouts/MainLayout.vue';
import GoHomeBtn from '~/components/GoHomeBtn.vue';
</script>