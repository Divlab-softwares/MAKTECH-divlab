import Title from "./title";
import Aos from "aos";
import { useEffect } from "react";
import { CalendarSync, LetterText, Paintbrush } from "lucide-react";
import AutoSliderCarousel from './AutoSliderCarousel';
import img1 from "../assets/profil/profil_2.jpg"
import img2 from "../assets/profil/profil_3.jpg"
import img3 from "../assets/profil/profil_4.jpg"
// import img4 from "../assets/profil/profil_5.jpg"
import img5 from "../assets/profil/profil_6.jpg"
import img6 from "../assets/profil/profil_7.jpg"
import img7 from "../assets/profil/profil_8.jpg"
import img8 from "../assets/profil/profil_9.jpg"
import img9 from "../assets/profil/profil_10.jpg"
import img10 from "../assets/profil/profil_11.jpg"
import img11 from "../assets/profil/profil_12.jpg"
import img12 from "../assets/profil/profil_13.jpg"
import img13 from "../assets/profil/profil_14.jpg"
import img14 from "../assets/profil/profil_15.jpg"

const images = [
    img1,
    img2,
    img3,
    //img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
];

const AboutSections = [
    {
        id: 1 ,
        title: "Qui suis-je ?",
        icon: <LetterText className="text-info scale-150"/>,
        description: "Ingénieur en Réseaux et Sécurité Informatique, spécialisé dans les réseaux, la protection des infrastructures IT et l’administration des systèmes.",
    },
    {
        id: 2 ,
        title: "Mes competences",
        icon: <CalendarSync className="text-info scale-150"/>,
        description: "Compétences en analyse des systèmes, gestion de bases de données et conformité réglementaire.Passionné par l’innovation numérique, je mets mon expertise au service du réseau, de la transformation digitale et de la sécurisation des systèmes d’informations.",
    },
    {
        id: 3 ,
        title: "Mes projets",
        icon: <Paintbrush className="text-info scale-150"/>,
        description: "Expérience en développement d’applications et de sites web sécurisés, avec une maîtrise des outils de cybersécurité, de gestion des risques et d’optimisation SEO.",
    },
   
]; 


const About  =()=>{
     useEffect(() => {
                Aos.init({
                    duration: 300,
                    once: true,
                });
            })
    
    return ( 
        <div className="bg-base-300 p-10 flex flex-col  items-center mb-10 md:mb-32 md:my-32 my-10" id="About">
           <Title title="A propos" />
            <div className="md:h-screen flex flex-col md:flex-row justify-center items-center">
                <div className="hidden md:flex flex-row w-fit z-3 " data-aos="fade-left" data-aos-duration="1000">
                    <AutoSliderCarousel images={images} interval={4000} className="w-auto  object-cover  rounded-3xl  transform transition-transform duration-500 hover:scale-105 hover:-translate-y-5 hover:shadow-[0px_10px_20px_rgba(0,200,255,0.6)]" />
                    {/* <img src={img} alt="" className="w-auto  object-cover  rounded-xl  transform transition-transform duration-500 hover:scale-105 hover:-translate-y-5 hover:shadow-[0px_10px_20px_rgba(0,200,255,0.6)]"/> */}
                    <div className="w-[2px] h-auto bg-gray-300 mx-4">

                    </div>
                </div>

              
                
                <div className="md:ml-4 space-y-4 z-2 transform transition-transform duration-500 hover:scale-105">

                    
                    {AboutSections.map((Section) => (
                        <div key={Section.id} className=" transition-all duration-500 hover:scale-107 hover:-translate-y-1 flex flex-col md:flex-row items-center space-x-4 bg-base-100 md:w-96 p-4 rounded-xl shadow-md " data-aos="fade-right" data-aos-duration={`300 + 200*${Section.id}`}>
                            <div className="mb-2 md:mb-0">
                                {Section.icon}
                            </div>
                            <div className="md:ml-4 text-center md:text-left">
                                <h2 className="font-bold text-xl mb-1">
                                    {Section.title}
                                </h2>
                                <p className="text-sm">
                                    {Section.description}
                                </p>
                                
                            </div>
                        </div>
                    )
                    
                    
                    )}
        
                </div>
           </div> 
           
        </div>
     );
}

export default About;