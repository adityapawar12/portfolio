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
        </div>
      </div>

      <div className="block lg:hidden mx-auto">
        <div className="py-8 sm:py-12 md:py-16 px-6">
          <h2 className="font-sora font-normal text-3xl sm:text-4xl md:text-5xl text-black text-center py-5">
            My <b className="font-extrabold">Contact</b>
          </h2>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
