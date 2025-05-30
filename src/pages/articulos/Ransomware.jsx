import React from "react";
import { Link} from "react-router-dom"

export default function Ransomware(){
    return(
        <>
            <main class="flex-auto">
                <div class="sm:px-8 mt-35 lg:mt-45">
                    <div class="mx-auto w-full max-w-7xl lg:px-8">
                        <div class="relative px-4 sm:px-8 lg:px-12">
                            <div class="mx-auto max-w-2xl lg:max-w-5xl">
                                <div class="xl:relative">
                                    <div class="mx-auto max-w-2xl">
                                        <Link type="button" aria-label="Go back to articles" to="/articulos" class="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 transition lg:absolute left-12 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20">
                                            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" class="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400"><path d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </Link>
                                        <article>
                                            <header class="flex flex-col">
                                                <h1 class="mt-6 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">Los tres enfoques más comunes en los que los cibercriminales hacen uso del ransomware.</h1>
                                                <time datetime="2022-09-05" class="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500">
                                                    <span class="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
                                                    <span class="ml-3">Marzo 5, 2025</span>
                                                </time>
                                            </header>
                                            <div class="mt-8 prose dark:prose-invert" data-mdx-content="true">
                                                <p class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">En la era actual, Los cibercriminales usan ransomware principalmente para extorsionar a sus víctimas mediante cifrado de datos y amenazas. Aquí te detallo los tres enfoques más comunes.</p>
                                                <img alt="" loading="lazy" width="1310" height="872" decoding="async" data-nimg="1" srcset="" src="/img/dis.png" style={{color:"transparent"}}/>
                                                <p class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400"></p>
                                                <h2 class="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">Cifrado de archivos (CRIPTO-RANSOMWARE)</h2>
                                                <p class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">Cómo funciona: El malware cifra los archivos del sistema infectado, haciendo inaccesible la información. Luego exige un pago (usualmente en criptomonedas) para proporcionar la clave de descifrado.</p>
                                                <p class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">Es un tipo de malware diseñado para cifrar archivos del sistema de la víctima, bloqueando el acceso a su información. El atacante exige un rescate (ransom), normalmente en criptomonedas como Bitcoin o Monero, a cambio de una clave de descifrado.</p>
                                                <p class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">El ransomware suele entrar al sistema mediante:</p>
                                                <ol>
                                                    <li class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">• Correos de phishing con archivos adjuntos maliciosos (Word, Excel, PDFs con macros).</li>
                                                    <li class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">• Enlaces maliciosos que descargan el malware.</li>
                                                    <li class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">• Explotación de vulnerabilidades (por ejemplo, puertos SMB abiertos, software sin actualizar).</li>
                                                    <li class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">• Troyanos descargadores (otro malware que instala el ransomware).</li>
                                                </ol>
                                            
                                                <h2 class="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">Ransomware con doble extorsión.</h2>
                                                <p class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">Cómo funciona: Antes de cifrar, el atacante exfiltra (roba) información sensible. Si la víctima no paga, amenaza con exponer la información en foros delictivos o venderlos a los mejores postores, esto con el fin de meter presión.</p>

                                                <h2 class="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">Ransomware como servicio (RaaS).</h2>
                                                <p class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">El modelo de Ransomware como Servicio (RaaS) es uno de los fenómenos más preocupantes y sofisticados en la ciberseguridad actual.</p>
                                                <p class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">RaaS es un modelo de negocio criminal en el que desarrolladores de ransomware ofrecen su software a "afiliados" o colaboradores a cambio de una parte del rescate o una tarifa fija. Funciona de manera muy similar a un modelo SaaS (Software as a Service), pero orientado a la extorsión.</p>
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
    )
}