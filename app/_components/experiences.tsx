import ExperienceCard from "./experience-card";

interface Props {
  sectionId: string;
}

function Experiences({ sectionId }: Props) {
  return (
    <section id={sectionId} className="font-sora bg-black text-white">
      <div className="block lg:block lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto">
        <div className="py-20 px-6">
          <h2 className="font-sora font-normal text-5xl text-white text-center py-5">
            My <b className="font-extrabold">Experience</b>
          </h2>

          <div className="w-full flex flex-col gap-8 pt-5">
            <ExperienceCard
              companyLogoURL="/landing-page/bta-logo.png"
              companyName="Brandtouch & Analytics"
              jobRoleName="Fullstack Developer"
              jobDescription="As a Fullstack Developer at Brandtouch & Analytics, I leveraged Angular 10, Node.js, Express.js, SQL Server, and MongoDB to develop a video calling platform aimed at enhancing online shopping experiences. This innovative product enabled users to shop online with the assistance of real-time video calls. Additionally, I created and optimized dashboards for effective data visualization and user interaction."
              jobDuration="Feb 2022 - May 2023"
              fullBlackVariant={false}
              grayVariant={true}
            />

            <ExperienceCard
              companyLogoURL="/landing-page/tikao-logo.webp"
              companyName="Tikao"
              jobRoleName="Fullstack Developer"
              jobDescription="In my subsequent role as a Fullstack Developer, I utilized Next.js (React.js), Node.js, and PostgreSQL to create an innovative platform that provides sustainability scores to brands. This platform was designed to analyze data comprehensively, offering brands actionable insights to enhance their sustainability practices. Additionally, I worked on developing a consumer-facing app that helps users make sustainable choices."
              jobDuration="Jun 2023 - May 2024"
              fullBlackVariant={true}
              grayVariant={false}
            />

            {/* <ExperienceCard
              companyLogoURL="/landing-page/bta-logo.png"
              companyName="CBO Technologies"
              jobRoleName="Fullstack Developer"
              jobDescription="Nam aliquet sit amet ex a placerat. Suspendisse nunc urna, rhoncus rutrum ligula in, posuere lobortis erat. In cursus ligula lorem. Cras blandit convallis mauris, sed feugiat mi blandit eget. Quisque porttitor, nisl id egestas viverra, nisl metus tincidunt nibh, ac scelerisque erat lectus ac arcu. Duis arcu dolor, vulputate ac convallis sed, interdum eget lacus. Sed in eros metus."
              jobDuration="Nov 2022 - "
              fullBlackVariant={false}
              grayVariant={true}
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
