import React from "react";
import { Link } from "react-router-dom";

export default function Pjr() {
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
                          La realidad del programador junior: de la teoría a la práctica
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
                          Ser programador junior no es como me lo imaginaba. Y no lo digo solo por los retos técnicos, sino por todo lo que implica emocional y mentalmente este camino. Uno cree que con estudiar, echarle ganas y terminar una carrera o un curso, ya está todo resuelto. Pero la realidad es muy distinta.
                        </p>

                        <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                          Cuando salí al mundo laboral, sentí un golpe de frente. Me di cuenta de que muchas cosas que aprendí en la escuela poco servían para los problemas reales que enfrentan las empresas. Y ahí fue cuando empecé a entender que saber programar no es lo mismo que saber trabajar como programador.
                        </p>

                        <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                          He tenido momentos en los que he sentido que no sé nada, en los que me frustro por no poder resolver algo que "debería ser sencillo". A veces me comparo con otros y me desanimo, porque parece que a todos les va mejor o avanzan más rápido. Pero sigo aquí, aprendiendo, construyendo y mejorando poco a poco.
                        </p>

                        <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                          Aprender en la vida real
                        </h2>
                        <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                          Lo que más me ha enseñado no ha sido un curso ni una certificación, sino estar metido en proyectos reales, equivocarme, volver a intentar y tener que buscar soluciones que no vienen en ningún libro. Ahí es donde de verdad se aprende: cuando no hay un profesor que te diga qué hacer, sino solo tú, tu código y tu paciencia.
                        </p>

                        <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                          Ahora valoro más los pequeños logros. Ese componente que por fin se renderiza bien. Ese error que ya no aparece. Ese cliente que puede usar el sistema sin problemas. Porque detrás de cada cosa que logro, hay horas de dudas, errores y aprendizaje silencioso.
                        </p>

                        <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                          Sigo aprendiendo, y no pienso parar
                        </h2>
                        <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                          A veces me cuesta reconocer mis avances porque soy muy exigente conmigo. Pero si algo he aprendido, es que este camino se recorre paso a paso. Ya no me siento tan solo ni tan perdido como al principio. Ahora sé que muchos pasamos por lo mismo, y que cada frustración es parte del proceso.
                        </p>

                        <img
                          alt="Desarrollador reflexionando frente al monitor"
                          src="/img/pj.png"
                          width="1310"
                          height="872"
                          loading="lazy"
                          decoding="async"
                          style={{ color: "transparent" }}
                          className="rounded-lg mt-6 shadow-xl"
                        />

                        <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                          Este artículo no es para dar consejos. Es simplemente una forma de sacar lo que llevo dentro y compartir un poco de mi historia. Si tú también eres junior y te sientes así, solo te digo: no te rindas. Vas mejor de lo que crees.
                        </p>

                        <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400 font-semibold">
                          Y si estás leyendo esto, gracias por tomarte el tiempo. Porque a veces, solo necesitamos sentir que alguien nos entiende.
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
