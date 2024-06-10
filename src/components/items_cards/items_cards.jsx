import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Logo from "../../assets/logo-new-1.png";

const ItemsCards = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1, // Adjust this value to control when the animation triggers
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const textVariants = {
    hidden: { x: -200, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const imageVariants = {
    hidden: { x: 200, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="ml-6 overflow-x-hidden">
      <div className="flex justify-center">
        <p className="font-sans text-[24px] sm:text-[28px] md:text-[35px] font-semibold p-4 rounded-[30px] text-white text-center">
          Plan your Best tour with Sample Travel
        </p>
      </div>

      <div className="relative px-[5%] md:px-[10%] grid grid-cols-1 md:grid-cols-2 gap-[5%] items-start">
        <div className="mt-8 text-white" ref={ref}>
          <motion.p
            initial="hidden"
            animate={controls}
            variants={textVariants}
            className="font-sans text-[24px] sm:text-[32px] md:text-[40px] font-semibold"
          >
            Travel With
          </motion.p>
          <motion.p
            initial="hidden"
            animate={controls}
            variants={{
              ...textVariants,
              visible: {
                ...textVariants.visible,
                transition: { duration: 0.5, delay: 0.2 },
              },
            }}
            className="text-[36px] sm:text-[48px] md:text-[60px] font-semibold"
          >
            Sample Travels
          </motion.p>
          <motion.p
            initial="hidden"
            animate={controls}
            variants={{
              ...textVariants,
              visible: {
                ...textVariants.visible,
                transition: { duration: 0.5, delay: 0.4 },
              },
            }}
            className="text-[14px] sm:text-[16px] md:text-[18px] text-white"
          >
            Welcome to Sri Lanka Travel Experts, your gateway to an
            extraordinary adventure in the resplendent island nation. Our
            curated tour packages invite you to discover diverse wonders, from
            pristine beaches to lush tea plantations. We offer a seamless blend
            of cultural exploration and thrilling adventures. Explore UNESCO
            World Heritage sites, unwind in Ayurvedic spas, and create lasting
          </motion.p>
        </div>
        <motion.div
          className="mt-8 md:mt-[10%] flex justify-center"
          initial="hidden"
          animate={controls}
          variants={imageVariants}
        >
          <img
            src={Logo}
            alt="logo"
            className="w-[150px] sm:w-[200px] md:w-[300px]"
          />
        </motion.div>
        <div className="absolute inset-y-0 left-1/2 w-0.5 bg-white transform -translate-x-1/2 hidden md:block"></div>
      </div>
    </div>
  );
};

export default ItemsCards;
