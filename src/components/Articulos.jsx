import React from "react";
import { Link} from "react-router-dom"

function Articulos(){

    return(
        <>
                               <div class="flex flex-col gap-16">
                      <article class="group relative flex flex-col items-start">
                        <h2 class="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                          <div class="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50"></div>
                          <Link to="/articulos/diseno">
                            <span class="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                            <span class="relative z-10">Diseñando sistemas visuales para un futuro más allá de la Tierra.</span>
                          </Link>
                        </h2>
                        <time class="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5" datetime="2022-09-05">
                          <span class="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
                            <span class="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
                          </span>Marzo 5, 2025
                        </time>
                          <p class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">Mi objetivo no es solo estar al día con el diseño, sino crear experiencias que sigan impactando en el futuro.</p>
                          <div aria-hidden="true" class="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500">Leer articulo
                            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" class="ml-1 h-4 w-4 stroke-current">
                              <path d="M6.75 5.75 9.25 8l-2.5 2.25" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                          </div>
                      </article>
                      <article class="group relative flex flex-col items-start">
                        <h2 class="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                            <div class="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50"></div>
                            <Link to="/diseno">
                            <span class="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                            <span class="relative z-10">Programación con IA</span>
                            </Link>
                        </h2>
                        <time class="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5" datetime="2022-09-02">
                            <span class="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
                            <span class="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span></span>Diciembre 2, 2024
                        </time>
                        <p class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                            La programación con inteligencia artificial está revolucionando la forma en que desarrollamos software. Desde la automatización de tareas repetitivas hasta la creación de algoritmos capaces de aprender y adaptarse, la IA está transformando el panorama de la programación.
                        </p>
                        <div aria-hidden="true" class="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500">Leer artículo
                            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" class="ml-1 h-4 w-4 stroke-current">
                            <path d="M6.75 5.75 9.25 8l-2.5 2.25" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </div>
                        </article>
                        <article class="group relative flex flex-col items-start">
                        <h2 class="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                            <div class="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50"></div>
                            <a href="/articles/the-struggles-of-a-junior-programmer">
                            <span class="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                            <span class="relative z-10">La realidad del programador junior: De la teoría a la práctica</span>
                            </a>
                        </h2>
                        <time class="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5" datetime="2022-09-02">
                            <span class="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
                            <span class="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span></span>Noviembre 20, 2024
                        </time>
                        <p class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                            Ser un programador junior en la actualidad es una experiencia de altibajos. A pesar de la formación académica, muchos se enfrentan a la cruda realidad del mercado laboral, donde la teoría que aprenden en las escuelas a menudo no coincide con las habilidades prácticas que las empresas buscan. El desajuste entre lo que se enseña y lo que se necesita en la industria crea una brecha que dificulta la inserción laboral para los recién graduados.
                        </p>
                        <div aria-hidden="true" class="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500">Leer artículo
                            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" class="ml-1 h-4 w-4 stroke-current">
                            <path d="M6.75 5.75 9.25 8l-2.5 2.25" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </div>
                        </article>

                    </div>
        </>
    );
}

export default Articulos;