import { Linkedin, Mail} from "lucide-react"
import { Container } from "lucide-react"
import Whatsapp from "/whatsapp.svg";

interface Footerprops {
    className?: string;
}

const Footer = ({ className }: Footerprops) => {
    return (
        <footer className={`flex flex-col items-center justify-center  relative text-white p-5 ${className}`} id="footer">
            {/* <SmokeyCursor /> */}
            <aside className="items-center flex flex-col">
                <a href="#home" className="gap-2 flex flex-col items-center">
                    <Container />
                    <p className="font-bold ">
                        MAK<span className="text-info">TECH</span>
                    </p>
                </a>
                <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
                <p>Made by DIVLAB</p>
            </aside>
            <nav>
                <div className="grid grid-flow-col gap-4 mt-3 text-black">
                    {/* <a href="https://www.facebook.com/share/16wnRmhYcd" target="_blank"><Facebook />{""}</a>
                    <a href=""><Instagram />{""}</a> */}
                    {/* <a href="#"><X /></a> */}
                    <a href="http://www.linkedin.com/in/mo%C3%AFse-anon-koyan%C3%A9" target="_blank"><Linkedin/>{""}</a>
                    <a href="mailto:manonkoyane.mak05@gmail.com" target="_blank" ><Mail />{""}</a>
                    <a href="whatsapp://send?phone=237686252285" target="_blank" className="">
                        <img src={Whatsapp} alt="" className="w-6 h-6 rounded-full mr-2" />{" "}
                    </a>
                </div>

            </nav>

        </footer>
    );
}

export default Footer;
