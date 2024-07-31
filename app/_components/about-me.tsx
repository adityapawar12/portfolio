import Image from "next/image";

interface Props {
  sectionId: string;
}

function AboutMe({ sectionId }: Props) {
  return (
    <section id={sectionId} className="font-sora">
      <div className="hidden lg:block lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto">
        <div className="py-20 px-6 w-full flex flex-row justify-center items-start">
          <div className="w-1/2 flex justify-center items-center">
            <Image
              src={"/landing-page/about-me-banner.png"}
              alt={`About Me Section Image`}
              className="w-auto h-[30rem] xl:h-[32rem]"
              width={525}
              height={572}
            />
          </div>

          <div className="w-1/2">
            <h2 className="font-sora font-normal text-5xl text-black text-start py-5">
              About <b className="font-extrabold">Me</b>
            </h2>

            <p className="font-sora font-normal text-base text-zinc-500 pb-4">
              I&apos;m a passionate fullstack developer based in Mumbai,
              specializing in React.js and Node.js. I am very enthusiastic about
              bringing the technical and visual aspects of digital products to
              life. User experience, pixel-perfect design, and writing clear,
              readable, highly performant code matter to me.
            </p>

            <p className="font-sora font-normal text-base text-zinc-500 pb-4">
              I began my journey as a web developer in 2022, and since then,
              I&apos;ve continued to grow and evolve as a developer, taking on
              new challenges and learning the latest technologies along the way.
              Now, a couple of years into my web development journey, I&apos;m
              building cutting-edge web applications using modern technologies
              such as Next.js, TypeScript, NestJS, TailwindCSS, Supabase, and
              much more.
            </p>
          </div>
        </div>
      </div>

      <div className="block lg:hidden mx-auto">
        <div className="py-8 sm:py-12 md:py-16 px-6">
          <div className=" flex justify-center items-center">
            <Image
              src={"/landing-page/about-me-banner.png"}
              alt={`About Me Section Image`}
              className="w-auto h-auto"
              width={525}
              height={572}
            />
          </div>

          <div>
            <h2 className="font-sora font-normal text-3xl sm:text-4xl md:text-5xl text-black text-center py-5">
              About <b className="font-extrabold">Me</b>
            </h2>

            <p className="font-sora font-normal text-base text-zinc-500 pb-4">
              I&apos;m a passionate fullstack developer based in Mumbai,
              specializing in React.js and Node.js. I am very enthusiastic about
              bringing the technical and visual aspects of digital products to
              life. User experience, pixel-perfect design, and writing clear,
              readable, highly performant code matter to me.
            </p>

            <p className="font-sora font-normal text-base text-zinc-500 pb-4">
              I began my journey as a web developer in 2022, and since then,
              I&apos;ve continued to grow and evolve as a developer, taking on
              new challenges and learning the latest technologies along the way.
              Now, a couple of years into my web development journey, I&apos;m
              building cutting-edge web applications using modern technologies
              such as Next.js, TypeScript, NestJS, TailwindCSS, Supabase, and
              much more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
