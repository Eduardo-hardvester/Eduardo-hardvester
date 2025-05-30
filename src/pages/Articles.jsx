import { Link} from "react-router-dom"

export default function Articles() {
        return (
    <main class="flex-auto">
    <div class="sm:px-8 mt-35 sm:mt-35">
        <div class="mx-auto w-full max-w-7xl lg:px-8">
            <div class="relative px-4 sm:px-8 lg:px-12">
                <div class="mx-auto max-w-2xl lg:max-w-5xl">
                    <header class="max-w-2xl">
                        <h1 class="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">Comparto información sobre temas y curiosidades personales.</h1>
                            <p class="mt-6 text-base text-zinc-600 dark:text-zinc-400">Mis habilidades se orientan a la programación y la ciberseguridad.</p>
                    </header>
                    <div class="mt-16 sm:mt-20">
                        <div class="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
                            <div class="flex max-w-3xl flex-col space-y-16">
                                <article class="md:grid md:grid-cols-4 md:items-baseline">
                                    <div class="md:col-span-3 group relative flex flex-col items-start">
                                        <h2 class="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                                            <div class="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50"></div>
                                                <Link to="/articulos/ransomware">
                                                    <span class="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                                                    <span class="relative z-10">¿Qué es un Ransomware?.</span>
                                                </Link>
                                        </h2>
                                        <time class="md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5" >
                                            <span class="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
                                                <span class="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
                                            </span>Marzo 5, 2025
                                        </time>
                                            <p class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">Un software malicioso que, al infectar nuestro equipo, le da al ciberdelincuente la capacidad de bloquear un dispositivo desde una ubicación remota y encriptar nuestros archivos, quitándonos el control de toda la información y datos almacenados.</p>
                                        <div aria-hidden="true" class="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500">Leer articulo
                                            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" class="ml-1 h-4 w-4 stroke-current">
                                                <path d="M6.75 5.75 9.25 8l-2.5 2.25" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <time class="mt-1 max-md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500" >Marzo 5, 2025</time>
                                </article>
                                <article class="md:grid md:grid-cols-4 md:items-baseline">
                                    <div class="md:col-span-3 group relative flex flex-col items-start">
                                        <h2 class="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                                            <div class="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50"></div>
                                            <Link to="/articulos/programacionconia">
                                                <span class="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                                                <span class="relative z-10">Cinco tendencias de tecnologías innovadoras en 2024.</span>
                                            </Link>
                                        </h2>
                                        <time class="md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5" datetime="2022-09-02">
                                            <span class="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
                                                <span class="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
                                            </span>Diciembre 2, 2024
                                        </time>
                                        <p class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">Al fusionar la potencia de la Inteligencia Artificial, el aprendizaje automático y la tecnología IoT, logramos capturar nuestras interacciones humanas.</p>
                                    <div aria-hidden="true" class="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500">Leer articulo
                                        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" class="ml-1 h-4 w-4 stroke-current">
                                            <path d="M6.75 5.75 9.25 8l-2.5 2.25" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </div>
                                    </div>
                                    <time class="mt-1 max-md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500" datetime="2022-09-02">Diciembre 2, 2024</time>
                                </article>
                                <article class="md:grid md:grid-cols-4 md:items-baseline">
                                    <div class="md:col-span-3 group relative flex flex-col items-start">
                                        <h2 class="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                                            <div class="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50"></div>
                                            <Link to="/articulos/breachforum">
                                                <span class="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                                                <span class="relative z-10">¿Qué es BRE4CHF0RUM?</span>
                                            </Link>
                                        </h2>
                                        <time class="md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5" datetime="2022-07-14">
                                            <span class="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
                                                <span class="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
                                            </span>Noviembre 20, 2024
                                        </time>
                                            <p class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">El foro clandestino BreachForums y sus predecesores, conocidos por su gran número de usuarios y la cantidad de datos filtrados, siguen siendo un foco de atención para las fuerzas del orden, que han logrado desmantelar foros clandestinos predominantemente angloparlantes.</p>
                                        <div aria-hidden="true" class="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500">Leer articulo
                                            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" class="ml-1 h-4 w-4 stroke-current">
                                                <path d="M6.75 5.75 9.25 8l-2.5 2.25" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <time class="mt-1 max-md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500" >Noviembre 20, 2024</time>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </main>
    );
  }