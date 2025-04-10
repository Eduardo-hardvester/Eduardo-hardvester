import { useEffect, useState } from 'react';
import Body from './Body';
import Footer from './Footer';
function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  // Aplica el tema
  useEffect(() => {
    const html = document.documentElement;
    if (theme === 'dark') {
      html.classList.add('dark');
      html.classList.remove('light');
    } else {
      html.classList.add('light');
      html.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <>
      <header className="pointer-events-auto relative z-50 flex flex-none flex-col" style={{ height: 'var(--header-height)', marginBottom: 'var(--header-mb)' }}>
        <div className="order-last mt-[calc(--spacing(16)-(--spacing(3)))]"></div>
        <div className="sm:px-8 top-0 order-last -mb-3 pt-3" style={{ position: 'var(--header-position)' }}>
          <div className="mx-auto w-full max-w-7xl lg:px-8">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <div className="top-(--avatar-top,--spacing(3)) w-full" style={{ position: 'var(--header-inner-position)' }}>
                  <div className="relative">
                    <div className="absolute top-3 left-0 origin-left transition-opacity h-10 w-10 rounded-full bg-white/90 p-0.5 ring-1 shadow-lg shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:ring-white/10" style={{ opacity: 'var(--avatar-border-opacity, 0)', transform: 'var(--avatar-border-transform)' }}>
                    </div>
                    <a aria-label="Home" className="block h-16 w-16 origin-left pointer-events-auto" style={{ transform: 'var(--avatar-image-transform)' }} href="/">
                      <img 
                        alt="Perfil" 
                        fetchpriority="high" 
                        width="512" 
                        height="512" 
                        decoding="async" 
                        data-nimg="1" 
                        className="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 h-16 w-16" 
                        style={{ color: 'transparent' }} 
                        sizes="4rem" 
                        src="/img/cesar.webp" 
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="top-0 z-10 h-16 pt-6" style={{ position: 'var(--header-position)' }}>
          <div className="sm:px-8 top-(--header-top,--spacing(6)) w-full" style={{ position: 'var(--header-inner-position)' }}>
            <div className="mx-auto w-full max-w-7xl lg:px-8">
              <div className="relative px-4 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-2xl lg:max-w-5xl">
                  <div className="relative flex gap-4">
                    <div className="flex flex-1"></div>
                    <div className="flex flex-1 justify-end md:justify-center">
                      <div className="pointer-events-auto md:hidden" data-headlessui-state="">
                        <button onClick={toggleMenu} className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 ring-1 shadow-lg shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20" type="button" aria-expanded="false" data-headlessui-state="" id="headlessui-popover-button-:Rbmiqja:">Menu
                          <svg viewBox="0 0 8 6" aria-hidden="true" className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400">
                            <path d="M1.75 1.75 4 4.25l2.25-2.5" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                          </svg>
                        </button>
                      </div>
                      {isMenuOpen && (
                        <div className="fixed inset-0 z-40">
                          <div className="absolute inset-0 backdrop-blur-sm bg-black/30"></div>
                          <div className="absolute inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 duration-150 dark:bg-zinc-900 dark:ring-zinc-800 menu">
                            <div className="flex flex-row-reverse items-center justify-between">
                              <button aria-label="Close menu" onClick={toggleMenu} className="-m-1 p-1">
                                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-9 w-9 text-zinc-500 dark:text-zinc-400">
                                  <path d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                              </button>
                              <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">Navegación</h2>
                            </div>
                            <nav className="mt-6">
                              <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
                                <li><a className="block py-2" href="/about">Acerca</a></li>
                                <li><a className="block py-2" href="/articles">Articulos</a></li>
                                <li><a className="block py-2" href="/projects">Proyectos</a></li>
                                <li><a className="block py-2" href="/speaking">Speaking</a></li>
                                <li><a className="block py-2" href="/uses">Usos</a></li>
                              </ul>
                            </nav>
                          </div>
                        </div>
                      )}
                      <div hidden="" style={{ position: 'fixed', top: '1px', left: '1px', width: '1px', height: '0', padding: '0', margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', borderWidth: '0', display: 'none' }}></div>
                      <nav className="pointer-events-auto hidden md:block">
                        <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 ring-1 shadow-lg shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
                          <li>
                            <a className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400" href="/about">Acerca</a>
                          </li>
                          <li>
                            <a className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400" href="/articles">Articulos</a>
                          </li>
                          <li>
                            <a className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400" href="/projects">Proyectos</a>
                          </li>
                          <li>
                            <a className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400" href="/speaking">Speaking</a>
                          </li>
                          <li>
                            <a className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400" href="/uses">Usos</a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    <div className="flex justify-end md:flex-1">
                      <div className="pointer-events-auto">
                        <button onClick={toggleTheme} type="button" aria-label="Switch to dark theme" className="group rounded-full bg-white/90 px-3 py-2 ring-1 shadow-lg shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20">
                        {theme === 'light' ? (
                            // Modo claro (mostrar icono de luna)
                            <svg
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              aria-hidden="true"
                              className="h-6 w-6 fill-cyan-100 stroke-cyan-400 transition group-hover:fill-zinc-200 group-hover:stroke-cyan-500"
                            >
                              <path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z"></path>
                              <path d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061" fill="none"></path>
                            </svg>
                          ) : (
                            // Modo oscuro (mostrar icono de sol)
                            <svg
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                              className="h-6 w-6 fill-zinc-700 stroke-zinc-500 transition group-hover:stroke-zinc-400"
                            >
                              <path d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Body/>
      <Footer/>
    </>
  );
}

export default App;
