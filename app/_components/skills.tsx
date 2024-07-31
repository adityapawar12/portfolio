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
              imageURL="/landing-page/skills/skills-javascript-logo.svg"
              skillName="JavaScript"
            />

            <SkillCard
              imageURL="/landing-page/skills/skills-typescript-logo.svg"
              skillName="TypeScript"
            />

            <SkillCard
              imageURL="/landing-page/skills/skills-react-logo.svg"
              skillName="React JS"
            />

            <SkillCard
              imageURL="/landing-page/skills/skills-nextjs-logo.svg"
              skillName="Next JS"
            />

            <SkillCard
              imageURL="/landing-page/skills/skills-nodejs-logo.svg"
              skillName="Node JS"
            />

            <SkillCard
              imageURL="/landing-page/skills/skills-expressjs-logo.svg"
              skillName="Express JS"
            />

            <SkillCard
              imageURL="/landing-page/skills/skills-postgresql-logo.svg"
              skillName="PostgreSQL"
            />

            <SkillCard
              imageURL="/landing-page/skills/skills-mongodb-logo.svg"
              skillName="MongoDB"
            />

            <SkillCard
              imageURL="/landing-page/skills/skills-git-logo.svg"
              skillName="Git"
            />

            <SkillCard
              imageURL="/landing-page/skills/skills-angular-logo.svg"
              skillName="Angular 2+"
            />

            <SkillCard
              imageURL="/landing-page/skills/skills-html-logo.svg"
              skillName="HTML 5"
            />

            <SkillCard
              imageURL="/landing-page/skills/skills-css-logo.svg"
              skillName="CSS 3"
            />

            <SkillCard
              imageURL="/landing-page/skills/skills-tailwind-logo.svg"
              skillName="Tailwind CSS"
            />

            <SkillCard
              imageURL="/landing-page/skills/skills-bootstrap-logo.svg"
              skillName="Bootstrap 4"
            />
            <SkillCard
              imageURL="/landing-page/skills/skills-socketio-logo.svg"
              skillName="Socket IO"
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
              imageURL="/landing-page/skills/skills-javascript-logo.svg"
              skillName="JavaScript"
            />

            <SkillCard
              imageURL="/landing-page/skills/skills-typescript-logo.svg"
              skillName="TypeScript"
            />

            <SkillCard
              imageURL="/landing-page/skills/skills-react-logo.svg"
              skillName="React JS"
            />

            <SkillCard
              imageURL="/landing-page/skills/skills-nextjs-logo.svg"
              skillName="Next JS"
            />

            <SkillCard
              imageURL="/landing-page/skills/skills-nodejs-logo.svg"
              skillName="Node JS"
            />

            <SkillCard
              imageURL="/landing-page/skills/skills-expressjs-logo.svg"
              skillName="Express JS"
            />

            <SkillCard
              imageURL="/landing-page/skills/skills-postgresql-logo.svg"
              skillName="PostgreSQL"
            />

            <SkillCard
              imageURL="/landing-page/skills/skills-mongodb-logo.svg"
              skillName="MongoDB"
            />

            <SkillCard
              imageURL="/landing-page/skills/skills-git-logo.svg"
              skillName="Git"
            />

            <SkillCard
              imageURL="/landing-page/skills/skills-angular-logo.svg"
              skillName="Angular 2+"
            />

            <SkillCard
              imageURL="/landing-page/skills/skills-html-logo.svg"
              skillName="HTML 5"
            />

            <SkillCard
              imageURL="/landing-page/skills/skills-css-logo.svg"
              skillName="CSS 3"
            />

            <SkillCard
              imageURL="/landing-page/skills/skills-tailwind-logo.svg"
              skillName="Tailwind CSS"
            />

            <SkillCard
              imageURL="/landing-page/skills/skills-bootstrap-logo.svg"
              skillName="Bootstrap 4"
            />
            <SkillCard
              imageURL="/landing-page/skills/skills-socketio-logo.svg"
              skillName="Socket IO"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
