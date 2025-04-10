import React from "react";

function Gallery(){
   
    return(
    <>
        <div class="mt-16 sm:mt-20">
            <div class="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
              <div class="relative aspect-9/10 w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 rotate-2">
              <img alt="" loading="lazy" width="3744" height="5616" decoding="async" className="absolute inset-0 h-full w-full object-cover" style={{color:"transparent"}} sizes="(min-width: 640px) 18rem, 11rem" src="/img/p1.webp"/>              </div>
              <div class="relative aspect-9/10 w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 -rotate-2">
              <img alt="" loading="lazy" width="3744" height="5616" decoding="async" className="absolute inset-0 h-full w-full object-cover" style={{color:"transparent"}} sizes="(min-width: 640px) 18rem, 11rem" src="/img/p2.webp"/>              </div>
              <div class="relative aspect-9/10 w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 rotate-2">
              <img alt="" loading="lazy" width="3744" height="5616" decoding="async" className="absolute inset-0 h-full w-full object-cover" style={{color:"transparent"}} sizes="(min-width: 640px) 18rem, 11rem" src="/img/p3.webp"/>              </div>
              <div class="relative aspect-9/10 w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 rotate-2">
              <img alt="" loading="lazy" width="3744" height="5616" decoding="async" className="absolute inset-0 h-full w-full object-cover" style={{color:"transparent"}} sizes="(min-width: 640px) 18rem, 11rem" src="/img/p4.webp"/>              </div>
              <div class="relative aspect-9/10 w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 -rotate-2">
              <img alt="" loading="lazy" width="3744" height="5616" decoding="async" className="absolute inset-0 h-full w-full object-cover" style={{color:"transparent"}} sizes="(min-width: 640px) 18rem, 11rem" src="/img/p5.webp"/>              </div>
            </div>
        </div>
    </>
   );
}


export default Gallery;