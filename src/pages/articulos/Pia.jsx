import React from "react";
import { Link } from "react-router-dom";

export default function Pia() {
  return (
    <>
      <main className="flex-auto">
        <div className="sm:px-8 mt-35 lg:mt-45">
          <div className="mx-auto w-full max-w-7xl lg:px-8">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <div className="xl:relative">
                  <div className="mx-auto max-w-2xl">
                    <Link
                      type="button"
                      aria-label="Go back to articles"
                      to="/articulos"
                      className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 transition lg:absolute left-12 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20"
                    >
                      <svg
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                        className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400"
                      >
                        <path
                          d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                    <article>
                      <header className="flex flex-col">
                        <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                          Programación con IA: el futuro del desarrollo de software
                        </h1>
                        <time
                          dateTime="2025-03-05"
                          className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
                        >
                          <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
                          <span className="ml-3">Diciembre 2, 2024</span>
                        </time>
                      </header>
                      <div className="mt-8 prose dark:prose-invert" data-mdx-content="true">
                        <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                          La programación con inteligencia artificial (IA) está revolucionando la forma en que desarrollamos software. Desde asistentes de codificación hasta algoritmos capaces de aprender y adaptarse, la IA ha dejado de ser una promesa lejana para convertirse en una herramienta activa del día a día de los desarrolladores.
                        </p>


                        <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                          ¿Cómo está impactando la IA en el desarrollo?
                        </h2>
                        <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                          Herramientas como GitHub Copilot o ChatGPT están asistiendo a los programadores a escribir código más rápido, detectar errores y sugerir mejoras. Esto no solo reduce el tiempo de desarrollo, sino que también mejora la calidad del software.
                        </p>
                        <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                          Además, los frameworks de machine learning como TensorFlow o PyTorch permiten crear modelos inteligentes que pueden predecir comportamientos, automatizar procesos complejos e incluso generar código por sí mismos.
                        </p>

                        <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                          Ventajas de programar con IA
                        </h2>
                        <ul className="list-disc ml-6 text-sm text-zinc-600 dark:text-zinc-400">
                          <li>Automatización de tareas repetitivas y tediosas</li>
                          <li>Reducción de errores humanos mediante sugerencias inteligentes</li>
                          <li>Mejora continua gracias al aprendizaje automático</li>
                          <li>Incremento en la productividad del equipo de desarrollo</li>
                          <li>Facilidad para probar y refactorizar código en tiempo real</li>
                        </ul>

                        <img
                          alt="Ilustración de IA programando"
                          src="/img/pia.png"
                          width="1310"
                          height="872"
                          loading="lazy"
                          decoding="async"
                          style={{ color: "transparent" }}
                          className="rounded-lg mt-6 shadow-xl"
                        />
                        <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                          Reflexión final
                        </h2>
                        <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                          Aunque la IA todavía necesita supervisión humana y criterios éticos para su implementación, su potencial es innegable. Programar con inteligencia artificial no significa que los desarrolladores sean reemplazados, sino que sus capacidades son potenciadas.
                        </p>
                        <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                          Estamos ante una nueva era del desarrollo, en la que la colaboración entre humanos y máquinas redefine lo que es posible construir.
                        </p>
                      </div>
                    </article>
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
