import React from "react";
export default function Acerca() {
    return (
      <>
        <main class="flex-auto">
          <div class="sm:px-8 mt-35 sm:mt-36">
            <div class="mx-auto w-full max-w-7xl lg:px-8">
              <div class="relative px-4 sm:px-8 lg:px-12">
                <div class="mx-auto max-w-2xl lg:max-w-5xl">
                  <div class="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                    <div class="lg:pl-20">
                      <div class="max-w-xs px-2.5 lg:max-w-none">
                        <img alt="" loading="lazy" width="800" height="800" decoding="async" data-nimg="1" className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800" sizes="(min-width: 1024px) 32rem, 20rem" srcset="/img/Eduardo Jimenez.jpg" src="/img/EduardoJimenez.jpg" style={{color:"transparent"}}/>
                      </div>
                    </div>
                      <div class="lg:order-first lg:row-span-2">
                        <h1 class="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">¡Hola! Soy Eduardo Jimenez.</h1>
                      <div class="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                      <p>
                        Ingeniero de software autodidacta, apasionado por la informática, con experiencia en cloud computing (AWS, Azure y Google Cloud).
                        Tengo un enfoque sólido en desarrollo de software, arquitectura y ciberseguridad. Actualmente me dedico al emprendimiento, la creación de productos tecnológicos y al estudio contante de forma autodidacta.
                      </p>
                      <p>
                        Me he enfocado en desarrollar mis habilidades de forma constante, enfrentando grandes retos como parte de mi proceso de mejora continua.
                        Me destaco por mi audacia y por la capacidad de gestionar mis emociones en situaciones complejas.
                      </p>
                      </div>
                    </div>
                  <div class="lg:pl-20">
                    <ul role="list">
                      <li class="mt-4 flex">
                        <a class="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500" href="https://github.com/Eduardo-hardvester" target="_blank">
                          <svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"></path>
                          </svg>
                          <span class="ml-4">Sigueme en GitHub</span>
                        </a>
                      </li>
                      <li class="mt-4 flex">
                        <a class="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500" href="https://www.linkedin.com/in/eduardo-jimenez-07213725b" target="_blank">
                          <svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500">
                            <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"></path>
                          </svg>
                          <span class="ml-4">Sigueme en LinkedIn</span>
                        </a>
                      </li>
                      <li class="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40 flex">
                        <a class="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500" href="mailto:eduardo.j51@yahoo.com" target="_blank">
                          <svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500">
                            <path fill-rule="evenodd" d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"></path>
                          </svg>
                          <span class="ml-4">eduardo.j51@yahoo.com</span>
                        </a>
                      </li>
                    </ul>
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