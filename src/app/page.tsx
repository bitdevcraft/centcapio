import AboutMe from "@/components/about-me";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <div className="lg:flex lg:min-h-[90vh] lg:items-center">
        <AboutMe />
      </div>
      <Experience />
      <Skills />
      <Projects />
      <div className="mt-10 md:mt-16">
        <Footer />
      </div>
    </div>
  );
}
