import React from "react";
import { Link } from "react-router-dom";

export default function Breach() {
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
                          ¿Qué es BRE4CHF0RUM?
                        </h1>
                        <time
                          dateTime="2024-12-02"
                          className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
                        >
                          <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
                          <span className="ml-3">Noviembre 20, 2024</span>
                        </time>
                      </header>
                      <div className="mt-8 prose dark:prose-invert" data-mdx-content="true">
                        <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                        BreachForums fue un foro en línea de habla inglesa dedicado al intercambio de información relacionada con el hacking malicioso y otras actividades cibercriminales.
                        </p>

                        <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                        BreachForums fue conocido por la publicación y venta de datos sensibles obtenidos de diversas organizaciones. Por ejemplo, en diciembre de 2022, un usuario ofreció una base de datos con información de más de 80,000 miembros de InfraGard, una organización asociada al FBI, obtenida mediante técnicas de ingeniería social. Además, en marzo de 2023, se publicaron registros procedentes de una filtración de DC Health Link, afectando a más de 56,000 clientes.
                        </p>

                        <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                        El 21 de marzo de 2023, BreachForums fue cerrado tras la detención de Fitzpatrick. Aunque fue reabierto posteriormente, el 15 de mayo de 2024, el FBI intervino nuevamente el sitio, incluyendo su versión en la red Tor y su canal de Telegram, como parte de una operación internacional. A pesar de que los responsables del foro recuperaron el control del dominio brevemente, el sitio fue clausurado una vez más. 
                        </p>

                        <img
                          alt="Ilustración de IA programando"
                          src="/img/BREACH.jpg"
                          width="1310"
                          height="872"
                          loading="lazy"
                          decoding="async"
                          style={{ color: "transparent" }}
                          className="rounded-lg mt-6 shadow-xl"
                        />
                        
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
