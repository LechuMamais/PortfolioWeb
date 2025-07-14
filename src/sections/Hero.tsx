"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import FOG from "vanta/dist/vanta.fog.min";
import * as THREE from "three";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    if (!vantaEffect && heroRef.current) {
      const effect = FOG({
        el: heroRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        baseColor: 0x001011,
        midtoneColor: 0x6ccff6,
        lowlightColor: 0x001011,
        highlightColor: 0x001011,
        blurFactor: 0.9,
        speed: 0.6,
        zoom: 0.3,
      });
      setVantaEffect(effect);
    }

    return () => {
      if (vantaEffect && typeof vantaEffect.destroy === "function") {
        vantaEffect.destroy();
      }
    };
  }, [vantaEffect]);

  return (
    
    <section ref={heroRef}
      className="relative w-full min-h-screen flex items-center justify-center text-text-dark px-6"
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
          <span className="text-brand-blue">modernas</span> y <span className="text-brand-green">accesibles</span></motion.h1>

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
    </section>
  );
}
