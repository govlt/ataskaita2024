'use client'
import Image from '../components/Image';
import Button from "@/components/Button";
import Link from 'next/link';
import {useRouter} from "next/navigation";

export default function Home() {
    const router = useRouter();
    const handleClick = (link: string) => {
        router.push(`/${link}`);
    };

    const buttonData = [
        {buttonText: '1', buttonDescription: 'Description 1', link: "tikslai"},
        {buttonText: '2', buttonDescription: 'Description 2', link: "tikslai?npp=1"},
        {buttonText: '3', buttonDescription: 'Description 3', link: "tikslai?npp=2"},
        {buttonText: '4', buttonDescription: 'Description 4', link: "tikslai?npp=3"},
        {buttonText: '5', buttonDescription: 'Description 5', link: "tikslai?npp=4"},
        {buttonText: '6', buttonDescription: 'Description 6', link: "tikslai?npp=5"},
    ];


    return (
        <div className="container">
            <div
                className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent"
            />


            <div className="row-auto">


                <Image
                    alt={"Kitaip"}
                    src={"/kitaip_image.png"}
                    className="object-center md:h-36 lg:h-48"
                    width={250}
                    height={100}
                />
                <Image
                    alt={"Ingrida Šimonytė"}
                    src={"/simonyte.png"}
                    className="object-center md:h-36 lg:h-48"
                    width={150}
                    height={300}
                />
                <h2>2022 m. vasario 24 d. pradėtas Rusijos karas prieš Ukrainą turės ilgalaikį poveikį Lietuvai.
                    Siekdama susidoroti su šia grėsme, Lietuvos Vyriausybė įgyvendino skirtingas priemones, įskaitant
                    ginklų modernizaciją, NATO infrastruktūros plėtrą, sienos apsaugą ir kibernetinį saugumą. Lietuva
                    gavo papildomą saugumo garantijų palaikymą iš NATO sąjungininkų. Tačiau geopolitinis nestabilumas ir
                    ekonomikos neapibrėžtumas daro įtaką Lietuvos ekonomikai. Šiuo metu Lietuva siekia stiprinti savo
                    energetinę nepriklausomybę nuo Rusijos ir Baltarusijos. Taip pat vyksta krizių valdymo reformos,
                    siekiant geriau reaguoti į neįprastas situacijas. Lietuvos įmonės taip pat prisitaiko prie naujų
                    sąlygų ir orientuojasi į eksportą į demokratines šalis. Vyriausybė įgyvendina ir kitus programinius
                    įsipareigojimus, tokius kaip švietimo reforma ir duomenų valdymo reforma. Visa tai galima rasti
                    Vyriausybės 2022 m. veiklos ataskaitoje.

                    Nuoširdžiai
                    Ministrė Pirmininkė Ingrida Šimonytė

                    2023 m. gegužės 15 d. Vilnius</h2>
                <Image
                    alt={"Ingridos Šimonytės parašas"}
                    src={"/simonyte_parasas.png"}
                    className=" object-center "
                    width={200}
                    height={25}
                />

            </div>
            <h6>Didžiuojamės šiais projektais:</h6>

            <Button title={'Gimdos kaklelio vėžio prevencijos programa'}></Button>
            <Button title={'Lietuvos tapimas Medicinos technologijų inovacijų centru'}></Button>
            <h6>NPP tikslai</h6>
            <ul className="button-grid">
                {buttonData.map((data, index) => (
                    <Button key={index} title={data.buttonText}
                            onClick={() => handleClick(data.link)}/>
                ))}
            </ul>

            <Button title={'1'}></Button>
            <Button title={'2'}></Button>
            <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">


            </div>
        </div>
    )
}
