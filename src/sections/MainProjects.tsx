"use client"

import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    title: "Portfolio Arquitecto",
    description:
      "Sitio creado con Next.js, Sanity y diseño en Figma para el arquitecto Andrés Pescader. Diseño simple y minimalista, para destacar el trabajo del arquitecto.",
    tech: ["Next.js", "Sanity", "Figma"],
    url: "https://andres-pescader-arq.vercel.app/",
    images: [{url: "/images/ArqPantalla.png", alt:"Arqitecto Portfolio"}],
  },
  {
    title: "Agencia de Viajes",
    description:
      "App fullstack con React, Node.js, Express y MongoDB. Incluye CMS propio y auth con JWT.",
    tech: ["React", "Chakra UI", "Node.js", "MongoDB"],
    url: "https://amateviajando.com.ar/",
    images: [{url: "/images/AgenciaViajes_Pantalla.png", alt:"Agencia de Viajes"}],
  },
  {
    title: "LandingPage Legumbres",
    description:
      "Landing para marca de legumbres premium. Incluye diseño en Figma y desarrollo con Remix.`",
    tech: ["Remix", "Figma"],
    url: "https://lentejaspremium.netlify.app/",
    images: [{url: "/images/Landing_Pantalla.png", alt:"Landing Legumbres"}],
  },
];

export default function MainProjects() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div id="main-projects" className="relative py-20 max-w-4xl mx-auto">
      <h2 className="text-3xl font-title mb-10 text-brand-green px-4">
        Proyectos Destacados
      </h2>

      <div className="relative h-[580px] w-full overflow-hidden">
        {projects.map((project, index) => {
          const isActive = index === activeIndex;

          return (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`absolute top-0 left-0 w-full transition-all duration-500 ease-in-out rounded-t-xl shadow-xl
                overflow-hidden z-[${index}] bg-brand-green
                ${index==0 ? "bg-brand-green" : index==1 ? "bg-brand-green-dark" : "bg-brand-green-darker"}
                ${isActive ? "h-[480px]" : "h-[80px]"}`}
              style={{
                transform: isActive
                  ? `translateY(${index * 60}px)`
                  : index > activeIndex ? `translateY(${index * 60 + 400}px)` : `translateY(${index * 60}px)`
              }}
            >

              <div className="relative z-10">
                <div className={`p-4 font-title text-xl text-neutral-black uppercase ${isActive ? "" : "cursor-pointer"}`}>
                  {project.title}
                </div>
                <div className="p-4 text-neutral-white flex flex-col gap-4">
                  <p className="font-sans">{project.description}</p>
                  <Image
                    src={project.images[0].url}
                    alt={project.images[0].alt}
                    layout="responsive"
                    width={500}
                    height={300}
                  />
                  <ul className="flex gap-3 flex-wrap">
                    {project.tech.map((tech, idx) => (
                      <li
                        key={idx}
                        className="text-sm px-3 py-1 rounded-full bg-white/20"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
