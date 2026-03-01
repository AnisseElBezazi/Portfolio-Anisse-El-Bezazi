import Hero from "./components/hero";
import Profil from "./components/profil";
import Parcours from "./components/parcours";
import Skills from "./components/skills";
import Projects from "./components/projets";
import Contact from "./components/contact";
export default function Home() {
  return (
    <>
      <Hero />
      <Profil />
      <Parcours />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
