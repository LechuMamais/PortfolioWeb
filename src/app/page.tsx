import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Header from "@/components/Header";
import MainProjects from "@/sections/MainProjects";
import SideProjects from "@/sections/SideProjects";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <section id="projects">
          <MainProjects />
          <SideProjects />
        </section>
        <About />
        <Contact />
      </main>
    </>
  );
}
