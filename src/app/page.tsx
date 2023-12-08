'use client'
import Image from 'next/image'
import Button from "@/components/Button";

export default function Home() {
    const handleClick = (buttonText: string) => {
        alert(`Button clicked: ${buttonText}`);
    };

    const buttonData = [
        {buttonText: '1', buttonDescription: 'Description 1'},
        {buttonText: '2', buttonDescription: 'Description 2'},
        {buttonText: '3', buttonDescription: 'Description 3'},
        {buttonText: '4', buttonDescription: 'Description 4'},
        {buttonText: '5', buttonDescription: 'Description 5'},
        {buttonText: '6', buttonDescription: 'Description 6'},
    ];


    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="row-auto">
                <Image
                    src="/kitaip_image.png"
                    height={144}
                    width={144}
                    alt="Kitaip"
                />
                <Image
                    src="/simonyte.png"
                    height={144}
                    width={144}
                    alt="Ingrida Šimonytė"
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
                    src="/simonyte_parasas.png"
                    height={144}
                    width={144}
                    alt="Ingridos Šimonytės parašas"
                />

            </div>
            <h6>Didžiuojamės šiais projektais:</h6>
            <Button title={'Gimdos kaklelio vėžio prevencijos programa'}></Button>
            <Button title={'Lietuvos tapimas Medicinos technologijų inovacijų centru'}></Button>
            <h6>NPP tikslai</h6>
            <div className="button-grid">
                {buttonData.map((data, index) => (
                    <Button key={index} title={data.buttonText} onClick={() => handleClick(data.buttonDescription)}/>
                ))}
            </div>
            <Button title={'1'}></Button>
            <Button title={'2'}></Button>
            <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">


            </div>
        </main>
    )
}
