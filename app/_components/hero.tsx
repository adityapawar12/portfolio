import Image from "next/image";

interface Props {
  sectionId: string;
}

function Hero({ sectionId }: Props) {
  return (
    <section id={sectionId}>
      <div className="hidden lg:block md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto">
        <div className="lg:h-[28rem] xl:h-[32rem] mx-6 bg-[url('/landing-page/hero/hero-image.png')] bg-no-repeat bg-contain bg-right-bottom">
          <div className="h-full w-2/5 xl:w-1/2 flex items-start flex-col justify-center gap-4 py-12">
            <h2 className="font-sora text-3xl leading-[46px] xl:text-5xl xl:leading-[66px] font-normal">
              <span>
                Hello I&apos;am <b className="font-extrabold">Aditya Pawar.</b>
                <br />
              </span>
              <span>
                <b className="font-extrabold">Fullstack Developer</b>
                <br />
              </span>
              <span>
                Based In
                <b className="font-extrabold"> Mumbai.</b>
              </span>
            </h2>

            <p className="font-sora text-base font-normal text-zinc-500">
              I am passionate about building robust and scalable web
              applications. With expertise in both front-end and back-end
              development, I create seamless and user-friendly experiences. I
              thrive in dynamic environments and am always eager to tackle new
              challenges and learn new technologies. Let&apos;s collaborate to
              turn your ideas into reality!
            </p>
          </div>
        </div>
      </div>

      <div className="max-md:hidden block lg:hidden mx-auto">
        <div className="h-[24rem] mx-6 bg-[url('/landing-page/hero/hero-image.png')] bg-no-repeat bg-contain bg-right-bottom">
          <div className="h-full w-2/4 flex items-start flex-col justify-center gap-4 py-12">
            <h2 className="font-sora text-3xl leading-[40px] font-normal">
              <span>
                Hello I&apos;am <b className="font-extrabold">Aditya Pawar.</b>
                <br />
              </span>
              <span>
                <b className="font-extrabold">Fullstack Developer</b>
                <br />
              </span>
              <span>
                Based In
                <b className="font-extrabold"> Mumbai.</b>
              </span>
            </h2>

            <p className="font-sora text-base font-normal text-zinc-500">
              I am passionate about building robust and scalable web
              applications. With expertise in both front-end and back-end
              development, I create seamless and user-friendly experiences. I
              thrive in dynamic environments and am always eager to tackle new
              challenges and learn new technologies. Let&apos;s collaborate to
              turn your ideas into reality!
            </p>
          </div>
        </div>
      </div>

      <div className="block md:hidden px-4">
        <div className="w-full">
          <Image
            src={"/landing-page/hero/hero-image-mob.png"}
            alt="Hero Image"
            className="w-full h-auto mt-4 sm:mt-8 max-w-md mx-auto"
            width={342}
            height={332}
          />
        </div>

        <div className="w-full flex items-start flex-col justify-center gap-4 mt-4 2xs:mt-6 max-w-md mx-auto">
          <h2 className="font-sora text-xl leading-7 2xs:text-[28px] 2xs:leading-9 xs:text-3xl xs:leading-10 font-normal">
            <span>
              Hello I&apos;am <b className="font-extrabold">Aditya Pawar.</b>
              <br />
            </span>
            <span>
              <b className="font-extrabold">Fullstack Developer</b>
              <br />
            </span>
            <span>
              Based In
              <b className="font-extrabold"> Mumbai.</b>
            </span>
          </h2>

          <p className="font-sora text-sm font-normal text-zinc-500">
            I am passionate about building robust and scalable web applications.
            With expertise in both front-end and back-end development, I create
            seamless and user-friendly experiences. I thrive in dynamic
            environments and am always eager to tackle new challenges and learn
            new technologies. Let&apos;s collaborate to turn your ideas into
            reality!
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
