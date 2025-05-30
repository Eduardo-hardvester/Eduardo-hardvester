import React from "react";
import { Link} from "react-router-dom"

function Footer() {

  return (
    <>
        <footer class="mt-32 flex-none">
          <div class="sm:px-8">
            <div class="mx-auto w-full max-w-7xl lg:px-8">
              <div class="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
                <div class="relative px-4 sm:px-8 lg:px-12">
                  <div class="mx-auto max-w-2xl lg:max-w-5xl">
                    <div class="flex flex-col items-center justify-between gap-6 md:flex-row">
                      <div class="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                        <Link class="transition hover:text-teal-500 dark:hover:text-teal-400" to="/acerca">Acerca</Link>
                        <Link class="transition hover:text-teal-500 dark:hover:text-teal-400" to="/proyectos">Proyectos</Link>
                        <Link class="transition hover:text-teal-500 dark:hover:text-teal-400" to="/articulos">Articulos</Link>
                      </div>
                      <p class="text-sm text-zinc-400 dark:text-zinc-500">© 2024 <a href="https://axoltcode.mx" target="_blank" className="text-zinc-810 dark:text-white hover:text-cyan-500 transition-colors duration-200">AxoltCode</a>. Todos los derechos reservados.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
    </>
  );
}

export default Footer;
