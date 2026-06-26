"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Header() {

  const [open,setOpen]=useState(false);

  const navItems=[
    ["About","#about"],
    ["Experience","#experience"],
    ["Skills","#skills"],
    ["Professional Highlights","#highlights"],
    ["Education","#education"],
    ["Contact","#contact"],
  ];

  return(

<header className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/90 dark:bg-black/90 border-b border-gray-200 dark:border-gray-800">

<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

<motion.a
href="#home"
initial={{opacity:0}}
animate={{opacity:1}}
className="text-2xl font-bold"
>
MS
</motion.a>

<nav className="hidden lg:flex items-center gap-8">

{navItems.map(([name,link])=>(

<a
key={name}
href={link}
className="text-sm font-medium hover:text-indigo-600 transition"
>
{name}
</a>

))}

<a
href="#contact"
className="ml-4 px-5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white transition"
>
Let's Talk
</a>

</nav>

<button
className="lg:hidden"
onClick={()=>setOpen(!open)}
>
☰
</button>

</div>

{open && (

<div className="lg:hidden border-t border-gray-200 dark:border-gray-800">

<div className="px-6 py-5 flex flex-col gap-5">

{navItems.map(([name,link])=>(

<a
key={name}
href={link}
onClick={()=>setOpen(false)}
>
{name}
</a>

))}

<a
href="#contact"
onClick={()=>setOpen(false)}
className="px-5 py-3 bg-indigo-600 text-white rounded-lg text-center"
>
Let's Talk
</a>

</div>

</div>

)}

</header>

  )

}