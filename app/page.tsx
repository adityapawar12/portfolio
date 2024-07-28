import AboutMe from "./_components/about-me";
import ContactMe from "./_components/contact-me";
import Experiences from "./_components/experiences";
import Footer from "./_components/footer";
import Hero from "./_components/hero";
import Navbar from "./_components/navbar";
import Projects from "./_components/projects";
import Skills from "./_components/skills";
import Testimonials from "./_components/testimonials";

function Home() {
  return (
    <main className="bg-white text-black">
      <Navbar sectionId={"navbar"} />

      <Hero sectionId={"hero"} />

      <Skills sectionId={"mySkills"} />

      <Experiences sectionId={"myExperience"} />

      <AboutMe sectionId={"aboutMe"} />

      {/* <Projects sectionId={"myProjects"} />

      <Testimonials sectionId={"myTestimonials"} />

      <ContactMe sectionId={"myContact"} /> */}

      <Footer sectionId={"footer"} />
    </main>
  );
}

export default Home;
