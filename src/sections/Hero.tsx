"use client";

import VantaBackground from "@/components/VantaBackground";
import { motion } from "framer-motion";


export default function Hero() {
  return (
    <VantaBackground id="hero" className="text-text-dark">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-title text-5xl sm:text-6xl md:text-7xl leading-tight tracking-tight"
        >
          Fullstack Developer<br />
          que crea experiencias<br />
          <span className="text-brand-blue">modernas</span> y{" "}
          <span className="text-brand-green">accesibles</span>
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
          transition={{ delay: 0.8 }}
          className="mt-8 flex gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-brand-green text-background-dark font-semibold rounded-lg transition hover:bg-brand-blue"
          >
            Ver proyectos
          </a>
        </motion.div>
      </div>
    </VantaBackground>
  );
}
