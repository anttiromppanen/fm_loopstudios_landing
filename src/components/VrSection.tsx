import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import vrImageDesktop from "../assets/images/image-interactive-desktop.jpg";
import vrImageMobile from "../assets/images/image-interactive-mobile.jpg";

function VrSection() {
  const ref = useRef(null);
  const sectionIsInView = useInView(ref, {
    once: true,
    amount: "all",
  });

  return (
    <div
      ref={ref}
      className="relative mt-24 flex w-full flex-col justify-center overflow-hidden md:mt-40 md:min-h-[500px]"
    >
      <motion.img
        initial={{ opacity: 0 }}
        animate={sectionIsInView && { opacity: 1 }}
        transition={{ duration: 1 }}
        src={vrImageMobile}
        alt="Wolverine with virtual reality goggles"
        className="md:hidden"
      />
      <motion.img
        initial={{ opacity: 0 }}
        animate={sectionIsInView && { opacity: 1 }}
        transition={{ duration: 1 }}
        src={vrImageDesktop}
        alt="Wolverine with virtual reality goggles"
        className="hidden max-h-[500px] max-w-[731px] md:block"
      />
      <motion.div
        initial={{ x: "100vw", opacity: 0 }}
        animate={sectionIsInView && { x: 0, opacity: 1 }}
        transition={{
          type: "spring",
          bounce: 0.2,
          duration: 1,
          delay: 0.5,
        }}
        className="
        bg-white pt-12 text-center lg:absolute lg:bottom-0 lg:right-0
        lg:max-w-[545px] lg:pl-24 lg:pt-24 lg:text-left"
      >
        <h2 className="font-josefinSans text-3xl lg:text-5xl">
          THE LEADER IN INTERACTIVE VR
        </h2>
        <p className="mt-7 px-6 text-userDarkGray lg:px-0">
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </motion.div>
    </div>
  );
}

export default VrSection;
