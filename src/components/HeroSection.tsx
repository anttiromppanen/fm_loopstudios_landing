import { motion } from "framer-motion";

function HeroSection() {
  return (
    <div
      className="
      flex h-full w-full flex-col items-center justify-center tracking-widest opacity-90 
      md:flex-row md:justify-start"
    >
      <motion.div
        initial={{
          filter: "brightness(1)",
        }}
        animate={{ filter: "brightness(0.6)" }}
        transition={{
          type: "smooth",
          repeatType: "mirror",
          duration: 0.05,
          delay: 2,
          repeat: 5,
        }}
        className="mb-14 h-fit border-2 border-white p-7 md:mb-16 md:basis-1/2 md:p-9"
      >
        <h1 className="font-josefinSans text-4xl text-white md:text-6xl">
          IMMERSIVE EXPERIENCES THAT DELIVER
        </h1>
      </motion.div>
    </div>
  );
}

export default HeroSection;
