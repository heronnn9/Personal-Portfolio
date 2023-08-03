import Hero from "@/Components/Hero";
import About from "@/Components/About";
import ProjectsSection from "@/Components/Projects";
export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <Hero />
      <About />
      <ProjectsSection />
    </main>
  );
}
