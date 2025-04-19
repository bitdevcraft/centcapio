import AboutMe from "@/components/about-me";
import Experience from "@/components/experience";
import LetsConnect from "@/components/lets-connect";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <div className="min-h-screen relative mb-32">
      <div className="lg:flex lg:min-h-[90vh] lg:items-center">
        <AboutMe />
      </div>
      <Experience />
      <Skills />
      <Projects />
    </div>
  );
}
