import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
            <Link href="/#my-skills">Skills </Link>
          </li>
          <li>
            <Link href="/#my-experience">Experiences </Link>
          </li>
          <li>
            <Link href="/#about-me">About Me </Link>
          </li>
          <li>
            <Link href="/#contact-me">Contact me </Link>
          </li>
        </ul>

        <Link
          href="https://drive.google.com/uc?export=download&id=1zs8cudn4oPrGf6_WcRXbpa6ljZcBFjGx"
          download="your-file-name.pdf"
        >
          <Button className="bg-black text-white rounded-sm px-6 py-4">
            Resume
            <Image
              src={"/landing-page/navbar/download-icon.svg"}
              alt="Picture of the author"
              className="ml-2 h-4 w-auto"
              width={20}
              height={20}
            />
          </Button>
        </Link>
      </header>

      <header className="flex md:hidden flex-row justify-between py-4 px-4 mx-auto">
        <h1 className="font-bold self-center">AP</h1>

        <Sheet>
          <SheetTrigger>
            <Image
              src={"/landing-page/navbar/hamburger-menu.svg"}
              alt="Picture of the author"
              width={27}
              height={18}
            />
          </SheetTrigger>
          <SheetContent>
            <ul className="flex flex-col justify-stretch mt-4 items-start gap-8">
              <li className="w-full">
                <Link href="/#my-skills">Skills </Link>
              </li>
              <li className="w-full">
                <Link href="/#my-experience">Experiences </Link>
              </li>
              <li className="w-full">
                <Link href="/#about-me">About Me </Link>
              </li>
              <li className="w-full">
                <Link href="/#contact-me">Contact me </Link>
              </li>
              <li className="w-full">
                <Link
                  href="https://drive.google.com/uc?export=download&id=1SVenQ1suiep4XdGg3vhCktOlL8zlGa_D"
                  download="aditya-pawar-resume.pdf"
                  className="bg-black text-white rounded-sm px-6 py-4"
                >
                  Resume
                  <Image
                    src={"/landing-page/navbar/download-icon.svg"}
                    alt="Picture of the author"
                    className="ml-2 h-4 w-auto"
                    width={20}
                    height={20}
                  />
                </Link>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </header>
    </section>
  );
}

export default Navbar;
