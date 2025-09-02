
import img from "../assets/profil/profil_1_1.jpg";
import Aos from "aos"
import { useEffect } from "react";

const Home = () => {

     useEffect(() => {
                Aos.init({
                    duration: 800,
                    once: true,
                });
            })
    
    return (
        <div className="flex flex-col-reverse relative md:flex-row justify-between items-center md:my-32 my-10"  >
           
            <div className="flex flex-col md:w-2/3" data-aos="fade-right">
                <h1 className="text-4xl md:text-5xl font-bold text-center md:text-left mt-4 md:mt-0">
                    Bienvenu, <br /> je suis MAK
                    <span className="text-info">
                        TECH
                    </span>
                    
                </h1>
                <p className="my-4 text-md text-center md:text-left">
                    Ingénieur en Réseaux et Sécurité Informatique,
                    spécialisé dans les réseaux, la
                    protection des infrastructures IT
                    et l’administration des systèmes. <br />
                </p>
                <a href="whatsapp://send?phone=237652509674" className="btn btn-info md:w-fit" data-aos="zoom-in-up">
                    contactez moi
                </a>
            </div>

            <div className="md:ml-50 " data-aos="fade-left">
                <img src={img} alt="" className=" h-96 object-cover border-8 border-info shadow-xl"
                style={{
                    borderRadius: "45% 55% 73% 27% / 73% 60% 40% 27% "
                }}/>
            </div>
        </div>
    );
}

export default Home;