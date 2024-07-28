interface Props {
  sectionId: string;
}

function Projects({ sectionId }: Props) {
  return (
    <section id={sectionId} className="font-sora bg-black text-white">
      <div className="hidden lg:block lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto">
        <div className="py-20 px-6">
          <h2 className="font-sora font-normal text-5xl text-white text-center py-5">
            My <b className="font-extrabold">Projects</b>
          </h2>
        </div>
      </div>

      <div className="block lg:hidden mx-auto">
        <div className="py-8 sm:py-12 md:py-16 px-6">
          <h2 className="font-sora font-normal text-3xl sm:text-4xl md:text-5xl text-white text-center py-5">
            My <b className="font-extrabold">Projects</b>
          </h2>
        </div>
      </div>
    </section>
  );
}

export default Projects;
