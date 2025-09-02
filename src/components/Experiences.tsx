import Title from "./title";
// import imgPrisma from "../assets/techno/prisma.webp";
// import imgJS from "../assets/techno/js.png";
// import imgTS from "../assets/techno/typescript.svg";
// import imgHTML from "../assets/techno/html.png";
// import imgCSS from "../assets/techno/css.png";
// import imgReact from "../assets/techno/react.png";
// import imgNode from "../assets/techno/node-js.png";
// import imgTailwind from "../assets/techno/tailwind.png";
// import imgNext from "../assets/techno/next-js.webp";
import {
    Collapsible,
    CollapsibleTrigger,
    CollapsibleContent
} from "./lightswind/collapsible";
import Aos from "aos";
import onama from "../assets/companies/onama.webp";
import cts from "../assets/companies/cts.jpeg";
import duval from "../assets/companies/duval.jpeg";
import asecna from "../assets/companies/asecna.webp";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect } from "react";

// const Languages = [
//     { id: 1, name: "JavaScript", icon: imgJS },
//     { id: 2, name: "TypeScript", icon: imgTS },
//     { id: 3, name: "HTML", icon: imgHTML },
//     { id: 4, name: "CSS", icon: imgCSS },
//     { id: 5, name: "React", icon: imgReact },
//     { id: 6, name: "Node.js", icon: imgNode },
//     { id: 7, name: "Tailwind CSS", icon: imgTailwind },
//     { id: 8, name: "Prisma", icon: imgPrisma },
//     { id: 9, name: "Next.js", icon: imgNext },
// ]

const experiences = [
    {
        id: 1,
        role: "Stage en Cybersécurité – Groupe Du Vaal, Douala ",
        company: "",
        period: "avril – juin 2024",
        description: [
            " Participation à la configuration et au test de pare - feux et VPN ; \nAssistance à l’évaluation de vulnérabilités sur les systèmes internes ;\n Collaboration avec l’équipe IT pour la mise en place de contrôles d’accès.",
        ],
        image: duval,
    },
    {
        id: 2,
        role: "Secrétaire Informatique – Cameroun Travaux & Services (CTS), N’Djaména ",
        company: "",
        period: "2022 – 2023",
        description: [
            " Gestion des équipements et des accès réseau ;\n Support aux utilisateurs et administration des systèmes bureautiques.",
        ],
        image: cts,
    },
    {
        id: 3,
        role: "Stagiaire – Agence pour la Sécurité de la Navigation Aérienne en Afrique et à Madagascar(ASECNA), Centre de Contrôle Régional, N’Djaména ",
        company: "",
        period: "2022",
        description: [
            " Contribution au monitoring réseau pour les infrastructures aéronautiques ;\n Rédaction de rapports techniques sur les performances système ",
        ],
        image: asecna,
    },
    {
        id: 4,
        role: "Stagiaire – ONAMA (Télévision nationale Tchadienne), N’Djaména (2021) : Suivi des opérations de diffusion numérique et maintenance réseau.",
        company: "",
        period: "2022",
        description: [
            " Suivi des opérations de diffusion numérique et maintenance réseau.",
        ],
        image: onama,
    },
];

const Experiences = () => {

     useEffect(() => {
                   Aos.init({
                       duration: 500,
                       once: true,
                   });
               })
    return (
        <div id="Experiences" >
            <Title title="My Experiences" />
            <div className="flex items-center justify-center flex-col-reverse md:flex-row">
          
                <div className="md:ml-4 flex flex-col w-full space-y-4 py-4">
                    {experiences.map((exp) => (
                        <Collapsible className=" " data-aos="fade-right">

                            <CollapsibleTrigger asChild className="" >
                                <div key={exp.id} className="flex flex-col space-y-4 md:space-y-0 md:flex-row items-center  md:h-40 transition-transform transform duration-300 hover:scale-105  flex-col transform relative overflow-hidden  bg-base-200 px-5 py-2 rounded-3xl shadow-lg " data-aos="fade-right">


                                    <div className=" h-30 w-50 rounded-3xl bg-gray-500 transform duration-300 hover:w-100 ">
                                        <img
                                            alt=""
                                            width={500}
                                            height={500}

                                            className={" object-cover shadow-[0_5px_20px_rgba(0,200,255,0.6)] relative h-full w-full rounded-3xl "}

                                            src={exp.image}// https://picsum.photos/500/350?image=${(id + 5) * 11}
                                        />
                                    </div>
                                    <div className=" flex flex-col  transition-all duration:500 md:hover:space-y-3 md:space-y-25 w-full h-full">
                                        {/* <img src={exp.image} alt={exp.company} className="object-cover h-10 w-10" /> */}
                                        <div className="ml-4">
                                            <h1 className="text-info font-bold text-xl">
                                                {exp.role} {exp.company}
                                            </h1>
                                            <span className="text-sm">
                                                {exp.period}

                                            </span>
                                        </div>
                                        <button className=" w-full relative  flex  items-center flex-col justify-center space-x-2 text-sm text-gray-300">

                                            <p>voir plus </p>
                                            <ChevronDown />
                                        </button>
                                    </div>

                                </div>

                            </CollapsibleTrigger>
                            <CollapsibleContent className="px-4 ">

                                {/* Zone de réponse */}
                                <motion.div
                                    key={exp.id}
                                    initial={{ opacity: 0, y: -30 }}
                                    animate={{ opacity: 1, y: 10 }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                    className=" h-30 bg-gradient-to-br  from-gray-800 to-gray-900 rounded-2xl shadow-lg p-5"
                                >
                                    <div className="whitespace-normal h-full rounded-2xl w-auto" >
                                        <p className="text-gray-200 text-md whitespace-pre-line">  {exp.description}</p>
                                    </div>
                                </motion.div>
                            </CollapsibleContent>
                        </Collapsible>

                    ))}

                </div>
            </div>

        </div>
    );
}

export default Experiences;