import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface Props {
  sectionId: string;
}

function Navbar({ sectionId }: Props) {
  return (
    <section
      id={sectionId}
      className="font-sora text-black text-xl font-semibold"
    >
      <header className="hidden md:flex flex-row justify-between py-4 px-6 lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto">
        <h1 className="font-bold self-center">AP</h1>

        <ul className="flex flex-row justify-start items-center gap-8">
          <li>
            <a>About Me</a>
          </li>
          <li>
            <a>Skills</a>
          </li>
          <li>
            <a>Project</a>
          </li>
          <li>
            <a>Contact me</a>
          </li>
        </ul>

        <Button className="bg-black text-white rounded-sm px-6 py-4">
          Resume
          <Image
            src={"/landing-page/download-icon.svg"}
            alt="Picture of the author"
            className="ml-2 h-4 w-auto"
            width={20}
            height={20}
          />
        </Button>
      </header>

      <header className="flex md:hidden flex-row justify-between py-4 px-4 mx-auto">
        <h1 className="font-bold self-center">AP</h1>

        <Sheet>
          <SheetTrigger>
            <Image
              src={"/landing-page/hamburger-menu.svg"}
              alt="Picture of the author"
              width={27}
              height={18}
            />
          </SheetTrigger>
          <SheetContent>
            <ul className="flex flex-col justify-stretch mt-4 items-start gap-8">
              <li className="w-full">
                <a>About Me</a>
              </li>
              <li className="w-full">
                <a>Skills</a>
              </li>
              <li className="w-full">
                <a>Project</a>
              </li>
              <li className="w-full">
                <a>Contact me</a>
              </li>
              <li className="w-full">
                <a>
                  Resume
                  <Image
                    src={"/landing-page/download-icon.svg"}
                    alt="Picture of the author"
                    className="ml-2 h-4 w-auto"
                    width={20}
                    height={20}
                  />
                </a>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </header>
    </section>
  );
}

export default Navbar;
