"use client";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "@/components/Image";
import Button from "@/components/Button";

export default function Page() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const handleClick = (link: string) => {
    router.push(`/${link}`);
  };
  const goal = searchParams.get("npp");
  return (
    <div className="grid grid-rows-1 grid-flow-col gap-4">
      <div className="row-span-3 ...">
        <Button
          key={1}
          title={"Grįžti atgal"}
          onClick={() => handleClick("/")}
        />
      </div>
      <div className="col-span-2 ...">
        <p className="text-3xl ...">Tikslo nr - {goal}</p>
      </div>
    </div>
  );
}
