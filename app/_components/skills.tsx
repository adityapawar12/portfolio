import SkillCard from "./skill-card";

interface Props {
  sectionId: string;
}

function Skills({ sectionId }: Props) {
  return (
    <section id={sectionId} className="font-sora bg-white text-black">
      <div className="hidden lg:block lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto">
        <div className="py-20 px-6">
          <h2 className="font-sora font-normal text-5xl text-black text-center py-5">
            My <b className="font-extrabold">Skills</b>
          </h2>

          <div className="py-14 xl:py-16 grid grid-cols-5 gap-8">
            <SkillCard
              imageURL="/landing-page/skills-js.svg"
              skillName="JavaScript"
            />

            <SkillCard
              imageURL="/landing-page/skills-git.svg"
              skillName="Git"
            />

            <SkillCard
              imageURL="/landing-page/skills-socketio.svg"
              skillName="Socket IO"
            />

            <SkillCard
              imageURL="/landing-page/skills-sass.svg"
              skillName="Sass"
            />

            <SkillCard
              imageURL="/landing-page/skills-storybook.svg"
              skillName="Storybook"
            />
          </div>
        </div>
      </div>

      <div className="block lg:hidden mx-auto">
        <div className="py-8 sm:py-12 md:py-16 px-6">
          <h2 className="font-sora font-normal text-3xl sm:text-4xl md:text-5xl text-black text-center py-5">
            My <b className="font-extrabold">Skills</b>
          </h2>

          <div className="py-5 sm:py-8 md:py-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-8">
            <SkillCard
              imageURL="/landing-page/skills-js.svg"
              skillName="JavaScript"
            />

            <SkillCard
              imageURL="/landing-page/skills-git.svg"
              skillName="Git"
            />

            <SkillCard
              imageURL="/landing-page/skills-socketio.svg"
              skillName="Socket.IO"
            />

            <SkillCard
              imageURL="/landing-page/skills-sass.svg"
              skillName="Sass"
            />

            <SkillCard
              imageURL="/landing-page/skills-storybook.svg"
              skillName="Storybook"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
