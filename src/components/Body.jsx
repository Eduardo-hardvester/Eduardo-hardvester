import React from "react";
import ContactForm from "./ContactForm";
import Gallery from './Gallery';
import Articulos from './Articulos';
import Trabajos from './Trabajos';
function Body() {

  return (
    <>
        <main class="flex-auto">
          <div class="sm:px-8 mt-35">
            <div class="mx-auto w-full max-w-7xl lg:px-8">
              <div class="relative px-4 sm:px-8 lg:px-12">
                <div class="mx-auto max-w-2xl lg:max-w-5xl">
                  <div class="max-w-2xl">
                    <h1 class="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">Devops, desarrollador y tester.</h1>
                    <p class="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                      Hola, soy Eduardo Jiménez, actualmente me dedico al desarrollo y despliegue de aplicaciones web, asimismo realizo pruebas de seguridad en los servidores y aplicaciones web de los proyectos en los que participo, para fortalecer mis habilidades técnicas y ofrecer soluciones profesionales dentro de AXOLTCODE.
                        <a href="https://axoltcode.mx" target="_blank" class="text-zinc-810 dark:text-white hover:text-cyan-500 transition-colors duration-200">
                        <br></br>En AxoltCode
                      </a>, 
                      ayudamos a pequeñas empresas a dar un paso decisivo hacia su crecimiento: construir una presencia digital sólida y profesional.
                      Nos especializamos en el desarrollo de software personalizado, con un compromiso firme en la seguridad, las buenas prácticas y la confidencialidad.
                    </p>
                    <div class="mt-6 flex gap-6">
                      <a class="group -m-1 p-1" aria-label="Follow on GitHub" href="https://github.com/Eduardo-hardvester" target="_blank">
                        <svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"></path>
                        </svg>
                      </a>
                      <a class="group -m-1 p-1" aria-label="Follow on LinkedIn" href="https://www.linkedin.com/in/eduardo-jimenez-07213725b" target="_blank">
                        <svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300">
                          <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
            <Gallery/>
          <div class="sm:px-8 mt-24 md:mt-28">
            <div class="mx-auto w-full max-w-7xl lg:px-8">
              <div class="relative px-4 sm:px-8 lg:px-12">
                <div class="mx-auto max-w-2xl lg:max-w-5xl">
                  <div class="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
                      <Articulos/>
                    <div class="space-y-10 lg:pl-16 xl:pl-24">
                      <ContactForm/>
                      <Trabajos/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
    </>
  );
}

export default Body;
