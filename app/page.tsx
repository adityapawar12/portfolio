import AboutMe from "./_components/about-me";
import ContactMe from "./_components/contact-me";
import Experiences from "./_components/experiences";
import Footer from "./_components/footer";
import Hero from "./_components/hero";
import Navbar from "./_components/navbar";
import Skills from "./_components/skills";

function Home() {
  return (
    <main className="bg-white text-black">
      <Navbar sectionId={"navbar"} />

      <Hero sectionId={"hero"} />

      <Skills sectionId={"my-skills"} />

      <Experiences sectionId={"my-experience"} />

      <AboutMe sectionId={"about-me"} />

      {/* <Projects sectionId={"myProjects"} /> */}

      {/* <Testimonials sectionId={"myTestimonials"} /> */}

      <ContactMe sectionId={"contact-me"} />

      <Footer sectionId={"footer"} />
    </main>
  );
}

export default Home;
