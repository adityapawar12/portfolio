import ProjectInfo from "./project-info";

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

          <div>
            <ProjectInfo
              projectName="Demo Project"
              projectDescription="Demo Project Description I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book."
              projectThumbnailURL="/landing-page/projects/demo-project.png"
              typeOne={true}
              projectNumber="01"
            />
            <ProjectInfo
              projectName="Demo Project"
              projectDescription="Demo Project Description I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book."
              projectThumbnailURL="/landing-page/projects/demo-project.png"
              typeOne={false}
              projectNumber="02"
            />
            <ProjectInfo
              projectName="Demo Project"
              projectDescription="Demo Project Description I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book."
              projectThumbnailURL="/landing-page/projects/demo-project.png"
              typeOne={true}
              projectNumber="03"
            />
          </div>
        </div>
      </div>

      <div className="block lg:hidden mx-auto">
        <div className="py-8 sm:py-12 md:py-16 px-6">
          <h2 className="font-sora font-normal text-3xl sm:text-4xl md:text-5xl text-white text-center py-5">
            My <b className="font-extrabold">Projects</b>
          </h2>

          <div>
            <ProjectInfo
              projectName="Demo Project"
              projectDescription="Demo Project Description I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book."
              projectThumbnailURL="/landing-page/projects/demo-project.png"
              typeOne={true}
              projectNumber="01"
            />
            <ProjectInfo
              projectName="Demo Project"
              projectDescription="Demo Project Description I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book."
              projectThumbnailURL="/landing-page/projects/demo-project.png"
              typeOne={false}
              projectNumber="02"
            />
            <ProjectInfo
              projectName="Demo Project"
              projectDescription="Demo Project Description I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book."
              projectThumbnailURL="/landing-page/projects/demo-project.png"
              typeOne={true}
              projectNumber="03"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
