
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import Terminal from "@/components/ui/Terminal";

export default function Home() {
  return (
    <>
      <Hero />


      <section id="about" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-4">
              <span className="text-hacker-green font-mono text-xl">02.</span>
              <span className="text-gradient">About Me</span>
              <span className="flex-1 h-[1px] bg-gradient-to-r from-hacker-green/20 to-transport ml-4" />
            </h2>
          </div>
          <Terminal />
        </div>
      </section>

      <Projects />
      <Skills />
      <Contact />
      </>
  );
}
