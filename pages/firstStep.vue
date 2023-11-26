<template>
<MainLayout>
    <section class="container mx-auto min-h-auto">
        <h1 class="py-8 font-bold text-start text-xl md:text-2xl sm:text-center
        border-b border-b-gray-300">¿Cuáles son los primeros pasos para hablar inglés desde cero?</h1>
        <article class="py-8 px-0">
            <div class="border-b border-b-gray-300 pb-6 sm:pl-4">
                <h3 class="font-bold md:text-2xl pb-4">1. Dejar el miedo atrás</h3>
                <p>
                    Lo primero que necesitas a la hora de aprender inglés o cualquier otro idioma es perder el miedo.
                    Sí, porque muchas personas en el mundo abandonan la idea de aprender el idioma por miedo a equivocarse y que se burlen de ellos.
                    Así que, atrévete, deja el miedo atrás y aprende. 
                </p>
            </div>
            <div class="border-b border-b-gray-300 pt-6 pb-6 sm:pl-4">
                <h3 class="font-bold md:text-2xl pb-4">2. Ser constante</h3>
                <p> 
                    Ser constante es un requisito muy importante a la hora de aprender cualquier idioma, ya que, te ayudará 
                    a convertirlo en un hábito y a aprender más rápido. Así, podrás ir ampliando tu vocabulario y mejorando tu oido
                    día a día, sin olvidarte de lo que vayas aprendiendo en el camino.
                </p>
            </div>
            <div class="border-b border-b-gray-300 pt-6 pb-6 sm:pl-4">
                <h3 class="font-bold md:text-2xl pb-4">3. Buscar el método de estudio  correcto</h3>
                <p>
                    Si bien este factor no es un requisito como tal para aprender un idioma, si crees que el método que te encuentras
                    usando no funciona, entonces es completamente válido probar con un método nuevo. Así que, atrévete a probar
                    nuevas formas de aprendizaje que se adecúen a tus necesidades.
                </p>
            </div>
        </article>

        <GoHomeBtn></GoHomeBtn>
    </section>
</MainLayout>
</template>

<script setup>
import MainLayout from '../layouts/MainLayout'
import GoHomeBtn from '~/components/GoHomeBtn.vue';
</script>