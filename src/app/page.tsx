"use client";
import Image from "../components/Image";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const handleClick = (link: string) => {
    router.push(`/${link}`);
  };

  const buttonData = [
    { buttonText: "1", buttonDescription: "Description 1", link: "tikslai?npp=1" },
    {
      buttonText: "2",
      buttonDescription: "Description 2",
      link: "tikslai?npp=2",
    },
    {
      buttonText: "3",
      buttonDescription: "Description 3",
      link: "tikslai?npp=3",
    },
    {
      buttonText: "4",
      buttonDescription: "Description 4",
      link: "tikslai?npp=4",
    },
    {
      buttonText: "5",
      buttonDescription: "Description 5",
      link: "tikslai?npp=5",
    },
    {
      buttonText: "6",
      buttonDescription: "Description 6",
      link: "tikslai?npp=6",
    },
    {
      buttonText: "7",
      buttonDescription: "Description 6",
      link: "tikslai?npp=7",
    },
    {
      buttonText: "8",
      buttonDescription: "Description 6",
      link: "tikslai?npp=8",
    },
    {
      buttonText: "9",
      buttonDescription: "Description 6",
      link: "tikslai?npp=9",
    },
    {
      buttonText: "10",
      buttonDescription: "Description 6",
      link: "tikslai?npp=10",
    },
    {
      buttonText: "11",
      buttonDescription: "Description 6",
      link: "tikslai?npp=11",
    },
    {
      buttonText: "12",
      buttonDescription: "Description 6",
      link: "tikslai?npp=12",
    },
    {
      buttonText: "13",
      buttonDescription: "Description 6",
      link: "tikslai?npp=13",
    },
  ];

  return (
    <div className="container">
      <div className="pl-[22%] pb-32">
        <Image
          alt={"Kitaip"}
          src={"/kitaip_image.png"}
          className="object-center "
          width={150}
          height={40}
        />
      </div>
      <div className="pl-[10%] pr-[20%]">
        <div className="grid grid-rows-1 grid-flow-col gap-4">
          <div className="row-span-3 ...">
            <Image
              alt={"Ingrida Šimonytė"}
              src={"/simonyte.png"}
              className="object-center md:h-36 lg:h-48"
              width={150}
              height={300}
            />
          </div>
          <div className="col-span-2 ...">
            <p className="text-sm ...">
              2022 m. vasario 24 d. pradėtas Rusijos karas prieš Ukrainą turės
              ilgalaikį poveikį Lietuvai. Siekdama susidoroti su šia grėsme,
              Lietuvos Vyriausybė įgyvendino skirtingas priemones, įskaitant
              ginklų modernizaciją, NATO infrastruktūros plėtrą, sienos apsaugą
              ir kibernetinį saugumą. Lietuva gavo papildomą saugumo garantijų
              palaikymą iš NATO sąjungininkų. Tačiau geopolitinis nestabilumas
              ir ekonomikos neapibrėžtumas daro įtaką Lietuvos ekonomikai. Šiuo
              metu Lietuva siekia stiprinti savo energetinę nepriklausomybę nuo
              Rusijos ir Baltarusijos. Taip pat vyksta krizių valdymo reformos,
              siekiant geriau reaguoti į neįprastas situacijas. Lietuvos įmonės
              taip pat prisitaiko prie naujų sąlygų ir orientuojasi į eksportą į
              demokratines šalis. Vyriausybė įgyvendina ir kitus programinius
              įsipareigojimus, tokius kaip švietimo reforma ir duomenų valdymo
              reforma. Visa tai galima rasti Vyriausybės 2022 m. veiklos
              ataskaitoje.
            </p>
          </div>
        </div>
      </div>
      <div className="pl-[23%] ">
        <div className="grid grid-rows-1 grid-flow-col gap-0">
          <div className="row-span-3 ...">
            <p className="text-sm ...">Nuoširdžiai</p>
            <p className="text-sm ...">Ministrė Pirmininkė Ingrida Šimonytė</p>
            <p className="text-sm ...">2023 m. gegužės 15 d. Vilnius</p>
          </div>
          <div className="row-span-3 ...">
            <Image
              alt={"Ingridos Šimonytės parašas"}
              src={"/simonyte_parasas.png"}
              className=" object-center "
              width={100}
              height={15}
            />
          </div>
        </div>
      </div>

      <div className="pl-[23%] py-16">
        <p className="text-2xl ...">Didžiuojamės šiais projektais:</p>
      </div>
      <div className="pl-[23%] ">
        <div className="pb-4">
          <button className="bg-gray-300 hover:bg-gray-400 text-black font-medium py-6 px-16 border-b-4 border-gray-700 hover:border-gray-500 rounded-2xl">
            Gimdos kaklelio vėžio prevencijos programa
          </button>
        </div>
        <button className="bg-gray-300 hover:bg-gray-400 text-black font-medium py-6 px-16 border-b-4 border-gray-700 hover:border-gray-500 rounded-2xl">
          Lietuvos tapimas Medicinos technologijų inovacijų centru
        </button>
      </div>

      <div className="pl-[23%] py-16">
        <p className="text-2xl ...">NPP tikslai</p>
      </div>
      <div className="px-[30%]">
        <div className="grid grid-cols-4 gap-4 md:grid-cols-4">
          {buttonData.map((data, index) => (
            <Button
              key={index}
              title={data.buttonText}
              onClick={() => handleClick(data.link)}
            />
          ))}
        </div>
      </div>
      <div className="pl-[23%] py-16">
        <p className="text-2xl ...">Svarbūs tęstini tikslai:</p>
      </div>
      <div className="pl-[23%] py-16">
        <p className="text-2xl ...">Kodėl dar nepasiekti:</p>
      </div>
      <div className="pl-[23%] py-16">
        <p className="text-2xl ...">Ką darome kad juos pasiektume:</p>
      </div>
    </div>
  );
}
