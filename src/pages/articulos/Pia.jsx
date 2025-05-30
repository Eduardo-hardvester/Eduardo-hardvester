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
                          Cinco tendencias de tecnologías innovadoras en 2024.
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
                          El año del IoC o Internet del Comportamiento
                        </h2>
                        <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                          Al fusionar la potencia de la Inteligencia Artificial, el aprendizaje automático y la tecnología IoT, logramos capturar nuestras interacciones humanas, generando así un ecosistema que no solo comprende nuestras preferencias en productos y servicios, sino que también nos brinda la capacidad única de anticipar y responder de manera precisa a situaciones cotidianas.
                        </p>

                        <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                        Nube más eficiente, control de datos y CDEs
                        </h2>
                        <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                        Según Manuel Gómez, de acens, en 2024 “el cloud continuará su tendencia hacia la ‘nube soberana’: las compañías buscarán mantener el control en los elementos clave para cumplir con el marco legal y evitar riesgos permaneciendo en Europa como exige la regulación comunitaria”. De hecho, el gasto global en soluciones de nube soberana alcanzará 258.500 millones de dólares para 2027, según las estimaciones de la consultora IDC.
                        </p>

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
                          IA generativa más allá de un simple chatbot de moda
                        </h2>
                        <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                        En el camino hacia la puesta en marcha efectiva de la IA generativa en el entorno empresarial, surgen desafíos técnicos complejos que van más allá de simplemente ‘alimentar un modelo con datos y esperar resultados’.  Según explican desde Paradigma este año será el año de la IA generativa, pero las empresas deben gestionar algunos desafíos.
                        </p>

                        <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                        IA y ciberseguridad.
                        </h2>
                        <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                        Según apunta Elia Zaitsev, CTO de CrowdStrike, los puntos ciegos de la Inteligencia Artificial están abriendo la puerta a nuevos riesgos dentro de las empresas y en la sociedad en general. En 2024, CrowdStrike espera que los ciberdelincuentes trasladen sus objetivos hacia los sistemas de IA, con el objetivo de atacar a las organizaciones, por un lado, a través de vulnerabilidades en sistemas legítimos y, por otro, aprovechando puntos ciegos debido al uso no autorizado de herramientas de IA por parte de los empleados de la organización.
                        </p>

                        <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                        Manipulación de procesos electorales.
                        </h2>
                        <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                        Dado el progreso reciente con la IA generativa (que incluye audio, imágenes, vídeo y texto), los ciberdelincuentes tendrán herramientas, capacidades y enfoques adicionales para crear contenido malicioso, todo lo cual podría dificultar que los votantes sean capaces de discernir lo que es real. Por ello, Gobiernos, Parlamentos, profesionales de la IA y la comunidad de ciberseguridad en general deberán trabajar conjuntamente para analizar los avances en este espacio.
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
