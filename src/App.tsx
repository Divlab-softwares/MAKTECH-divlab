import About from "./components/About";
import Experiences from "./components/Experiences";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ClickSpark from "./components/ClickSpark.tsx";
//import Carousel from './components/Caroussel1'
import Services from "./components/Services.tsx";
import Footer from "./components/footer.tsx";
//import { TeamCarousel } from './components/Carousel'

export default function App() {
  return (

    <>
      {/* <TeamCarousel members={[]} /> */}

      <ClickSpark
        sparkColor='#fff'
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >

          <div className="App">

            <div className="p-5 md:px-[15%]">
              <Navbar />
              <Home />
            </div>
            <About />
            <div className="p-5 md:px-[10%]">

              <Experiences />

            </div>
            <Services />

          </div>

          <Footer />

      </ClickSpark>
    </>
  )
}