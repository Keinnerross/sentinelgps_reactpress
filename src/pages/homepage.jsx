import PrimaryButton from "../common/buttons/primaryButton";
import MainCard from "../common/Cards/mainCard";
import AuxCard from "../common/Cards/auxCard";
import { imgServices } from "./ImgServices";
import CardImg from "../common/Cards/cardImg";
import AccordionFAQ from "../common/Accordion/AccordionFAQ";
import { Button, ButtonGroup } from '@chakra-ui/react'
const HomePage = () => {









    return (
        <div className="flex flex-col justify-center items-center">
            <div className="w-[100vw] h-[500px] bg-slate-900 flex justify-center items-center">
                <div className="w-[70%] flex justify-center flex-col items-center text-center gap-[50px]">
                    <h2 className="text-white text-[62px]">GPS para tus vehiculos, Seguridad y Control a tu Alcance</h2>
                    <PrimaryButton textBtn="Hacer una cotización" long={true}></PrimaryButton>
                </div>
            </div>

            {/* Estadisticas */}
            <div className="w-[90%] h-[450px] pt-[80px] bg-slate-200 flex justify-between gap-[50px] ">
                <AuxCard />
                <MainCard />
                <AuxCard />
            </div>

            {/* Video */}
            <div className="flex flex-col items-center py-[80px]">
                <div className="pb-[40px]" >
                    <h2 className="text-[42px]">Estás en buena compañía</h2>
                    <p>Impulsamos flotas de alto rendimiento en todas las industrias.</p>
                </div>
                <div className="bg-slate-900 min-w-[70vw] min-h-[500px]"></div>
            </div>

            {/* Servicios */}
            <div className="flex flex-col items-center pb-[100px] w-full">
                <h2 className="text-[42px] pb-[40px]">Estás en buena compañía</h2>
                <div className="w-[90vw] flex flex-wrap gap-14 justify-center">

                    {imgServices ?
                        imgServices.map((url) =>
                            <CardImg url={url} />
                        ) : "No hay nada por mostrar"
                    }

                </div>
            </div>


            {/* Preguntas Frecuentes */}

            <div className="w-full flex justify-center py-[100px] bg-slate-100 h-[500px]">
                <div className="w-[75%] flex justify-between items-center gap-[80px]">
                    <div className="flex flex-col gap-8 w-[50%]">
                        <h2 className="text-[50px]">Preguntas Frecuentes</h2>
                        <p className="26px">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, cupiditate dolore. Quos molestiae, tempora quidem quis id nemo fugiat numquam accusantium doloremque soluta culpa, totam, neque aspernatur ex praesentium. Odio?</p>
                        <Button colorScheme='grey' variant='outline' width="200px" fontSize="24px" paddingY="30px">
                            Button
                        </Button>
                    </div>
                    <div className="w-[50%]">
                        <AccordionFAQ />
                    </div>
                </div>
            </div>

            {/* Banner */}


            <div className=" w-full cursor-pointer bg-cover bg-center h-[300px] flex justify-center items-center" style={{ backgroundImage: `url(https://img.freepik.com/foto-gratis/camion-remolque-blanco-que-dice-scania-al-costado_123827-23486.jpg?t=st=1728088306~exp=1728091906~hmac=bc38d79b1a3a9528c623a22a8f7ca681aa46c9181a2e23571f43efc01e5264f8&w=1060)` }}>
                <div className="w-[75vw]  flex justify-between items-center">
                    <div className="text-white w-[50%] flex flex-col gap-4">
                        <h2 className="text-[42px] font-bold">Lorem ipsum, dolor sit amet</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo beatae minima in perspiciatis eum, voluptate vero veniam nam natus quia tempora mollitia at, voluptates velit, voluptatem impedit omnis id. Quod!
                        </p>
                    </div>
                    <Button colorScheme='gray' width="200px" fontSize="24px" paddingY="30px">
                        Button
                    </Button>
                    <div>

                    </div>
                </div>
            </div>
        </div >


    )
}

export default HomePage;