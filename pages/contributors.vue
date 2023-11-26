<template>
    <MainLayoutVue>
        <section class="container mx-auto pt-4 flex flex-col gap-4 md:flex-row md:flex-wrap border-b border-neutral-content">
            <p>Esta seccion se actualizará proximamente</p>
            <p class="text-lg">Gracias a nuestros colaboradores por hacer de <b>englishroadmap.vercel.app</b> una comunidad confiable.</p>
            <article class="flex items-center justify-center mb-5">
                <div class="card w-72 bg-base-100 border-2 border-primary/70">
                    <figure class="px-10 pt-10">
                        <img alt="contributors avatar" class=" w-28 h-28 bg-primary rounded-full" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Colaborador 1</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident nobis eveniet unde reprehenderit iure inventore, perspiciatis maiores esse fugit. Id velit dolore consectetur sapiente inventore aperiam hic nihil rerum quis.</p>
                        <div class="card-actions mt-2">
                        <button class="btn btn-primary">Contacto</button>
                        </div>
                    </div>
                </div>
            </article>
            <article class="flex items-center justify-center mb-5">
                <div class="card w-72 bg-base-100 border-2 border-primary/70">
                    <figure class="px-10 pt-10">
                        <img alt="contributors avatar" class=" w-28 h-28 bg-primary rounded-full" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Colaborador 2</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident nobis eveniet unde reprehenderit iure inventore, perspiciatis maiores esse fugit. Id velit dolore consectetur sapiente inventore aperiam hic nihil rerum quis.</p>
                        <div class="card-actions mt-2">
                        <button class="btn btn-primary">Contacto</button>
                        </div>
                    </div>
                </div>
            </article>
            <article class="flex items-center justify-center mb-5">
                <div class="card w-72 bg-base-100 border-2 border-primary/70">
                    <figure class="px-10 pt-10">
                        <img alt="contributors avatar" class=" w-28 h-28 bg-primary rounded-full" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Colaborador 3</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident nobis eveniet unde reprehenderit iure inventore, perspiciatis maiores esse fugit. Id velit dolore consectetur sapiente inventore aperiam hic nihil rerum quis.</p>
                        <div class="card-actions mt-2">
                        <button class="btn btn-primary">Contacto</button>
                        </div>
                    </div>
                </div>
            </article>
            <article class="flex items-center justify-center mb-5">
                <div class="card w-72 bg-base-100 border-2 border-primary/70">
                    <figure class="px-10 pt-10">
                        <img alt="contributors avatar" class=" w-28 h-28 bg-primary rounded-full" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Colaborador 4</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident nobis eveniet unde reprehenderit iure inventore, perspiciatis maiores esse fugit. Id velit dolore consectetur sapiente inventore aperiam hic nihil rerum quis.</p>
                        <div class="card-actions mt-2">
                        <button class="btn btn-primary">Contacto</button>
                        </div>
                    </div>
                </div>
            </article>
            <article class="flex items-center justify-center mb-5">
                <div class="card w-72 bg-base-100 border-2 border-primary/70">
                    <figure class="px-10 pt-10">
                        <img alt="contributors avatar" class=" w-28 h-28 bg-primary rounded-full" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Colaborador 5</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident nobis eveniet unde reprehenderit iure inventore, perspiciatis maiores esse fugit. Id velit dolore consectetur sapiente inventore aperiam hic nihil rerum quis.</p>
                        <div class="card-actions mt-2">
                        <button class="btn btn-primary">Contacto</button>
                        </div>
                    </div>
                </div>
            </article>
        </section>
        <GoHomeBtn />
    </MainLayoutVue>
</template>

<script setup>
import GoHomeBtn from '~/components/GoHomeBtn.vue';
import MainLayoutVue from '~/layouts/MainLayout.vue';
</script>
