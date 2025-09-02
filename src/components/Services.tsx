import Title from "./title";
import { InteractiveGradient } from "./lightswind/interactive-gradient"
import Wave from 'react-wavify'

import Aos from "aos";
import "aos/dist/aos.css";
import {
    Card,
    CardHeader,
    CardContent,
    CardFooter,
} from "./lightswind/card";
import { useEffect } from "react"
import img1 from "../assets/1.webp"
import img2 from "../assets/2.png"
import img3 from "../assets/3.png"
import img4 from "../assets/4.webp"
import img5 from "../assets/5.webp"
import img6 from "../assets/6.webp"


const Services = () => {

    useEffect(() => {
        Aos.init({
            duration: 800,
            once: true,
        });
    })

    return (
        <div className="flex flex-col items-center justify-center  relative" id="Projects">
            <Wave fill='#121c22'
                paused={false}
                style={{ display: 'flex' }}
                options={{
                    height: 20,
                    amplitude: 60,
                    speed: 0.15,
                    points: 4
                }}
                className="transform rotate-180"
            />
            <Title title="Mes projets" dataAos="fade-down"  />
            <p data-aos="fade-right ">Voici un aperçu de mes projets.</p>


            <div className="  flex-wrap md:flex-nowrap grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                <InteractiveGradient
                  dataAos="fade-right"
                    color="#1890ff"
                    glowColor="#ffc40050"
                    followMouse={true}
                    hoverOnly={false}
                    intensity={100}
                    backgroundColor="#151419"
                    width="20rem"
                    height="fit"
                    borderRadius="2.25rem"
                    className=" transition-all  justify-center h-100% mt-5 duration-500 hover:scale-105 hover:-translate-y-5 hover:shadow-[0_5px_20px_rgba(0,0,0,0.6)] shadow-[0_5px_20px_rgba(0,0,0,0.5)]">

                    <Card className="w-100% relative h-100% rounded-4xl border-none flex flex-col justify-between">
                        <CardHeader>
                            <div className="mb-5 w-full h-50 rounded-3xl bg-gray-500 transform duration-300 hover:h-60">
                                <img
                                    alt=""
                                    width={320}
                                    height={420}

                                    className={" object-cover shadow-[0_5px_20px_rgba(0,200,255,0.6)] relative h-full w-full rounded-3xl "}

                                    src={img1} // https://picsum.photos/500/350?image=${(id + 5) * 11}
                                />
                            </div>
                           <hr />
                        </CardHeader>
                        <CardContent className="text-white">
                            <p className="">Développement des plateformes, applications web et de surveillance réseau pour les projets
                                académiques (PHP, SQL, Python) ainsi que les architectures des réseaux optimisées et
                                sécurisées.</p>
                        </CardContent>
                        <CardFooter className="">
                            {/* <Button className="text-white rounded-2xl w-5/6 bg-[#ffc40050]  text-md p-0 transition-transform duration-400 hover:scale-99 hover:bg-[#755b06a6] hover:translate-y-1 shadow-[inset_3px_-3px_20px_rgba(0,0,0,0.8),-8px_15px_20px_rgba(0,0,0,0.7),-3px_5px_50px_rgba(0,200,255,0.2),inset_-7px_7px_20px_rgba(255,255,255,0.3)] " >
                                <a
                                    href="/Formations"
                                    onClick={() => {
                                        if ("/Formations".startsWith("/")) {
                                            window.scrollTo(0, 0);
                                        }
                                    }}
                                    className="w-full h-full p-2"
                                >

                                    Voir

                                </a></Button> */}
                        </CardFooter>
                    </Card>

                </InteractiveGradient>

                <InteractiveGradient
                    dataAos="fade-up"
                    color="#1890ff"
                    glowColor="#1076675d"
                    followMouse={true}
                    hoverOnly={false}
                    intensity={100}
                    backgroundColor="#151419"
                    width="20rem"
                    height="fit"
                    borderRadius="2.25rem"
                    className="h-100% justify-center hover:border-info transition-transform mt-5 duration-500  hover:scale-105 hover:-translate-y-5 hover:shadow-[0_5px_20px_rgba(0,0,0,0.6)] shadow-[0_5px_20px_rgba(0,0,0,0.5)]">
                    <Card className="w-100% relative h-100% rounded-4xl border-none flex flex-col justify-between">
                        <CardHeader>
                            <div className="mb-5 w-full h-50 rounded-3xl bg-gray-500 transform duration-300 hover:h-60">
                                <img
                                    alt=""
                                    width={320}
                                    height={420}

                                    className={" object-cover shadow-[0_5px_20px_rgba(0,200,255,0.6)] relative h-full w-full rounded-3xl "}

                                    src={img2}// https://picsum.photos/500/350?image=${(id + 5) * 11}
                                />
                            </div>
                           <hr />
                        </CardHeader>
                        <CardContent className="text-white">
                            <p>Implémentation d’un portail captif et d’un pare-feu pour sécuriser un réseau d’entreprise,
                                projet réalisé dans le cadre du projet de fin d’étude. </p>
                        </CardContent>
                        <CardFooter>
                            {/* <Button className="text-white p-0  rounded-2xl w-5/6 bg-[#1076675d] hover:bg-[#0a4b4171]  text-md transition-transform duration-400 hover:scale-99  hover:translate-y-1 shadow-[inset_3px_-3px_20px_rgba(0,0,0,0.8),-8px_15px_20px_rgba(0,0,0,0.7),-3px_5px_50px_rgba(0,200,255,0.2),inset_-7px_7px_20px_rgba(255,255,255,0.3)] " >
                                <a
                                    href="/Formations#solutions web"
                                    onClick={() => {
                                        if ("/Formations".startsWith("/")) {
                                            window.scrollTo(0, 0);
                                        }
                                    }}
                                    className="w-full h-full p-2"
                                >
                                    Voir

                                </a>
                            </Button> */}
                        </CardFooter>
                    </Card>

                </InteractiveGradient>

                <InteractiveGradient
                    dataAos="fade-down"
                    color="#1890ff"
                    glowColor="#0074d956"
                    followMouse={true}
                    hoverOnly={false}
                    intensity={100}
                    backgroundColor="#151419"
                    width="20rem"
                    height="fit"
                    borderRadius="2.25rem"
                    className="  hover:border-info justify-center h-100% transition-transform mt-5 duration-500 hover:scale-105 hover:-translate-y-5 hover:shadow-[0_5px_20px_rgba(0,0,0,0.6)] shadow-[0_5px_20px_rgba(0,0,0,0.5)]">
                    <Card className="w-100% relative h-100% rounded-4xl border-none flex flex-col justify-between">
                        <CardHeader>
                            <div className="mb-5 w-full h-50 rounded-3xl bg-gray-500 transform duration-300 hover:h-60">
                                <img
                                    alt=""
                                    width={320}
                                    height={420}

                                    className={" object-cover shadow-[0_5px_20px_rgba(0,200,255,0.6)] relative h-full w-full rounded-3xl "}

                                    src={img3} // https://picsum.photos/500/350?image=${(id + 5) * 11}
                                />
                            </div>
                            <hr />
                        </CardHeader>
                        <CardContent className="text-white">
                            <p>Challenge de cybersécurité CTF – Détection d’intrusions et analyse forensique, au Salon de
                                la cybersécurité du Cameroun (première édition en Novembre 2024). </p>
                        </CardContent>
                        <CardFooter>
                            {/* <Button className="text-white p-0 rounded-2xl w-5/6 bg-[#0074d956] hover:bg-[#003c70a1]  text-md transition-transform duration-400 hover:scale-99  hover:translate-y-1 shadow-[inset_3px_-3px_20px_rgba(0,0,0,0.8),-8px_15px_20px_rgba(0,0,0,0.7),-3px_5px_50px_rgba(0,200,255,0.2),inset_-7px_7px_20px_rgba(255,255,255,0.3)] " >
                                <a
                                    href="/Formations#ia"
                                    onClick={() => {
                                        if ("/Formations".startsWith("/")) {
                                            window.scrollTo(0, 0);
                                        }
                                    }}
                                    className="w-full h-full p-2"
                                >
                                    Voir

                                </a></Button> */}
                                 </CardFooter>
                    </Card>
                </InteractiveGradient>

                <InteractiveGradient
                    dataAos="fade-up"
                    color="#1890ff"
                    glowColor="#8f0f4459"
                    followMouse={true}
                    hoverOnly={false}
                    intensity={100}
                    backgroundColor="#151419"
                    width="20rem"
                    height="fit"
                    borderRadius="2.25rem"
                    className=" hover:border-info justify-center transition-transform mt-5 duration-500 hover:scale-105 hover:-translate-y-5 hover:shadow-[0_5px_20px_rgba(0,0,0,0.9)] shadow-[0_5px_20px_rgba(0,0,0,0.5)] ">

                    <Card className="w-100% relative h-100% rounded-4xl border-none flex flex-col justify-between">
                        <CardHeader>
                            <div className="mb-5 w-full h-50 rounded-3xl bg-gray-500 transform duration-300 hover:h-60">
                                <img
                                    alt=""
                                    width={320}
                                    height={420}

                                    className={" object-cover shadow-[0_5px_20px_rgba(0,200,255,0.6)] relative h-full w-full rounded-3xl "}

                                    src={img4} // https://picsum.photos/500/350?image=${(id + 5) * 11}
                                />
                            </div>
                            <hr />
                        </CardHeader>
                        <CardContent className="text-white">
                            <p> Conception d’un module de détection d’attaques IoT via SDN (Mininet/Ryu). </p>
                        </CardContent>
                        <CardFooter>
                            {/* <Button className="text-white p-0 rounded-2xl w-5/6 bg-[#8f0f4459] hover:bg-[#3f081fb2] text-md transition-transform duration-400 hover:scale-99  hover:translate-y-1 shadow-[inset_3px_-3px_20px_rgba(0,0,0,0.8),-8px_15px_20px_rgba(0,0,0,0.7),-3px_5px_50px_rgba(0,200,255,0.2),inset_-7px_7px_20px_rgba(255,255,255,0.3)] " >
                                <a
                                    href="/Formations#design"
                                    onClick={() => {
                                        if ("/Formations".startsWith("/")) {
                                            window.scrollTo(0, 0);
                                        }
                                    }}

                                    className="w-full h-full p-2"
                                >
                                    Voir

                                </a></Button> */}
                                 </CardFooter>
                    </Card>
                </InteractiveGradient>

                <InteractiveGradient
                    dataAos="fade-up"
                    color="#1890ff"
                    glowColor="#8f0f4459"
                    followMouse={true}
                    hoverOnly={false}
                    intensity={100}
                    backgroundColor="#151419"
                    width="20rem"
                    height="fit"
                    borderRadius="2.25rem"
                    className=" hover:border-info justify-center transition-transform mt-5 duration-500 hover:scale-105 hover:-translate-y-5 hover:shadow-[0_5px_20px_rgba(0,0,0,0.9)] shadow-[0_5px_20px_rgba(0,0,0,0.5)] ">

                    <Card className="w-100% relative h-100% rounded-4xl border-none flex flex-col justify-between">
                        <CardHeader>
                            <div className="mb-5 w-full h-50 rounded-3xl bg-gray-500 transform duration-300 hover:h-60">
                                <img
                                    alt=""
                                    width={320}
                                    height={420}

                                    className={" object-cover shadow-[0_5px_20px_rgba(0,200,255,0.6)] relative h-full w-full rounded-3xl "}

                                    src={img5}  // https://picsum.photos/500/350?image=${(id + 5) * 11}
                                />
                            </div>
                           <hr />
                        </CardHeader>
                        <CardContent className="text-white">
                            <p>  Participation à la formation IA pour jeunes tchadiens (du 4 au 9 août 2025), avec acquisition de compétences en IA, cybersécurité et entrepreneuriat numérique.</p>
                        </CardContent>
                        <CardFooter>
                            {/* <Button className="text-white p-0 rounded-2xl w-5/6 bg-[#8f0f4459] hover:bg-[#3f081fb2] text-md transition-transform duration-400 hover:scale-99  hover:translate-y-1 shadow-[inset_3px_-3px_20px_rgba(0,0,0,0.8),-8px_15px_20px_rgba(0,0,0,0.7),-3px_5px_50px_rgba(0,200,255,0.2),inset_-7px_7px_20px_rgba(255,255,255,0.3)] " >
                                <a
                                    href="/Formations#design"
                                    onClick={() => {
                                        if ("/Formations".startsWith("/")) {
                                            window.scrollTo(0, 0);
                                        }
                                    }}

                                    className="w-full h-full p-2"
                                >
                                    Voir

                                </a></Button>  */}
                                </CardFooter>
                    </Card>
                </InteractiveGradient>
                <InteractiveGradient
                    dataAos="fade-up"
                    color="#1890ff"
                    glowColor="#8f0f4459"
                    followMouse={true}
                    hoverOnly={false}
                    intensity={100}
                    backgroundColor="#151419"
                    width="20rem"
                    height="fit"
                    borderRadius="2.25rem"
                    className="  mt-5 justify-center hover:scale-105 hover:-translate-y-5 hover:shadow-[0_5px_20px_rgba(0,0,0,0.9)] shadow-[0_5px_20px_rgba(0,0,0,0.5)] ">

                    <Card className="w-100% relative h-100% rounded-4xl border-none flex flex-col justify-between ">
                        <CardHeader>
                            <div className="mb-5 w-full h-50 rounded-3xl bg-gray-500 transform duration-300 hover:h-60">
                                <img
                                    alt=""
                                    width={320}
                                    height={420}

                                    className={" object-cover shadow-[0_5px_20px_rgba(0,200,255,0.6)] relative h-full w-full rounded-3xl "}

                                    src={img6} // https://picsum.photos/500/350?image=${(id + 5) * 11}
                                />
                            </div>
                            <hr />
                        </CardHeader>
                        <CardContent className="text-white">
                            <p>  Divers projets académiques en optimisation de protocoles et sécurité réseau (Projet DSL pour la gestion du QoS,  projet cryptographique en biométrie, Conception, déploiement et évaluation de serveurs NAS pour l’optimisation du stockage distribué dans les environnements Cloud Computing et réseaux, etc.)</p>
                        </CardContent>
                        <CardFooter>
                            {/* <Button className="text-white p-0 rounded-2xl w-5/6 bg-[#8f0f4459] hover:bg-[#3f081fb2] text-md transition-transform duration-400 hover:scale-99  hover:translate-y-1 shadow-[inset_3px_-3px_20px_rgba(0,0,0,0.8),-8px_15px_20px_rgba(0,0,0,0.7),-3px_5px_50px_rgba(0,200,255,0.2),inset_-7px_7px_20px_rgba(255,255,255,0.3)] " >
                                <a
                                    href="/Formations#design"
                                    onClick={() => {
                                        if ("/Formations".startsWith("/")) {
                                            window.scrollTo(0, 0);
                                        }
                                    }}

                                    className="w-full h-full p-2"
                                >
                                    Voir

                                </a></Button>  */}
                        </CardFooter>
                    </Card>
                </InteractiveGradient>

            </div>


            <div className=" mt-10 relative w-full h-5  overflow-hidden bg-white/50">

            </div>




        </div>
    );
}

export default Services;