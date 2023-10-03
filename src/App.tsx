import { motion } from "framer-motion";
import Container from "./components/Container";
import CreationsSection from "./components/CreationsSection/CreationsSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import VrSection from "./components/VrSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="mx-auto w-full max-w-screen-2xl">
      <motion.div
        initial={{ filter: "saturate(1)" }}
        animate={{ filter: "saturate(4)" }}
        transition={{
          type: "smooth",
          repeatType: "mirror",
          duration: 5,
          repeat: 10,
        }}
        className="
          bg-userHeroBgImgMobileBg md:bg-userHeroBgImgDesktopBg h-[100dvh] w-full 
          overflow-hidden bg-black bg-cover bg-center
          bg-no-repeat pt-10 md:h-[650px] md:pt-11"
      >
        <Container>
          <Navbar />
          <HeroSection />
        </Container>
      </motion.div>
      <Container>
        <VrSection />
        <CreationsSection />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
