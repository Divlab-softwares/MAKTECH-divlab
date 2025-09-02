import { Container } from "lucide-react"
import Aos from "aos"
import { useEffect } from "react"

const Navbar = () => {

    useEffect(() => {
            Aos.init({
                duration: 1000,
                once: true,
            });
        })


    return (
        <>
            {/* <div>
                <nav className="bg-gray-800 p-4">
                    <div className="container mx-auto flex justify-between items-center">
                        <div className="text-white text-lg font-bold">My Portfolio</div>
                        <ul className="flex space-x-4">
                            <li><a href="#Home" className="text-white hover:text-gray-400">Home</a></li>
                            <li><a href="#About" className="text-white hover:text-gray-400">About</a></li>
                            <li><a href="#Projects" className="text-white hover:text-gray-400">Projects</a></li>
                            <li><a href="#Contact" className="text-white hover:text-gray-400">Contact</a></li>
                        </ul>
                    </div>
                </nav>
            </div> */}
            <div className="flex justify-center md:justify-between items-center p-4 " id="home">
                <div className="w-fit flex justify-center items-center h-fit flex-col md:flex-row ">
                    <a href="" className="flex items-center font-bold text-3xl md:text-xl pr-2  border-b  md:border-r  z-3" data-theme = "dracula"><Container className="mr-2" /> MAK<span className="text-info">TECH</span>
                     
                    </a>
                    
                    <span className=" text-sm  ml-1 z-2" data-aos="fade-right">

                        Shaping Tomorrow's Network
                    </span>
                </div>
               

                <ul className="hidden md:flex space-x-4">
                    <li><a href="#About" className="text-white hover:text-gray-400 btn btn-sm btn-ghost">About</a></li>
                    <li><a href="#Projects" className="text-white hover:text-gray-400 btn btn-sm btn-ghost">Projects</a></li>
                    <li><a href="#Experiences" className="text-white hover:text-gray-400 btn btn-sm btn-ghost">Experiences</a></li>
                </ul>
            </div>
        </>
    )

}

export default Navbar