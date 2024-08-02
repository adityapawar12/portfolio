import Image from "next/image";

interface Props {
  projectThumbnailURL: string;
  projectName: string;
  projectDescription: string;
  projectNumber: string;
  typeOne: boolean;
}
function ProjectInfo({
  projectThumbnailURL,
  projectName,
  projectDescription,
  projectNumber,
  typeOne,
}: Props) {
  return typeOne ? (
    <div className="bg-black text-white w-full flex flex-col md:flex-row px-0 sm:px-4 md:px-8 lg:px-16 xl:px-36 gap-0 md:gap-8 lg:gap-16 xl:gap-20 pt-8 md:pt-16">
      <div className="w-full md:w-1/2 flex flex-row justify-center md:justify-start items-center">
        <Image
          src={projectThumbnailURL}
          alt={`${projectName} Image`}
          width={532}
          height={400}
        />
      </div>
      <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-stretch">
        <h3 className="font-sora font-extrabold text-2xl md:text-5xl text-white pb-4 md:pb-8">
          {projectNumber}
        </h3>

        <h2 className="font-sora font-bold text-xl md:text-3xl text-white pb-4">
          {projectName}
        </h2>

        <p className="font-sora font-normal text-base text-zinc-500">
          {projectDescription}
        </p>
      </div>
    </div>
  ) : (
    <div className="bg-black text-white w-full flex flex-col-reverse md:flex-row px-0 sm:px-4 md:px-8 lg:px-16 xl:px-36 gap-0 md:gap-8 lg:gap-16 xl:gap-20 pt-8 md:pt-16">
      <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-stretch">
        <h3 className="font-sora font-extrabold text-2xl md:text-5xl text-white pb-4 md:pb-8">
          {projectNumber}
        </h3>

        <h2 className="font-sora font-bold text-xl md:text-3xl text-white pb-4">
          {projectName}
        </h2>

        <p className="font-sora font-normal text-base text-zinc-500">
          {projectDescription}
        </p>
      </div>
      <div className="w-full md:w-1/2 flex flex-row justify-center md:justify-start items-center">
        <Image
          src={projectThumbnailURL}
          alt={`${projectName} Image`}
          width={532}
          height={400}
        />
      </div>
    </div>
  );
}

export default ProjectInfo;
