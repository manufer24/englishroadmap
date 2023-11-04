<template>
    <MainLayout>
        <section class="container mx-auto min-h-auto">
        <h1 class="py-8 font-bold text-start text-xl sm:text-center
        border-b border-b-gray-300">Algunos consejos para practicar en tu día a día</h1>
        <article class="py-8 px-0">
            <div class="border-b border-b-gray-300 pb-6 sm:pl-4">
                <h3 class="font-bold pb-4">1. Comienza por las palabras básicas</h3>
                <p>
                    Cuando aprendemos a hablar español, una de las primeras cosas que nos enseñan es a decir 
                    nuestro nombre, es decir, a presentarnos y decir quiénes somos. También  nombres de alimentos, lugares, animales, entre otros.
                    ¡Y lo mismo ocurre al aprender inglés!
                </p>
            </div>
            <div class="border-b border-b-gray-300 pb-6 sm:pl-4">
                <h3 class="font-bold pb-4">2. Buscar textos sencillos para ampliar tu vocabulario</h3>
                <p>
                    Es importante que empieces a reforzar la lectura de palabras en inglés. Esto te ayudará, poco a poco, a 
                    ir relacionando la manera en que se escriben las palabras con su pronunciación.
                    Para poner esto en práctica, puedes leer frases corte y sencillas, leer etiquetas de productos o folletos. así leerás inglés y
                    aprenderás nuevas palabras sin siquiera darte cuenta.
                </p>
            </div>
            <div class="border-b border-b-gray-300 pt-6 pb-6 sm:pl-4">
                <h3 class="font-bold pb-4">3. Traduce tus canciones favoritas</h3>
                <p> 
                    Es importante que escuches y practiques la pronunciación de las palabras. Para esto, puedes realizar el ejercicio
                    de traducir alguna canción en inglés que te guste para entender su significado y saber cómo se pronuncia cada palabra.
                    Una vez que lo hayas hecho, practica en voz alta sin miedo a equivocarte.
                </p>
            </div>
            <div class="border-b border-b-gray-300 pt-6 pb-6 sm:pl-4">
                <h3 class="font-bold pb-4">4. Buscar el método de estudio  correcto</h3>
                <p>
                    Si bien este factor no es un requisito como tal para aprender un idioma, si crees que el método que te encuentras
                    usando no funciona, entonces es completamente válido probar con un método nuevo. Así que, atrévete a probar
                    nuevas formas de aprendizaje que se adecúen a tus necesidades.
                </p>
            </div>
            <div class="border-b border-b-gray-300 pt-6 pb-6 sm:pl-4">
                <h3 class="font-bold pb-4">5. ¡Practica!</h3>
                <p>
                    Luego de que hayas implementado los pasos anteriores viene la hora de la verdad: la de empezar a usar el inglés para comunicarte.
                    En este punto puedes encontrar un poco más de dificultad, ya que si no te encuentras en un contexto que te pida hablar o escribir en inglés, entonces es importante que busques esa oportunidad de practicar.‍
                    Para esto, puedes pedirle a un amigo practicar su inglés juntos, o incluso si conoces a alguien que sea hablante nativo, pedirle ayuda con tu pronunciación.
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