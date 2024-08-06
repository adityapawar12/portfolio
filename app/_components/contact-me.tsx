import ContactForm from "./contact-form";

interface Props {
  sectionId: string;
}

function ContactMe({ sectionId }: Props) {
  return (
    <section id={sectionId} className="font-sora">
      <div className="hidden lg:block lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto">
        <div className="py-20 px-6">
          <h2 className="font-sora font-normal text-5xl text-black text-center py-5">
            My <b className="font-extrabold">Contact</b>
          </h2>

          <div className="w-full flex flex-row">
            <div className="w-1/2">
              <div className="w-4/5">
                <ContactForm />
              </div>
            </div>
            <div className="w-1/2">
              <div className="w-4/5 py-10">
                <h2 className="font-sora font-extrabold text-5xl text-black">
                  Let&apos;s talk for
                </h2>
                <h2 className="font-sora font-extrabold text-5xl text-black pb-6">
                  Something special
                </h2>

                <p className="font-sora font-normal text-base text-zinc-500 pb-8">
                  I seek to push the limits of creativity to create
                  high-engaging, user-friendly, and memorable interactive
                  experiences.
                </p>

                <h3 className="font-sora font-bold text-2xl text-black pb-2">
                  adityapawar743.ap5@gmail.com
                </h3>

                <h3 className="font-sora font-bold text-2xl text-black pb-2">
                  8767342495
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="block lg:hidden mx-auto">
        <div className="py-8 sm:py-12 md:py-16 px-6">
          <h2 className="font-sora font-normal text-3xl sm:text-4xl md:text-5xl text-black text-center py-5">
            My <b className="font-extrabold">Contact</b>
          </h2>

          <div className="w-full flex flex-col">
            <div className="w-full">
              <ContactForm />
            </div>
            <div className="w-full">
              <h2 className="font-sora font-extrabold text-3xl sm:text-4xl text-black">
                Let&apos;s talk for
              </h2>
              <h2 className="font-sora font-extrabold text-3xl sm:text-4xl text-black pb-6">
                Something special
              </h2>

              <p className="font-sora font-normal text-base text-zinc-500 pb-8 max-w-lg">
                I seek to push the limits of creativity to create high-engaging,
                user-friendly, and memorable interactive experiences.
              </p>

              <h3 className="font-sora font-bold text-base xs:text-lg sm:text-xl text-black pb-2">
                adityapawar743.ap5@gmail.com
              </h3>

              <h3 className="font-sora font-bold text-base xs:text-lg sm:text-xl text-black pb-2">
                8767342495
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
