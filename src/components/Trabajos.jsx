import React, { useState, useEffect } from 'react';

function Trabajos(){
  // Estado para saber si el CV ya ha sido descargado
  const [hasDownloaded, setHasDownloaded] = useState(false);

  useEffect(() => {
    // Verificar en localStorage si ya se descargó el CV
    const downloaded = localStorage.getItem('cvDownloaded');
    if (downloaded) {
      setHasDownloaded(true); // Si ya se descargó, actualizar el estado
    }
  }, []);

  const handleDownload = () => {
    // Marcar en localStorage que el CV ha sido descargado
    localStorage.setItem('cvDownloaded', 'true');
    setHasDownloaded(true); // Actualizar el estado a "descargado"
  };
    return(
        <>
                      <div class="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
                        <h2 class="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                          <svg viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="h-6 w-6 flex-none">
                            <path d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z" class="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"></path>
                            <path d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5" class="stroke-zinc-400 dark:stroke-zinc-500"></path>
                          </svg>
                          <span class="ml-3">Trabajos</span>
                        </h2>
                        <ol class="mt-6 space-y-4">
                          <li class="flex gap-4">
                            <div class="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full ring-1 shadow-md shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                            <img alt="" loading="lazy" width="32" height="32" decoding="async" className="h-7 w-7" style={{color:"transparent"}} src="https://axoltcode.mx/img/logo.webp"/>                            </div>
                            <dl class="flex flex-auto flex-wrap gap-x-2">
                              <dt class="sr-only">Company</dt>
                              <dd class="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100"><a href="https://axoltcode.mx" target="_blank" className="text-zinc-810 dark:text-white hover:text-cyan-500 transition-colors duration-200">AxoltCode</a></dd>
                              <dt class="sr-only">Role</dt>
                              <dd class="text-xs text-zinc-500 dark:text-zinc-400">CEO</dd>
                              <dt class="sr-only">Date</dt>
                              <dd class="ml-auto text-xs text-zinc-400 dark:text-zinc-500" aria-label="2019 until Present">
                                <time datetime="2025">2025</time> 
                                <span aria-hidden="true">—</span> 
                                <time datetime="2025">Presente</time>
                              </dd>
                            </dl>
                          </li>
                          <li class="flex gap-4">
                            <div class="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full ring-1 shadow-md shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                            <img alt="" loading="lazy" width="32" height="32" decoding="async" className="h-7 w-7" style={{color:"transparent"}} src="https://avatars.githubusercontent.com/u/1459110?s=200&v=4"/>                            </div>
                            <dl class="flex flex-auto flex-wrap gap-x-2">
                              <dt class="sr-only">Company</dt>
                              <dd class="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">IBM</dd>
                              <dt class="sr-only">Role</dt>
                              <dd class="text-xs text-zinc-500 dark:text-zinc-400">Test Technician</dd>
                              <dt class="sr-only">Date</dt>
                              <dd class="ml-auto text-xs text-zinc-400 dark:text-zinc-500" aria-label="2011 until 2014">
                                <time datetime="2024">10-2024</time> 
                                <span aria-hidden="true">—</span> 
                                <time datetime="2024">01-2025</time>
                              </dd>
                            </dl>
                          </li>
                          
                          <li class="flex gap-4">
                            <div class="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full ring-1 shadow-md shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                            <img alt="" loading="lazy" width="32" height="32" decoding="async" className="h-7 w-7" style={{color:"transparent"}} src="./img/finestra.jpeg"/>                            </div>
                            <dl class="flex flex-auto flex-wrap gap-x-2">
                              <dt class="sr-only">Company</dt>
                              <dd class="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100"><a target="_blank" className="text-zinc-810 dark:text-white hover:text-cyan-500 transition-colors duration-200" href='https://corporativosie.com.mx'>Finestra</a></dd>
                              <dt class="sr-only">Role</dt>
                              <dd class="text-xs text-zinc-500 dark:text-zinc-400">Analista TI</dd>
                              <dt class="sr-only">Date</dt>
                              <dd class="ml-auto text-xs text-zinc-400 dark:text-zinc-500" aria-label="2008 until 2011">
                                <time datetime="2008">06-2024</time> 
                                <span aria-hidden="true">—</span> 
                                <time datetime="2011">10-2024</time>
                              </dd>
                            </dl>
                          </li>

                          <li class="flex gap-4">
                            <div class="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full ring-1 shadow-md shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                            <img alt="" loading="lazy" width="32" height="32" decoding="async" className="h-7 w-7" style={{color:"transparent"}} src="https://static.wixstatic.com/media/4ece1f_de68e3f2f8ae46848623c1c8df4b9f10~mv2.png/v1/fill/w_317,h_557,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/expresi%C3%B3n_%235_2.png"/>                            </div>
                            <dl class="flex flex-auto flex-wrap gap-x-2">
                              <dt class="sr-only">Company</dt>
                              <dd class="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100"><a target="_blank" className="text-zinc-810 dark:text-white hover:text-cyan-500 transition-colors duration-200" href='https://corporativosie.com.mx'>Become</a></dd>
                              <dt class="sr-only">Role</dt>
                              <dd class="text-xs text-zinc-500 dark:text-zinc-400">Auxiliar de sistemas/Becario</dd>
                              <dt class="sr-only">Date</dt>
                              <dd class="ml-auto text-xs text-zinc-400 dark:text-zinc-500" aria-label="2008 until 2011">
                                <time datetime="2008">01-2024</time>
                                <span aria-hidden="true">—</span> 
                                <time datetime="2011">04-2024</time>
                              </dd>
                            </dl>
                          </li>
                        </ol>

                        <a
                          className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 group mt-6 w-full"
                          href="/src/cv/JESUS-EDUARDO-JIMENEZ-CV-ENGLISH.pdf"
                          download="Eduardo-Jimenez-CV.pdf"
                          onClick={handleDownload}
                          style={{ pointerEvents: hasDownloaded ? 'none' : 'auto' }} // Deshabilitar el enlace si ya se descargó
                        >
                          {hasDownloaded ? 'Ya descargado' : 'Descargar CV'}
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            aria-hidden="true"
                            className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50"
                          >
                            <path d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                          </svg>
                        </a>
                      </div>
        </>
    );
}

export default Trabajos;