import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface Props {
  imageURL: string;
  skillName: string;
}

function SkillCard({ imageURL, skillName }: Props) {
  return (
    <Card className="col-span-1 border-2 border-black rounded-sm bg-white text-black">
      <CardContent className="flex flex-col gap-4 justify-center items-center">
        <Image
          src={imageURL}
          alt={`${skillName} Image`}
          className="mt-4 sm:mt-8 max-w-md mx-auto h-14 w-14"
          width={56}
          height={56}
        />
        <p>{skillName}</p>
      </CardContent>
    </Card>
  );
}

export default SkillCard;
