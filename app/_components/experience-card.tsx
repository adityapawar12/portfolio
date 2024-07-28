import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

interface Props {
  companyLogoURL: string;
  companyName: string;
  jobRoleName: string;
  jobDescription: string;
  jobDuration: string;
  fullBlackVariant: boolean;
  grayVariant: boolean;
}

function ExperienceCard({
  companyLogoURL,
  companyName,
  jobRoleName,
  jobDescription,
  jobDuration,
  fullBlackVariant,
  grayVariant,
}: Props) {
  return (
    <Card
      className={`${fullBlackVariant && "bg-black"} ${
        grayVariant && "bg-zinc-800"
      } text-white border-zinc-500 border`}
    >
      <CardHeader className="flex flex-col lg:flex-row justify-start items-start lg:justify-between lg:items-center">
        <div className="flex flex-row justify-start items-center">
          <div className="mr-3">
            <Image
              src={companyLogoURL}
              alt={`${companyName} Image`}
              width={32}
              height={32}
            />
          </div>
          <div>
            <CardTitle className="font-sora font-semibold text-2xl text-white">{`${jobRoleName} at ${companyName}`}</CardTitle>
          </div>
        </div>
        <CardDescription className="font-sora font-semibold text-base text-zinc-300">
          {jobDuration}
        </CardDescription>
      </CardHeader>
      <CardContent className="font-sora font-normal text-base text-zinc-300">
        <p>{jobDescription}</p>
      </CardContent>
    </Card>
  );
}

export default ExperienceCard;
