interface Props {
  sectionId: string;
}

function Footer({ sectionId }: Props) {
  return (
    <section
      id={sectionId}
      className="font-sora bg-black text-white text-xl font-semibold"
    >
      <header className="flex flex-row justify-between items-center py-6 px-6 lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto">
        <h1 className="font-bold h-full">AP</h1>

        <div>
          <p className="font-normal text-sm flex justify-center items-end">
            &#169; 2024-2025
          </p>
          <p className="font-normal text-sm flex justify-center items-end">
            aditya pawar
          </p>
        </div>
      </header>
    </section>
  );
}

export default Footer;
