export default function Hero() {
  return (
    <header
      className="h-16 flex flex-col justify-center items-center text-center px-4 bg-background-light text-text-light dark:bg-background-dark dark:text-text-dark"
    >
      <nav>
        <ul className="flex space-x-6 tracking-wider">
          <li>
            <a href="#hero" className="hover:text-brand-blue dark:hover:text-brand-green">Inicio</a>
          </li>
          <li>
            <a href="#about" className="hover:text-brand-blue dark:hover:text-brand-green">Sobre mí</a>
        </li>
        <li>
          <a href="#projects" className="hover:text-brand-blue dark:hover:text-brand-green">Proyectos</a>
        </li>
        <li>
          <a href="#contact" className="hover:text-brand-blue dark:hover:text-brand-green">Contacto</a>
        </li>
      </ul>
    </nav>
    </header>
  );
}


/*"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="min-h-screen flex items-center justify-center bg-background-dark text-text-dark px-6"
      id="hero"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-title text-5xl sm:text-6xl md:text-7xl leading-tight tracking-tight"
        >
          Fullstack Developer<br />
          que crea experiencias<br />
          <span className="text-brand-blue">modernas</span> y <span className="text-brand-green">accesibles</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-6 text-lg text-neutral-gray font-sans max-w-xl"
        >
          Combinando diseño limpio y código eficiente para construir soluciones que impactan.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-8 flex gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-brand-green text-background-dark font-semibold rounded-lg transition hover:bg-brand-blue"
          >
            Ver proyectos
          </a>
          <a
            href="/cv.pdf"
            className="px-6 py-3 border border-text-dark text-text-dark font-semibold rounded-lg hover:bg-text-dark hover:text-background-dark transition"
          >
            Descargar CV
          </a>
        </motion.div>
      </div>
    </section>
  );
}
*/