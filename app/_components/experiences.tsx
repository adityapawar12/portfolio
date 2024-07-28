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
              companyLogoURL="/landing-page/tikao-logo.webp"
              companyName="Tikao AI"
              jobRoleName="FrontEnd Developer"
              jobDescription="Ut non mi mattis, volutpat neque et, sagittis nulla. Sed eget congue est, quis placerat enim. Sed ut condimentum est, nec eleifend ligula. Nam cursus enim sed maximus malesuada. Aenean pellentesque fermentum libero ac pellentesque. Phasellus ornare tincidunt nunc, at semper erat posuere at. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
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

            <ExperienceCard
              companyLogoURL="/landing-page/bta-logo.png"
              companyName="BrandTouch India"
              jobRoleName="Frontend Developer"
              jobDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a mauris dapibus, faucibus enim et, mattis orci. Nulla convallis tellus ac enim facilisis lobortis. Vestibulum interdum massa non massa iaculis, vel rhoncus erat ullamcorper. Vivamus euismod id metus a posuere. Proin pharetra sagittis odio, in porttitor purus tincidunt at. Fusce consequat odio sit amet sapien feugiat scelerisque. Morbi quis magna sem. Sed id arcu eget orci ullamcorper semper. Nam tristique mauris sit amet gravida dapibus. Nam quis nisi tempor, finibus mi eu, placerat dui. Fusce sed eros pharetra nulla interdum egestas."
              jobDuration="Feb 2022 - May 2023"
              fullBlackVariant={false}
              grayVariant={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
